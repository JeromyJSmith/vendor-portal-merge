
import { useState, useEffect } from 'react';
import { SendHorizontal, Paperclip, Image, Sparkles, BarChart2, Database, Mail, DollarSign, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RotatingMetrics } from './RotatingMetrics';
import { useIsMobile } from '@/hooks/use-mobile';

interface SmartButtonProps {
  function: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const SmartButton = ({ function: functionName, description, icon, index }: SmartButtonProps) => {
  return (
    <button className={cn(
      "neuro neuro-hover neuro-active px-2 md:px-4 py-2 rounded-lg flex items-center space-x-2 md:space-x-3",
      "w-full text-left animate-rotate-content opacity-0",
      index % 3 === 0 && "animation-delay-0",
      index % 3 === 1 && "animation-delay-[1.6s]",
      index % 3 === 2 && "animation-delay-[3.3s]"
    )}>
      <div className="p-1.5 md:p-2 neuro-inset rounded-lg">
        {icon}
      </div>
      <div>
        <h4 className="text-xs md:text-sm font-medium">{functionName}</h4>
        <p className="text-[10px] md:text-xs text-muted-foreground">{description}</p>
      </div>
    </button>
  );
};

interface MetricCardProps {
  metrics: Array<{title: string, value: string, unit: string}>;
}

const MetricCard = ({ metrics }: MetricCardProps) => {
  const [currentMetricIndex, setCurrentMetricIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentMetricIndex((prevIndex) => (prevIndex + 1) % metrics.length);
        setIsAnimating(false);
      }, 600); // Wait for fade out animation to complete
    }, 7000); // Longer interval between transitions
    
    return () => clearInterval(interval);
  }, [metrics.length]);
  
  const currentMetric = metrics[currentMetricIndex];
  
  return (
    <div className="neuro p-3 md:p-4 rounded-lg w-full max-w-xs h-20 md:h-24 flex flex-col justify-center overflow-hidden">
      <div className={cn("transition-all duration-600", isAnimating ? "animate-fade-out" : "animate-fade-in")}>
        <p className="text-xs md:text-sm text-muted-foreground">{currentMetric.title}</p>
        <div className="flex items-baseline mt-1">
          <h3 className="text-xl md:text-2xl font-bold">{currentMetric.value}</h3>
          <span className="ml-1 text-xs md:text-sm text-muted-foreground">{currentMetric.unit}</span>
        </div>
      </div>
    </div>
  );
};

