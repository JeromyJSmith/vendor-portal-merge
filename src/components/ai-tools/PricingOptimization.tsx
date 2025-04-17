
import React, { useState } from 'react';
import { DollarSign, ArrowRight, Send, Percent } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/hooks/use-toast";

const PricingOptimization = () => {
  const [product, setProduct] = useState('');
  const [cost, setCost] = useState('');
  const [targetMargin, setTargetMargin] = useState(30);
  const [riskLevel, setRiskLevel] = useState(50);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');
  
  const examplePrompts = [
    `Recommend three price points for [${product || 'Product X'}] with production cost $${cost || '10'} targeting ${targetMargin}% margin while balancing market competitiveness.`,
    `Suggest optimal pricing strategy for [${product || 'Product X'}] with risk level ${riskLevel / 100} to maximize revenue without losing market share.`,
    `Calculate premium, standard, and economy price tiers for [${product || 'Product X'}] with ${targetMargin}% target margin and production cost $${cost || '10'}.`,
    `Analyze pricing elasticity for [${product || 'Product X'}] and recommend the optimal price point to maximize profit with a ${riskLevel}% risk tolerance.`,
  ];
  
  const handlePromptSelect = (prompt: string) => {
    setSelectedPrompt(prompt);
  };
  
  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and decimals
    const value = e.target.value;
    if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCost(value);
    }
  };
  
  const handleSubmit = async () => {
    if (!product || !cost) {
      toast({
        title: "Information required",
        description: "Please enter a product name and cost",
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
      //     `Calculate optimal pricing for ${product} with production cost $${cost}, 
      //      target margin ${targetMargin}%, and risk level ${riskLevel/100}`
      //   }
      // });
      
      // if (error) throw error;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const costNum = parseFloat(cost);
      const basePrice = costNum / (1 - (targetMargin / 100));
      const lowRisk = basePrice * 0.9;
      const highRisk = basePrice * 1.1;
      
      setResult(`
Based on your input:
- Product: ${product}
- Production Cost: $${cost}
- Target Margin: ${targetMargin}%
- Risk Level: ${riskLevel}%

Recommended Price Points:
1. Conservative: $${(lowRisk).toFixed(2)} (${(((lowRisk - costNum) / lowRisk) * 100).toFixed(1)}% margin)
2. Balanced: $${(basePrice).toFixed(2)} (${targetMargin}% margin)
3. Aggressive: $${(highRisk).toFixed(2)} (${(((highRisk - costNum) / highRisk) * 100).toFixed(1)}% margin)

Analysis:
The balanced price point of $${(basePrice).toFixed(2)} achieves your target margin of ${targetMargin}%. 
Given your risk tolerance level of ${riskLevel}%, we also recommend testing the aggressive pricing strategy 
if your product has strong differentiation in the market.`);
      
      toast({
        title: "Pricing optimization complete",
        description: "Your pricing recommendations have been generated successfully",
      });
    } catch (error) {
      toast({
        title: "Optimization failed",
        description: "There was an error generating your pricing recommendations",
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
          <DollarSign className="mr-2" size={20} />
          Pricing Optimization
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="neuro">
          <CardHeader>
            <CardTitle>Optimize Product Pricing</CardTitle>
            <CardDescription>
              Find the optimal price points for your products
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="product-name">Product Name</Label>
              <Input 
                id="product-name"
                placeholder="Enter product name" 
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="production-cost">Production Cost ($)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="production-cost"
                  placeholder="0.00"
                  value={cost}
                  onChange={handleCostChange}
                  className="pl-9"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="target-margin">Target Margin</Label>
                <span className="text-sm text-muted-foreground">{targetMargin}%</span>
              </div>
              <div className="flex items-center gap-2">
                <Percent className="h-4 w-4 text-muted-foreground" />
                <Slider
                  id="target-margin"
                  min={1}
                  max={90}
                  step={1}
                  value={[targetMargin]}
                  onValueChange={(value) => setTargetMargin(value[0])}
                  className="flex-1"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="risk-level">Risk Level</Label>
                <span className="text-sm text-muted-foreground">{riskLevel}%</span>
              </div>
              <Slider
                id="risk-level"
                min={0}
                max={100}
                step={1}
                value={[riskLevel]}
                onValueChange={(value) => setRiskLevel(value[0])}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Conservative</span>
                <span>Aggressive</span>
              </div>
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
              {loading ? "Calculating..." : "Calculate Pricing"}
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
                <CardTitle>Pricing Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-neuro-dark rounded-lg text-sm whitespace-pre-line">
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

export default PricingOptimization;
