
import React, { useState } from 'react';
import { BarChart2, ArrowRight, Send, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const MarketAnalysis = () => {
  const [product, setProduct] = useState('');
  const [category, setCategory] = useState('');
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');
  
  const categories = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'home', label: 'Home & Kitchen' },
    { value: 'beauty', label: 'Beauty & Personal Care' },
    { value: 'sports', label: 'Sports & Outdoors' },
  ];
  
  const examplePrompts = [
    `Analyze ${formatDateRange(dateRange) || 'recent'} sales trends for ${product || '[Product X]'} compared to competitors.`,
    `Identify growth opportunities for ${product || '[Product X]'} based on ${formatDateRange(dateRange) || 'current'} market data.`,
    `Summarize consumer sentiment for ${product || '[Product X]'} across social media and review platforms for ${formatDateRange(dateRange) || 'this quarter'}.`,
    `Compare market share of ${product || '[Product X]'} in ${category || 'selected category'} during ${formatDateRange(dateRange) || 'recent period'}.`,
  ];
  
  function formatDateRange(range: { from: Date | undefined; to: Date | undefined }) {
    if (!range.from) return '';
    if (!range.to) return format(range.from, 'MMM dd, yyyy');
    return `${format(range.from, 'MMM dd, yyyy')} to ${format(range.to, 'MMM dd, yyyy')}`;
  }
  
  const handlePromptSelect = (prompt: string) => {
    setSelectedPrompt(prompt);
  };
  
  const handleSubmit = async () => {
    if (!product && !category) {
      toast({
        title: "Information required",
        description: "Please enter a product name or select a category",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      // In a real implementation, this would call the Supabase function
      // const { data, error } = await supabase.functions.invoke('chat-message', {
      //   body: { 
      //     prompt: selectedPrompt || 
      //     `Analyze market trends for ${product || category} during ${formatDateRange(dateRange) || 'recent period'}`
      //   }
      // });
      
      // if (error) throw error;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setResult(`This is a simulated market analysis for ${product || category} during ${formatDateRange(dateRange) || 'recent period'}. In a real implementation, this would include market trends, competitor analysis, and growth opportunities based on the prompt: "${selectedPrompt || `Analyze market trends for ${product || category}`}"`);
      
      toast({
        title: "Analysis complete",
        description: "Your market analysis has been generated successfully",
      });
    } catch (error) {
      toast({
        title: "Analysis failed",
        description: "There was an error generating your market analysis",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium flex items-center">
          <BarChart2 className="mr-2" size={20} />
          Market Analysis
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="neuro">
          <CardHeader>
            <CardTitle>Analyze Market Trends</CardTitle>
            <CardDescription>
              Get insights on market trends and competition for your products
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="product-name">Product Name (Optional)</Label>
              <Input 
                id="product-name"
                placeholder="Enter specific product" 
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select product category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Date Range</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateRange.from && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {dateRange.from ? (
                      dateRange.to ? (
                        <>
                          {format(dateRange.from, "LLL dd, y")} -{" "}
                          {format(dateRange.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(dateRange.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Select date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                  <CalendarComponent
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange as any}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="custom-prompt">Custom Prompt</Label>
              <Textarea 
                id="custom-prompt"
                placeholder="Write a custom prompt or select from examples below"
                value={selectedPrompt}
                onChange={(e) => setSelectedPrompt(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? "Analyzing..." : "Generate Analysis"}
              {!loading && <Send className="ml-2" size={16} />}
            </Button>
          </CardFooter>
        </Card>
        
        <div className="space-y-6">
          <Card className="neuro">
            <CardHeader>
              <CardTitle>Example Prompts</CardTitle>
              <CardDescription>
                Select a template to get started quickly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {examplePrompts.map((prompt, index) => (
                <button
                  key={index}
                  className="neuro-sm neuro-hover neuro-active p-3 rounded-lg flex items-center justify-between w-full text-left"
                  onClick={() => handlePromptSelect(prompt)}
                >
                  <div className="text-sm truncate">{prompt}</div>
                  <ArrowRight size={14} className="opacity-50 shrink-0" />
                </button>
              ))}
            </CardContent>
          </Card>
          
          {result && (
            <Card className="neuro">
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-neuro-dark rounded-lg text-sm">
                  {result}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => navigator.clipboard.writeText(result)}>
                  Copy to Clipboard
                </Button>
                <Button variant="outline" onClick={() => setResult('')}>
                  Clear
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