const ChatView = () => {
  const [inputText, setInputText] = useState('');
  const [showPanel, setShowPanel] = useState(false);
  const isMobile = useIsMobile();
  
  const smartButtons = [
    { function: 'Generate Product Description', description: 'Create compelling copy', icon: <Sparkles size={16} /> },
    { function: 'Analyze Sales Trends', description: 'Get insights', icon: <BarChart2 size={16} /> },
    { function: 'Optimize Inventory', description: 'Manage stock levels', icon: <Database size={16} /> },
    { function: 'Create Marketing Email', description: 'Draft newsletter', icon: <Mail size={16} /> },
    { function: 'Suggest Pricing Strategy', description: 'Maximize profits', icon: <DollarSign size={16} /> },
    { function: 'Summarize Customer Feedback', description: 'Understand sentiment', icon: <MessageSquare size={16} /> },
  ];
  
  const metrics = [
    { title: 'Revenue Today', value: '1,234', unit: 'USD' },
    { title: 'Conversion Rate', value: '3.5', unit: '%' },
    { title: 'New Orders', value: '24', unit: 'orders' },
  ];
  
  // Simulate showing a panel when a message is sent
  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setShowPanel(true);
      setInputText('');
    }
  };
  
  return (
    <div className="relative h-full flex flex-col">
      <div className="flex-1 px-2 md:px-4 py-4 md:py-6 overflow-hidden flex flex-col md:flex-row">
        <div className="flex-1 flex items-center justify-center">
          {!showPanel ? (
            <div className="text-center max-w-xs md:max-w-md px-2">
              <h2 className="text-lg md:text-xl font-medium mb-2">Generative AI Assistant</h2>
              <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6">How can I help optimize your business today?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <RotatingMetrics />
                <RotatingMetrics />
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="flex justify-center mb-4 md:mb-6 px-2">
                <div className="w-full max-w-md md:max-w-lg">
                  <div className="neuro p-3 md:p-4 rounded-lg mb-4 md:mb-6">
                    <p className="text-xs md:text-sm">Here's the information you requested:</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center gap-3 md:gap-4 flex-wrap px-2">
                <MetricCard metrics={metrics} />
                <div className="neuro p-3 md:p-4 rounded-lg w-full max-w-xs">
                  <h3 className="text-xs md:text-sm font-medium mb-2">Top Selling Products</h3>
                  <div className="space-y-2">
                    {['Product A', 'Product B', 'Product C'].map((product, i) => (
                      <div key={i} className="text-[10px] md:text-xs flex justify-between">
                        <span>{product}</span>
                        <span className="text-muted-foreground">{50 - i * 10} units</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setShowPanel(false)} 
                className="mt-4 md:mt-6 mx-auto block text-[10px] md:text-xs text-muted-foreground hover:text-white"
              >
                Clear results
              </button>
            </div>
          )}
        </div>
        
        {showPanel && !isMobile && (
          <div className="w-full md:w-64 mt-4 md:mt-0 md:ml-4 animate-fade-in">
            <div className="neuro p-3 md:p-4 rounded-lg h-full">
              <h3 className="text-xs md:text-sm font-medium mb-3 md:mb-4">Related Actions</h3>
              <div className="space-y-2">
                <button className="neuro-sm neuro-hover neuro-active w-full text-left px-2 md:px-3 py-1.5 md:py-2 text-[10px] md:text-xs rounded-lg">
                  View detailed analytics
                </button>
                <button className="neuro-sm neuro-hover neuro-active w-full text-left px-2 md:px-3 py-1.5 md:py-2 text-[10px] md:text-xs rounded-lg">
                  Generate inventory report
                </button>
                <button className="neuro-sm neuro-hover neuro-active w-full text-left px-2 md:px-3 py-1.5 md:py-2 text-[10px] md:text-xs rounded-lg">
                  Schedule marketing campaign
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Quick Action Buttons - Scroll horizontally on mobile */}
      <div className="px-2 md:px-4 pb-2 md:pb-3 overflow-x-auto scrollbar-none">
        <div className="flex space-x-2 md:space-x-3 min-w-max max-w-3xl mx-auto">
          {/* Create Marketing Email Button */}
          <button className="neuro neuro-hover neuro-active px-3 md:px-4 py-2 rounded-lg flex items-center space-x-2 md:space-x-3 text-left">
            <div className="p-1 md:p-1.5 neuro-inset rounded-lg">
              <Mail size={isMobile ? 12 : 14} className="text-neuro-purple" />
            </div>
            <div>
              <h4 className="text-xs md:text-sm font-medium">Create Marketing Email</h4>
              <p className="text-[10px] md:text-xs text-muted-foreground">Draft newsletter</p>
            </div>
          </button>
          
          {/* Summarize Customer Feedback Button */}
          <button className="neuro neuro-hover neuro-active px-3 md:px-4 py-2 rounded-lg flex items-center space-x-2 md:space-x-3 text-left">
            <div className="p-1 md:p-1.5 neuro-inset rounded-lg">
              <MessageSquare size={isMobile ? 12 : 14} className="text-neuro-purple" />
            </div>
            <div>
              <h4 className="text-xs md:text-sm font-medium">Summarize Customer Feedback</h4>
              <p className="text-[10px] md:text-xs text-muted-foreground">Understand sentiment</p>
            </div>
          </button>
          
          {/* Suggest Pricing Strategy Button */}
          <button className="neuro neuro-hover neuro-active px-3 md:px-4 py-2 rounded-lg flex items-center space-x-2 md:space-x-3 text-left">
            <div className="p-1 md:p-1.5 neuro-inset rounded-lg">
              <DollarSign size={isMobile ? 12 : 14} className="text-neuro-purple" />
            </div>
            <div>
              <h4 className="text-xs md:text-sm font-medium">Suggest Pricing Strategy</h4>
              <p className="text-[10px] md:text-xs text-muted-foreground">Maximize profits</p>
            </div>
          </button>
        </div>
      </div>
      
      {/* Input Bar */}
      <div className="px-2 md:px-4 pb-4 md:pb-6">
        <div className="max-w-3xl mx-auto neuro-inset px-3 md:px-4 py-3 md:py-4 rounded-xl flex items-center min-h-[60px] md:min-h-[80px]">
          <input
            type="text"
            placeholder="Ask me anything about your business..."
            className="flex-1 bg-transparent outline-none text-xs md:text-sm min-h-[36px] md:min-h-[48px]"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <div className="flex items-center space-x-2 md:space-x-3 ml-2 md:ml-3">
            <button className="p-2 md:p-3 text-muted-foreground hover:text-white rounded-lg neuro neuro-hover neuro-active">
              <Paperclip size={isMobile ? 16 : 20} />
            </button>
            <button className="p-2 md:p-3 text-muted-foreground hover:text-white rounded-lg neuro neuro-hover neuro-active">
              <Image size={isMobile ? 16 : 20} />
            </button>
            <button 
              onClick={handleSendMessage}
              className="p-2 md:p-3 text-neuro-purple hover:text-neuro-blue rounded-lg neuro neuro-hover neuro-active transition-colors duration-300"
            >
              <SendHorizontal size={isMobile ? 16 : 20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
