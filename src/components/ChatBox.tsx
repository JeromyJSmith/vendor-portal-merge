import { useState, useRef, useEffect } from 'react';
import { SendHorizontal, Paperclip, Image, X, Loader2, AlertCircle, MessageSquare } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Textarea } from '@/components/ui/textarea';
import { useLocation } from 'react-router-dom';
import { useFileUpload } from '@/hooks/use-file-upload';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'system';
  timestamp: Date;
}

const ChatBox = () => {
  const [inputText, setInputText] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [supabaseAvailable, setSupabaseAvailable] = useState(isSupabaseConfigured());
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { uploadFile, isUploading } = useFileUpload();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isExpanded]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatBoxRef.current && !chatBoxRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  useEffect(() => {
    setIsExpanded(false);
  }, [location.pathname]);

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;
    
    setIsExpanded(true);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    
    try {
      if (!supabaseAvailable) {
        throw new Error("Supabase is not configured. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment variables.");
      }
      
      const { data, error } = await supabase.functions.invoke('chat-message', {
        body: { message: inputText }
      });
      
      if (error) throw error;
      
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: data.text || "Sorry, I couldn't process your request at this time.",
        sender: 'system',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, response]);
    } catch (error) {
      console.error('Error calling chat function:', error);
      toast({
        title: "Chat Error",
        description: "Could not process your message. Please try again.",
        variant: "destructive"
      });
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: error instanceof Error 
          ? error.message 
          : "Sorry, I'm having trouble connecting right now. Please try again later.",
        sender: 'system',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const publicUrl = await uploadFile(file);
      
      const userMessage: Message = {
        id: Date.now().toString(),
        text: `Uploaded file: ${file.name}\n${publicUrl}`,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
    } catch (error) {
      toast({
        title: "Upload Error",
        description: "Could not upload file. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div 
      ref={chatBoxRef}
      className={`fixed left-0 right-0 bg-neuro/95 backdrop-blur-lg shadow-lg border-t border-gray-800/20 transition-all duration-500 ease-elegant z-10 ${
        isExpanded ? 'top-20 bottom-0 px-4 py-3' : 'bottom-0 h-16 px-4 py-3'
      }`}
    >
      {isExpanded && (
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <MessageSquare size={20} className="mr-2 text-neuro-purple" />
            <h3 className="text-base font-medium text-white">Chat Assistant</h3>
          </div>
          <button 
            onClick={() => setIsExpanded(false)}
            className="p-1.5 rounded-lg hover:bg-gray-800/30 text-gray-400"
          >
            <X size={18} />
          </button>
        </div>
      )}
      
      {isExpanded ? (
        <div className="flex-1 overflow-y-auto mb-4 bg-neuro-dark/50 rounded-lg p-4 h-[calc(100%-120px)] neuro-inset">
          {!supabaseAvailable && messages.length === 0 && (
            <Alert variant="destructive" className="mb-3">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Configuration Missing</AlertTitle>
              <AlertDescription>
                Supabase is not configured. To use the chat assistant, please add these environment variables:
                <ul className="list-disc ml-6 mt-2">
                  <li>VITE_SUPABASE_URL</li>
                  <li>VITE_SUPABASE_ANON_KEY</li>
                </ul>
                Then make sure to set OPENAI_API_KEY in your Supabase project's secrets.
              </AlertDescription>
            </Alert>
          )}
        
          {messages.length === 0 && supabaseAvailable ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-muted-foreground">
                <MessageSquare size={32} className="mx-auto mb-3 opacity-60 text-neuro-purple" />
                <p className="text-sm">How can I help you today?</p>
                <p className="text-xs mt-2 opacity-70">Ask me about your products, inventory, or sales</p>
              </div>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[75%] rounded-lg px-4 py-3 text-sm ${
                      message.sender === 'user' 
                        ? 'bg-neuro-purple text-white' 
                        : 'bg-gray-700/60 text-gray-100'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="break-words">{message.text}</span>
                      <span className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-gray-200' : 'text-gray-400'
                      }`}>
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-gray-700/60 rounded-lg px-4 py-3 flex items-center text-gray-100">
                    <Loader2 size={16} className="animate-spin mr-2" />
                    <span className="text-sm">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      ) : null}
      
      <div className="flex items-center">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          className="hidden"
          accept="image/*,.pdf,.doc,.docx"
        />
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="mr-3 p-2 rounded-full bg-neuro-purple/90 neuro neuro-hover neuro-active"
          aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
        >
          {isExpanded ? (
            <div className="w-4 h-1 bg-white rounded"></div>
          ) : (
            <MessageSquare size={20} className="text-white" />
          )}
        </button>
        
        <div className="flex-1 neuro-inset px-4 py-3 rounded-xl flex items-center min-h-[60px]">
          <Textarea
            ref={inputRef}
            placeholder="Type your message..."
            className="flex-1 bg-transparent outline-none text-sm min-h-[40px] resize-none border-none p-0 text-gray-300"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            rows={2}
            style={{ maxHeight: '80px' }}
          />
          <div className="flex items-center space-x-2 md:space-x-3 ml-2 md:ml-3">
            <button 
              className="p-2 md:p-3 text-muted-foreground hover:text-white rounded-lg neuro neuro-hover neuro-active"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
            >
              <Paperclip size={16} />
            </button>
            <button 
              className="p-2 md:p-3 text-muted-foreground hover:text-white rounded-lg neuro neuro-hover neuro-active"
              onClick={handleImageUpload}
              disabled={isUploading}
            >
              <Image size={16} />
            </button>
            <button 
              onClick={handleSendMessage}
              disabled={isLoading || inputText.trim() === '' || isUploading}
              className="p-2 md:p-3 text-neuro-purple hover:text-neuro-blue rounded-lg neuro neuro-hover neuro-active transition-colors duration-300"
            >
              {isLoading || isUploading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <SendHorizontal size={16} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
