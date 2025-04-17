This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: node_modules, .git, .next, .vercel, dist, build, *.log, *.lock, *.map, .DS_Store, .docs, **/node_modules/**, **/.next/**
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
public/
  placeholder.svg
  robots.txt
src/
  components/
    ai-tools/
      MarketAnalysis.tsx
      PricingOptimization.tsx
      ProductDescriptionGenerator.tsx
      SeoRecommendations.tsx
    filters/
      VendorFilter.tsx
    marketing/
      CalendarDialog.tsx
    ui/
      accordion.tsx
      alert-dialog.tsx
      alert.tsx
      aspect-ratio.tsx
      avatar.tsx
      badge.tsx
      breadcrumb.tsx
      button.tsx
      calendar.tsx
      card.tsx
      carousel.tsx
      chart.tsx
      checkbox.tsx
      collapsible.tsx
      command.tsx
      context-menu.tsx
      dialog.tsx
      drawer.tsx
      dropdown-menu.tsx
      form.tsx
      hover-card.tsx
      input-otp.tsx
      input.tsx
      label.tsx
      menubar.tsx
      navigation-menu.tsx
      pagination.tsx
      popover.tsx
      progress.tsx
      radio-group.tsx
      resizable.tsx
      scroll-area.tsx
      select.tsx
      separator.tsx
      sheet.tsx
      sidebar.tsx
      skeleton.tsx
      slider.tsx
      sonner.tsx
      switch.tsx
      table.tsx
      tabs.tsx
      textarea.tsx
      toast.tsx
      toaster.tsx
      toggle-group.tsx
      toggle.tsx
      tooltip.tsx
      use-toast.ts
    AiAssistantView.tsx
    AnalyticsView.tsx
    ChatBox.tsx
    ChatView.tsx
    ColorPalette.tsx
    DesignCanvas.tsx
    EnvTester.tsx
    InventoryView.tsx
    LayoutSelector.tsx
    MarketingView.tsx
    NavBar.tsx
    OrdersView.tsx
    ProductsView.tsx
    RotatingMetrics.tsx
    SettingsPanel.tsx
    SettingsView.tsx
  hooks/
    use-mobile.tsx
    use-toast.ts
  integrations/
    supabase/
      client.ts
      types.ts
  lib/
    utils.ts
  pages/
    Index.tsx
    MarketingCalendar.tsx
    NotFound.tsx
    ProductDesigner.tsx
    ProductPage.tsx
  App.css
  App.tsx
  index.css
  main.tsx
  vite-env.d.ts
supabase/
  functions/
    chat-message/
      index.ts
    test-env/
      index.ts
  config.toml
.gitignore
components.json
eslint.config.js
index.html
package.json
postcss.config.js
README.md
tailwind.config.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

# Files

## File: public/placeholder.svg
````
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" fill="none"><rect width="1200" height="1200" fill="#EAEAEA" rx="3"/><g opacity=".5"><g opacity=".5"><path fill="#FAFAFA" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/></g><path stroke="url(#a)" stroke-width="2.418" d="M0-1.209h553.581" transform="scale(1 -1) rotate(45 1163.11 91.165)"/><path stroke="url(#b)" stroke-width="2.418" d="M404.846 598.671h391.726"/><path stroke="url(#c)" stroke-width="2.418" d="M599.5 795.742V404.017"/><path stroke="url(#d)" stroke-width="2.418" d="m795.717 796.597-391.441-391.44"/><path fill="#fff" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/><g clip-path="url(#e)"><path fill="#666" fill-rule="evenodd" d="M616.426 586.58h-31.434v16.176l3.553-3.554.531-.531h9.068l.074-.074 8.463-8.463h2.565l7.18 7.181V586.58Zm-15.715 14.654 3.698 3.699 1.283 1.282-2.565 2.565-1.282-1.283-5.2-5.199h-6.066l-5.514 5.514-.073.073v2.876a2.418 2.418 0 0 0 2.418 2.418h26.598a2.418 2.418 0 0 0 2.418-2.418v-8.317l-8.463-8.463-7.181 7.181-.071.072Zm-19.347 5.442v4.085a6.045 6.045 0 0 0 6.046 6.045h26.598a6.044 6.044 0 0 0 6.045-6.045v-7.108l1.356-1.355-1.282-1.283-.074-.073v-17.989h-38.689v23.43l-.146.146.146.147Z" clip-rule="evenodd"/></g><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/></g><defs><linearGradient id="a" x1="554.061" x2="-.48" y1=".083" y2=".087" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="796.912" x2="404.507" y1="599.963" y2="599.965" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="c" x1="600.792" x2="600.794" y1="403.677" y2="796.082" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="d" x1="404.85" x2="796.972" y1="403.903" y2="796.02" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><clipPath id="e"><path fill="#fff" d="M581.364 580.535h38.689v38.689h-38.689z"/></clipPath></defs></svg>
````

## File: public/robots.txt
````
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
````

## File: src/components/ai-tools/MarketAnalysis.tsx
````typescript
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
````

## File: src/components/ai-tools/PricingOptimization.tsx
````typescript
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
````

## File: src/components/ai-tools/ProductDescriptionGenerator.tsx
````typescript
import React, { useState } from 'react';
import { Bot, ArrowRight, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const ProductDescriptionGenerator = () => {
  const [product, setProduct] = useState('');
  const [tone, setTone] = useState('professional');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');
  
  const tones = [
    { value: 'professional', label: 'Professional' },
    { value: 'casual', label: 'Casual' },
    { value: 'enthusiastic', label: 'Enthusiastic' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'technical', label: 'Technical' },
  ];
  
  const examplePrompts = [
    `Write a 50-word upbeat description for [${product || 'Product X'}] highlighting its durability.`,
    `Create a story-driven product description for [${product || 'Product X'}] that connects with eco-conscious customers.`,
    `Generate a concise, feature-focused description for [${product || 'Product X'}] emphasizing its unique selling points.`,
    `Craft a luxury-tone product description for [${product || 'Product X'}] that creates exclusivity and desirability.`,
  ];
  
  const handlePromptSelect = (prompt: string) => {
    setSelectedPrompt(prompt);
  };
  
  const handleSubmit = async () => {
    if (!product) {
      toast({
        title: "Product name required",
        description: "Please enter a product name before submitting",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      // In a real implementation, this would call the Supabase function
      // const { data, error } = await supabase.functions.invoke('chat-message', {
      //   body: { prompt: selectedPrompt || `Write a ${tone} description for ${product}` }
      // });
      
      // if (error) throw error;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setResult(`This is a simulated ${tone} product description for ${product}. In a real implementation, this would be generated by an AI model based on the prompt: "${selectedPrompt || `Write a ${tone} description for ${product}`}"`);
      
      toast({
        title: "Description generated",
        description: "Your product description has been created successfully",
      });
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating your product description",
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
          <Bot className="mr-2" size={20} />
          Product Description Generator
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="neuro">
          <CardHeader>
            <CardTitle>Create Product Description</CardTitle>
            <CardDescription>
              Generate compelling product descriptions with AI assistance
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
              <Label htmlFor="tone">Tone</Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  {tones.map((tone) => (
                    <SelectItem key={tone.value} value={tone.value}>
                      {tone.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
              {loading ? "Generating..." : "Generate Description"}
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
                <CardTitle>Generated Description</CardTitle>
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

export default ProductDescriptionGenerator;
````

## File: src/components/ai-tools/SeoRecommendations.tsx
````typescript
import React, { useState } from 'react';
import { Search, ArrowRight, Send, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const SeoRecommendations = () => {
  const [product, setProduct] = useState('');
  const [targetKeywords, setTargetKeywords] = useState('');
  const [productUrl, setProductUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');
  
  const examplePrompts = [
    `Generate an SEO-optimized meta title and description for [${product || 'Product X'}] targeting "${targetKeywords || 'target keywords'}"`,
    `Suggest 5 high-impact keywords for [${product || 'Product X'}] to improve search ranking based on current market trends`,
    `Analyze the product page at ${productUrl || 'URL'} and recommend SEO improvements to increase visibility`,
    `Create SEO-optimized product descriptions for [${product || 'Product X'}] incorporating "${targetKeywords || 'target keywords'}" naturally`,
  ];
  
  const handlePromptSelect = (prompt: string) => {
    setSelectedPrompt(prompt);
  };
  
  const handleSubmit = async () => {
    if (!product && !targetKeywords) {
      toast({
        title: "Information required",
        description: "Please enter a product name and target keywords",
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
      //     `Generate SEO recommendations for ${product} targeting keywords: ${targetKeywords}`
      //   }
      // });
      
      // if (error) throw error;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setResult(`
# SEO Recommendations for ${product}

## Meta Title & Description
**Title (55 chars):** ${product} | Premium ${targetKeywords || 'Product'} for [Benefit]
**Description (150 chars):** Discover our high-quality ${product} designed to [key benefit]. Features ${targetKeywords || 'key features'} and free shipping. Shop now!

## Key Recommendations
1. **Keyword Integration:** Naturally incorporate "${targetKeywords || 'target keywords'}" in product headings, descriptions, and image alt text
2. **URL Structure:** Use "${targetKeywords?.split(' ').join('-') || 'keywords'}" in your product URL
3. **Content Enhancement:** Add a FAQ section addressing common questions about ${targetKeywords || 'this product category'}
4. **Internal Linking:** Link to this product from related category pages using ${targetKeywords || 'relevant anchor text'}
5. **Image Optimization:** Rename product images to include ${targetKeywords || 'target keywords'} and add descriptive alt text

## Competitive Keywords to Consider
- premium ${targetKeywords || 'product'}
- best ${targetKeywords || 'product'} for [common use case]
- ${targetKeywords || 'product'} with [key feature]
- affordable ${targetKeywords || 'product alternative'}`);
      
      toast({
        title: "SEO recommendations generated",
        description: "Your SEO recommendations have been created successfully",
      });
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating your SEO recommendations",
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
          <Search className="mr-2" size={20} />
          SEO Recommendations
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="neuro">
          <CardHeader>
            <CardTitle>Optimize Search Visibility</CardTitle>
            <CardDescription>
              Improve your product's search engine visibility
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
              <Label htmlFor="target-keywords">Target Keywords</Label>
              <Input 
                id="target-keywords"
                placeholder="Enter target keywords separated by commas" 
                value={targetKeywords}
                onChange={(e) => setTargetKeywords(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="product-url">Product URL (Optional)</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="product-url"
                  placeholder="https://yourstore.com/products/your-product" 
                  value={productUrl}
                  onChange={(e) => setProductUrl(e.target.value)}
                  className="pl-9"
                />
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
              {loading ? "Generating..." : "Generate SEO Recommendations"}
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
                <CardTitle>SEO Recommendations</CardTitle>
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

export default SeoRecommendations;
````

## File: src/components/filters/VendorFilter.tsx
````typescript
import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

interface VendorOption {
  id: string;
  label: string;
}

interface VendorFilterProps {
  selectedVendor: string | null;
  onVendorChange: (vendorId: string) => void;
}

const vendors: VendorOption[] = [
  { id: "all", label: "All Vendors" },
  { id: "100-MMM", label: "100-MMM" },
  { id: "101-BAB", label: "101-BAB" },
  { id: "102-BSG", label: "102-BSG" },
  { id: "103-CCC", label: "103-CCC" },
  { id: "104-CVB", label: "104-CVB" },
  { id: "105-C3D", label: "105-C3D" },
  { id: "106-FAP", label: "106-FAP" },
  { id: "107-GVS", label: "107-GVS" },
  { id: "108-BRW", label: "108-BRW" },
  { id: "109-ITB", label: "109-ITB" },
  { id: "110-LGC", label: "110-LGC" },
  { id: "111-MVP", label: "111-MVP" },
  { id: "112-MWC", label: "112-MWC" },
  { id: "113-MJD", label: "113-MJD" },
  { id: "114-MYL", label: "114-MYL" },
  { id: "115-NUS", label: "115-NUS" },
  { id: "116-RBC", label: "116-RBC" },
  { id: "117-SAS", label: "117-SAS" },
  { id: "118-SPL", label: "118-SPL" },
  { id: "119-TAG", label: "119-TAG" },
  { id: "120-TCC", label: "120-TCC" },
  { id: "121-TLD", label: "121-TLD" },
  { id: "122-TSP", label: "122-TSP" },
  { id: "123-TTT", label: "123-TTT" },
  { id: "124-TKF", label: "124-TKF" },
  { id: "125-VNC", label: "125-VNC" },
];

const VendorFilter = ({ selectedVendor, onVendorChange }: VendorFilterProps) => {
  return (
    <div className="w-full">
      <Select 
        onValueChange={onVendorChange} 
        value={selectedVendor || "all"}
      >
        <SelectTrigger className="neuro-inset rounded-lg w-full">
          <SelectValue placeholder="Filter by vendor" />
        </SelectTrigger>
        <SelectContent className="bg-background border border-border rounded-lg shadow-lg max-h-[300px]">
          <SelectGroup>
            {vendors.map((vendor) => (
              <SelectItem key={vendor.id} value={vendor.id}>
                {vendor.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default VendorFilter;
````

## File: src/components/marketing/CalendarDialog.tsx
````typescript
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar as CalendarIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

// Sample marketing events data
const marketingEvents = [
  { date: new Date(2025, 3, 12), title: "Flash Sale", type: "Discount" },
  { date: new Date(2025, 3, 15), title: "Newsletter", type: "Email" },
  { date: new Date(2025, 3, 20), title: "Product Launch", type: "Event" },
]

const CalendarDialog = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const navigate = useNavigate()
  
  // Find events for the selected date
  const selectedDateEvents = React.useMemo(() => {
    if (!date) return []
    
    return marketingEvents.filter(
      event => 
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    )
  }, [date])
  
  // Handle "View Full Calendar" button click
  const handleViewFullCalendar = () => {
    navigate("/marketing-calendar")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="neuro neuro-hover neuro-active px-3 py-2 rounded-lg flex items-center bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">
          <CalendarIcon size={16} className="mr-2" />
          <span className="text-sm">Calendar</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Marketing Calendar</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md pointer-events-auto"
          />
          
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium">
                {date ? new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date) : "Select a date"}
              </h3>
              <button 
                className="text-xs text-blue-400 hover:text-blue-300"
                onClick={handleViewFullCalendar}
              >
                View Full Calendar
              </button>
            </div>
            
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-2">
                {selectedDateEvents.map((event, idx) => (
                  <div key={idx} className="neuro-sm rounded-md p-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{event.title}</span>
                      <span className="text-xs text-muted-foreground">{event.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No events scheduled</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CalendarDialog
````

## File: src/components/ui/accordion.tsx
````typescript
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
````

## File: src/components/ui/alert-dialog.tsx
````typescript
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
````

## File: src/components/ui/alert.tsx
````typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
````

## File: src/components/ui/aspect-ratio.tsx
````typescript
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }
````

## File: src/components/ui/avatar.tsx
````typescript
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
````

## File: src/components/ui/badge.tsx
````typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
````

## File: src/components/ui/breadcrumb.tsx
````typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
````

## File: src/components/ui/button.tsx
````typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
````

## File: src/components/ui/calendar.tsx
````typescript
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
````

## File: src/components/ui/card.tsx
````typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
````

## File: src/components/ui/carousel.tsx
````typescript
import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
````

## File: src/components/ui/chart.tsx
````typescript
import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
````

## File: src/components/ui/checkbox.tsx
````typescript
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
````

## File: src/components/ui/collapsible.tsx
````typescript
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
````

## File: src/components/ui/command.tsx
````typescript
import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
````

## File: src/components/ui/context-menu.tsx
````typescript
import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
````

## File: src/components/ui/dialog.tsx
````typescript
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
````

## File: src/components/ui/drawer.tsx
````typescript
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80 backdrop-blur-sm", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & {
    variant?: "default" | "light"
  }
>(({ className, children, variant = "default", ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border",
        variant === "light" ? "bg-neuro-light/90 backdrop-blur-md text-white" : "bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
````

## File: src/components/ui/dropdown-menu.tsx
````typescript
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
````

## File: src/components/ui/form.tsx
````typescript
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
````

## File: src/components/ui/hover-card.tsx
````typescript
import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
````

## File: src/components/ui/input-otp.tsx
````typescript
import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
````

## File: src/components/ui/input.tsx
````typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
````

## File: src/components/ui/label.tsx
````typescript
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
````

## File: src/components/ui/menubar.tsx
````typescript
import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
````

## File: src/components/ui/navigation-menu.tsx
````typescript
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
````

## File: src/components/ui/pagination.tsx
````typescript
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
````

## File: src/components/ui/popover.tsx
````typescript
import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
````

## File: src/components/ui/progress.tsx
````typescript
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
````

## File: src/components/ui/radio-group.tsx
````typescript
import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
````

## File: src/components/ui/resizable.tsx
````typescript
import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
````

## File: src/components/ui/scroll-area.tsx
````typescript
import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
````

## File: src/components/ui/select.tsx
````typescript
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
````

## File: src/components/ui/separator.tsx
````typescript
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
````

## File: src/components/ui/sheet.tsx
````typescript
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      variant: {
        default: "bg-background",
        light: "bg-neuro-light/90 backdrop-blur-md text-white",
      },
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
      variant: "default",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
  VariantProps<typeof sheetVariants> { }

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", variant = "default", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side, variant }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet, SheetClose,
  SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger
}
````

## File: src/components/ui/sidebar.tsx
````typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
````

## File: src/components/ui/skeleton.tsx
````typescript
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
````

## File: src/components/ui/slider.tsx
````typescript
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
````

## File: src/components/ui/sonner.tsx
````typescript
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
````

## File: src/components/ui/switch.tsx
````typescript
import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
````

## File: src/components/ui/table.tsx
````typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
````

## File: src/components/ui/tabs.tsx
````typescript
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
````

## File: src/components/ui/textarea.tsx
````typescript
import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
````

## File: src/components/ui/toast.tsx
````typescript
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
````

## File: src/components/ui/toaster.tsx
````typescript
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
````

## File: src/components/ui/toggle-group.tsx
````typescript
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
````

## File: src/components/ui/toggle.tsx
````typescript
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
````

## File: src/components/ui/tooltip.tsx
````typescript
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
````

## File: src/components/ui/use-toast.ts
````typescript
import { useToast, toast } from "@/hooks/use-toast";

export { useToast, toast };
````

## File: src/components/AiAssistantView.tsx
````typescript
import { useState } from 'react';
import { Bot, ArrowRight, Star, TrendingUp, DollarSign, Search, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ProductDescriptionGenerator from './ai-tools/ProductDescriptionGenerator';
import MarketAnalysis from './ai-tools/MarketAnalysis';
import PricingOptimization from './ai-tools/PricingOptimization';
import SeoRecommendations from './ai-tools/SeoRecommendations';

const AiAssistantView = () => {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const suggestionCards = [
    {
      id: "product-description",
      title: "Product Description Generator",
      description: "Create compelling product descriptions with AI",
      icon: <Bot size={16} />
    },
    {
      id: "market-analysis",
      title: "Market Analysis",
      description: "Get insights on market trends and competition",
      icon: <TrendingUp size={16} />
    },
    {
      id: "pricing-optimization",
      title: "Pricing Optimization",
      description: "Find the optimal price points for your products",
      icon: <DollarSign size={16} />
    },
    {
      id: "seo-recommendations",
      title: "SEO Recommendations",
      description: "Improve your product's search visibility",
      icon: <Search size={16} />
    },
  ];
  
  const renderActiveTool = () => {
    switch(activeTool) {
      case "product-description":
        return <ProductDescriptionGenerator />;
      case "market-analysis":
        return <MarketAnalysis />;
      case "pricing-optimization":
        return <PricingOptimization />;
      case "seo-recommendations":
        return <SeoRecommendations />;
      default:
        return (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium flex items-center">
                <Bot className="mr-2" size={20} />
                AI Assistant
              </h2>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="neuro p-6 rounded-lg">
                <h3 className="text-sm font-medium mb-4">AI Tools</h3>
                <div className="space-y-3">
                  {suggestionCards.map((card) => (
                    <button 
                      key={card.id} 
                      className="neuro-sm neuro-hover neuro-active p-3 rounded-lg flex items-center justify-between w-full"
                      onClick={() => setActiveTool(card.id)}
                    >
                      <div className="flex items-center">
                        <div className="p-2 neuro-inset rounded-lg mr-3">
                          {card.icon}
                        </div>
                        <div className="text-left">
                          <h4 className="text-sm font-medium">{card.title}</h4>
                          <p className="text-xs text-muted-foreground">{card.description}</p>
                        </div>
                      </div>
                      <ArrowRight size={14} className="opacity-50" />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="neuro p-6 rounded-lg mb-6">
                  <h3 className="text-sm font-medium mb-4">Recent AI Suggestions</h3>
                  <div className="space-y-3">
                    {[
                      "Update product descriptions for summer collection",
                      "Review pricing strategy for low-performing products",
                      "Create email marketing campaign for new arrivals"
                    ].map((suggestion, i) => (
                      <div key={i} className="neuro-sm p-3 rounded-lg text-xs">
                        {suggestion}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="neuro p-6 rounded-lg">
                  <h3 className="text-sm font-medium mb-4">AI Assistant Usage</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs">API Usage</span>
                        <span className="text-xs">70%</span>
                      </div>
                      <div className="h-2 bg-neuro-dark rounded-full">
                        <div className="h-full bg-neuro-blue rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Queries This Month</p>
                        <p className="text-lg font-bold">127 / 200</p>
                      </div>
                      <button className="neuro-sm neuro-hover neuro-active px-3 py-1 rounded-lg text-xs flex items-center">
                        <Star size={12} className="mr-1 text-amber-400" />
                        Upgrade
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="min-h-full bg-neuro">
      {activeTool ? (
        <div>
          <div className="p-4">
            <Button 
              onClick={() => setActiveTool(null)} 
              variant="outline" 
              size="sm" 
              className="gap-2"
            >
              <ArrowLeft size={16} />
              Back to AI Assistant
            </Button>
          </div>
          {renderActiveTool()}
        </div>
      ) : (
        renderActiveTool()
      )}
    </div>
  );
};

export default AiAssistantView;
````

## File: src/components/AnalyticsView.tsx
````typescript
import { BarChart2, TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sales: 400 },
  { name: 'Tue', sales: 600 },
  { name: 'Wed', sales: 500 },
  { name: 'Thu', sales: 700 },
  { name: 'Fri', sales: 800 },
  { name: 'Sat', sales: 1000 },
  { name: 'Sun', sales: 600 },
];

const AnalyticsView = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium flex items-center">
          <BarChart2 className="mr-2" size={20} />
          Analytics
        </h2>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Revenue</p>
          <div className="flex items-baseline justify-between mt-1">
            <h3 className="text-xl font-bold">$12,628</h3>
            <span className="text-xs text-green-400 flex items-center">
              <TrendingUp size={14} className="mr-1" /> 12.4%
            </span>
          </div>
        </div>
        
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Customers</p>
          <div className="flex items-baseline justify-between mt-1">
            <h3 className="text-xl font-bold">843</h3>
            <span className="text-xs text-green-400 flex items-center">
              <TrendingUp size={14} className="mr-1" /> 4.2%
            </span>
          </div>
        </div>
        
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Avg. Order Value</p>
          <div className="flex items-baseline justify-between mt-1">
            <h3 className="text-xl font-bold">$58.39</h3>
            <span className="text-xs text-red-400 flex items-center">
              <TrendingDown size={14} className="mr-1" /> 2.1%
            </span>
          </div>
        </div>
      </div>
      
      <div className="neuro p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium">Weekly Sales</h3>
          <div className="text-xs text-muted-foreground">Last 7 days</div>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#888888', fontSize: 12 }}
              />
              <YAxis 
                hide={true}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#222222', 
                  border: 'none',
                  borderRadius: '0.5rem',
                  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.4), -5px -5px 10px rgba(255, 255, 255, 0.05)'
                }}
              />
              <Bar 
                dataKey="sales" 
                fill="#5D87E8" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="neuro p-4 rounded-lg">
          <h3 className="text-sm font-medium mb-3">Top Products</h3>
          <div className="space-y-2">
            {[
              { name: "Premium T-shirt", sales: 128 },
              { name: "Designer Jeans", sales: 86 },
              { name: "Leather Bag", sales: 54 },
              { name: "Running Shoes", sales: 42 },
            ].map((product, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-xs">{product.name}</span>
                <span className="text-xs text-muted-foreground">{product.sales} sold</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="neuro p-4 rounded-lg">
          <h3 className="text-sm font-medium mb-3">Key Metrics</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-8 h-8 neuro-sm flex items-center justify-center rounded-lg mr-3">
                <Users size={16} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Conversion Rate</p>
                <p className="text-sm font-medium">3.42%</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 neuro-sm flex items-center justify-center rounded-lg mr-3">
                <ShoppingCart size={16} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Abandoned Cart</p>
                <p className="text-sm font-medium">21.8%</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 neuro-sm flex items-center justify-center rounded-lg mr-3">
                <DollarSign size={16} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Profit Margin</p>
                <p className="text-sm font-medium">24.3%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;
````

## File: src/components/ChatBox.tsx
````typescript
import { useState, useRef, useEffect } from 'react';
import { SendHorizontal, Paperclip, Image, X, Loader2, AlertCircle, MessageSquare } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Textarea } from '@/components/ui/textarea';
import { useLocation } from 'react-router-dom';

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
          <div className="flex items-center space-x-3 ml-3">
            <button 
              className="p-2.5 text-gray-500 hover:text-gray-300 rounded-lg neuro neuro-hover neuro-active"
              aria-label="Attach file"
              disabled={isLoading}
            >
              <Paperclip size={16} />
            </button>
            <button 
              className="p-2.5 text-gray-500 hover:text-gray-300 rounded-lg neuro neuro-hover neuro-active"
              aria-label="Attach image"
              disabled={isLoading}
            >
              <Image size={16} />
            </button>
            <button 
              onClick={handleSendMessage}
              className={`p-2.5 text-neuro-purple hover:text-white rounded-lg neuro neuro-hover neuro-active transition-all duration-300 ${
                (isLoading || inputText.trim() === '') ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Send message"
              disabled={isLoading || inputText.trim() === ''}
            >
              {isLoading ? (
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
````

## File: src/components/ChatView.tsx
````typescript
import { useState, useEffect } from 'react';
import { SendHorizontal, Paperclip, Image, Sparkles, BarChart2, Database, Mail, DollarSign, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RotatingMetrics } from './RotatingMetrics';

interface SmartButtonProps {
  function: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const SmartButton = ({ function: functionName, description, icon, index }: SmartButtonProps) => {
  return (
    <button className={cn(
      "neuro neuro-hover neuro-active px-4 py-2 rounded-lg flex items-center space-x-3",
      "w-full text-left animate-rotate-content opacity-0",
      index % 3 === 0 && "animation-delay-0",
      index % 3 === 1 && "animation-delay-[1.6s]",
      index % 3 === 2 && "animation-delay-[3.3s]"
    )}>
      <div className="p-2 neuro-inset rounded-lg">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium">{functionName}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
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
    <div className="neuro p-4 rounded-lg w-64 h-24 flex flex-col justify-center overflow-hidden">
      <div className={cn("transition-all duration-600", isAnimating ? "animate-fade-out" : "animate-fade-in")}>
        <p className="text-sm text-muted-foreground">{currentMetric.title}</p>
        <div className="flex items-baseline mt-1">
          <h3 className="text-2xl font-bold">{currentMetric.value}</h3>
          <span className="ml-1 text-sm text-muted-foreground">{currentMetric.unit}</span>
        </div>
      </div>
    </div>
  );
};

const ChatView = () => {
  const [inputText, setInputText] = useState('');
  const [showPanel, setShowPanel] = useState(false);
  
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
      <div className="flex-1 px-4 py-6 overflow-hidden flex">
        <div className="flex-1 flex items-center justify-center">
          {!showPanel ? (
            <div className="text-center max-w-md">
              <h2 className="text-xl font-medium mb-2">Generative AI Assistant</h2>
              <p className="text-muted-foreground text-sm mb-6">How can I help optimize your business today?</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <RotatingMetrics />
                <RotatingMetrics />
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="flex justify-center mb-6">
                <div className="max-w-lg w-full">
                  <div className="neuro p-4 rounded-lg mb-6">
                    <p className="text-sm">Here's the information you requested:</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center gap-4 flex-wrap">
                <MetricCard metrics={metrics} />
                <div className="neuro p-4 rounded-lg w-64">
                  <h3 className="text-sm font-medium mb-2">Top Selling Products</h3>
                  <div className="space-y-2">
                    {['Product A', 'Product B', 'Product C'].map((product, i) => (
                      <div key={i} className="text-xs flex justify-between">
                        <span>{product}</span>
                        <span className="text-muted-foreground">{50 - i * 10} units</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setShowPanel(false)} 
                className="mt-6 mx-auto block text-xs text-muted-foreground hover:text-white"
              >
                Clear results
              </button>
            </div>
          )}
        </div>
        
        {showPanel && (
          <div className="w-72 ml-4 animate-fade-in">
            <div className="neuro p-4 rounded-lg h-full">
              <h3 className="text-sm font-medium mb-4">Related Actions</h3>
              <div className="space-y-2">
                <button className="neuro-sm neuro-hover neuro-active w-full text-left px-3 py-2 text-xs rounded-lg">
                  View detailed analytics
                </button>
                <button className="neuro-sm neuro-hover neuro-active w-full text-left px-3 py-2 text-xs rounded-lg">
                  Generate inventory report
                </button>
                <button className="neuro-sm neuro-hover neuro-active w-full text-left px-3 py-2 text-xs rounded-lg">
                  Schedule marketing campaign
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Quick Action Buttons */}
      <div className="px-4 pb-3">
        <div className="max-w-3xl mx-auto flex space-x-3">
          {/* Create Marketing Email Button */}
          <button className="neuro neuro-hover neuro-active px-4 py-2 rounded-lg flex items-center space-x-3 text-left">
            <div className="p-1.5 neuro-inset rounded-lg">
              <Mail size={14} className="text-neuro-purple" />
            </div>
            <div>
              <h4 className="text-sm font-medium">Create Marketing Email</h4>
              <p className="text-xs text-muted-foreground">Draft newsletter</p>
            </div>
          </button>
          
          {/* Summarize Customer Feedback Button */}
          <button className="neuro neuro-hover neuro-active px-4 py-2 rounded-lg flex items-center space-x-3 text-left">
            <div className="p-1.5 neuro-inset rounded-lg">
              <MessageSquare size={14} className="text-neuro-purple" />
            </div>
            <div>
              <h4 className="text-sm font-medium">Summarize Customer Feedback</h4>
              <p className="text-xs text-muted-foreground">Understand sentiment</p>
            </div>
          </button>
          
          {/* Suggest Pricing Strategy Button */}
          <button className="neuro neuro-hover neuro-active px-4 py-2 rounded-lg flex items-center space-x-3 text-left">
            <div className="p-1.5 neuro-inset rounded-lg">
              <DollarSign size={14} className="text-neuro-purple" />
            </div>
            <div>
              <h4 className="text-sm font-medium">Suggest Pricing Strategy</h4>
              <p className="text-xs text-muted-foreground">Maximize profits</p>
            </div>
          </button>
        </div>
      </div>
      
      {/* Input Bar */}
      <div className="px-4 pb-6">
        <div className="max-w-3xl mx-auto neuro-inset px-4 py-4 rounded-xl flex items-center min-h-[80px]">
          <input
            type="text"
            placeholder="Ask me anything about your business..."
            className="flex-1 bg-transparent outline-none text-sm min-h-[48px]"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <div className="flex items-center space-x-3 ml-3">
            <button className="p-3 text-muted-foreground hover:text-white rounded-lg neuro neuro-hover neuro-active">
              <Paperclip size={20} />
            </button>
            <button className="p-3 text-muted-foreground hover:text-white rounded-lg neuro neuro-hover neuro-active">
              <Image size={20} />
            </button>
            <button 
              onClick={handleSendMessage}
              className="p-3 text-neuro-purple hover:text-neuro-blue rounded-lg neuro neuro-hover neuro-active transition-colors duration-300"
            >
              <SendHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
````

## File: src/components/ColorPalette.tsx
````typescript
import { useState, useEffect, useRef } from "react";
import { Lock, Unlock, Copy, RefreshCw, ChevronDown } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

// Sample color palettes for infinite scrolling
const SAMPLE_PALETTES = [
  ["#2a2a2a", "#8A7FC8", "#5D87E8", "#F6F6F7", "#ea384c"],
  ["#B38CB4", "#B7918C", "#C5A48A", "#DDC67B", "#F8F272"],
  ["#FCF7F8", "#CED3DC", "#ABA9C3", "#275DAD", "#5B616A"],
  ["#222222", "#9b87f5", "#7E69AB", "#6E59A5", "#1A1F2C"],
  ["#8E9196", "#D6BCFA", "#F2FCE2", "#FEF7CD", "#FEC6A1"],
  ["#E5DEFF", "#FFDEE2", "#FDE1D3", "#D3E4FD", "#F1F0FB"],
  ["#8B5CF6", "#D946EF", "#F97316", "#0EA5E9", "#403E43"],
  ["#FFFFFF", "#8A898C", "#1EAEDB", "#221F26", "#C8C8C9"],
];

type ColorPaletteProps = {
  onPaletteSelect?: (colors: string[]) => void;
};

const ColorPalette = ({ onPaletteSelect }: ColorPaletteProps) => {
  const [colors, setColors] = useState([
    { hex: "#2a2a2a", name: "Background", locked: false },
    { hex: "#8A7FC8", name: "Primary", locked: true },
    { hex: "#5D87E8", name: "Secondary", locked: false },
    { hex: "#F6F6F7", name: "Text", locked: false },
    { hex: "#ea384c", name: "Accent", locked: false }
  ]);
  
  const [palettes, setPalettes] = useState<string[][]>(SAMPLE_PALETTES);
  const [loading, setLoading] = useState(false);
  
  const { ref: loadMoreRef, inView } = useInView({
    threshold: 0.1,
  });
  
  // Load more palettes when scrolling reaches the bottom
  useEffect(() => {
    if (inView && !loading) {
      loadMorePalettes();
    }
  }, [inView]);
  
  const loadMorePalettes = () => {
    setLoading(true);
    // Simulate loading more palettes with a delay
    setTimeout(() => {
      // Generate some random variations of existing palettes
      const newPalettes = [...SAMPLE_PALETTES].map(palette => 
        palette.map(color => {
          const r = Math.floor(Math.random() * 40) - 20;
          const g = Math.floor(Math.random() * 40) - 20;
          const b = Math.floor(Math.random() * 40) - 20;
          return modifyColorShade(color, r, g, b);
        })
      );
      setPalettes(prev => [...prev, ...newPalettes]);
      setLoading(false);
    }, 500);
  };
  
  // Helper function to modify color shades
  const modifyColorShade = (hex: string, r: number, g: number, b: number) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return hex;
    
    const rr = Math.max(0, Math.min(255, parseInt(result[1], 16) + r));
    const gg = Math.max(0, Math.min(255, parseInt(result[2], 16) + g));
    const bb = Math.max(0, Math.min(255, parseInt(result[3], 16) + b));
    
    return `#${rr.toString(16).padStart(2, '0')}${gg.toString(16).padStart(2, '0')}${bb.toString(16).padStart(2, '0')}`;
  };
  
  const toggleLock = (index: number) => {
    const newColors = [...colors];
    newColors[index].locked = !newColors[index].locked;
    setColors(newColors);
  };
  
  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    toast({
      title: "Color copied",
      description: `${hex} copied to clipboard`,
      duration: 2000,
    });
  };
  
  const handleSelectPalette = (palette: string[]) => {
    // Replace unlocked colors with new palette colors
    const newColors = colors.map((color, i) => {
      if (!color.locked) {
        return { ...color, hex: palette[i % palette.length] };
      }
      return color;
    });
    
    setColors(newColors);
    
    // Notify parent component about the new palette
    if (onPaletteSelect) {
      onPaletteSelect(newColors.map(c => c.hex));
    }
    
    toast({
      title: "Palette applied",
      description: "The color palette has been applied to your design",
      duration: 2000,
    });
  };
  
  const generateNewPalette = () => {
    // Generate a new random palette while respecting locked colors
    const newColors = colors.map(color => {
      if (color.locked) return color;
      
      // Generate a random color
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
      
      return { ...color, hex };
    });
    
    setColors(newColors);
    
    // Notify parent component about the new palette
    if (onPaletteSelect) {
      onPaletteSelect(newColors.map(c => c.hex));
    }
  };
  
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Current Colors</h3>
      
      <div className="space-y-3">
        {colors.map((color, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="relative">
              <div 
                className="w-8 h-8 rounded-full cursor-pointer shadow-md transition-transform hover:scale-110"
                style={{backgroundColor: color.hex}}
                onClick={() => copyColor(color.hex)}
              />
              <button 
                className="absolute -top-1 -right-1 bg-neuro shadow-neuro-sm rounded-full w-5 h-5 flex items-center justify-center"
                onClick={() => toggleLock(index)}
              >
                {color.locked ? <Lock size={10} /> : <Unlock size={10} />}
              </button>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium">{color.name}</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-muted-foreground">{color.hex}</span>
                  <button 
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => copyColor(color.hex)}
                  >
                    <Copy size={12} />
                  </button>
                </div>
              </div>
              <div 
                className="w-full h-1 mt-1 rounded-full overflow-hidden"
                style={{background: `linear-gradient(to right, #000000, ${color.hex}, #ffffff)`}}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div>
        <h4 className="text-xs font-medium mb-2">Current Palette Preview</h4>
        <div className="flex mb-3 h-8 rounded-md overflow-hidden shadow-md">
          {colors.map((color, i) => (
            <div 
              key={i} 
              className="flex-1" 
              style={{backgroundColor: color.hex}}
            />
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-xs font-medium mb-2">Gradient Preview</h4>
        <div
          className="h-12 w-full rounded-lg mb-3 shadow-md"
          style={{
            background: `linear-gradient(to right, ${colors[0].hex}, ${colors[1].hex}, ${colors[2].hex})`
          }}
        />
        <div className="flex justify-between">
          <button className="text-xs text-neuro-purple hover:underline">Save Palette</button>
          <button 
            className="flex items-center gap-1 text-xs text-neuro-purple hover:underline"
            onClick={generateNewPalette}
          >
            <RefreshCw size={12} />
            <span>Generate New</span>
          </button>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="text-xs font-medium mb-2 flex items-center justify-between">
          <span>Suggested Palettes</span>
          <ChevronDown size={14} className="text-muted-foreground" />
        </h4>
        <div className="max-h-40 overflow-y-auto neuro-inset rounded-lg p-2 space-y-3">
          {palettes.map((palette, index) => (
            <div 
              key={index} 
              className="flex h-8 rounded-md overflow-hidden cursor-pointer shadow-neuro-sm hover:shadow-neuro-hover transition-shadow"
              onClick={() => handleSelectPalette(palette)}
            >
              {palette.map((color, colorIndex) => (
                <div 
                  key={colorIndex} 
                  className="flex-1" 
                  style={{backgroundColor: color}}
                />
              ))}
            </div>
          ))}
          <div ref={loadMoreRef} className="h-4 w-full flex items-center justify-center">
            {loading && (
              <div className="text-xs text-muted-foreground">Loading more...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
````

## File: src/components/DesignCanvas.tsx
````typescript
import { useState } from "react";
import { ChevronLeft, ChevronRight, Image, ShoppingCart, Heart, Star, Clock, Package, Truck, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

interface DesignCanvasProps {
  selectedLayout: string;
  colorPalette?: string[];
}

const DesignCanvas = ({ selectedLayout, colorPalette = ["#2a2a2a", "#8A7FC8", "#5D87E8", "#F6F6F7", "#ea384c"] }: DesignCanvasProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const backgroundColor = colorPalette[0] || "#2a2a2a";
  const primaryColor = colorPalette[1] || "#8A7FC8";
  const secondaryColor = colorPalette[2] || "#5D87E8";
  const textColor = colorPalette[3] || "#F6F6F7";
  const accentColor = colorPalette[4] || "#ea384c";
  
  const images = [
    "https://placehold.co/600x600/222/FFF/png?text=Product+Image",
    "https://placehold.co/600x600/222/FFF/png?text=Side+View",
    "https://placehold.co/600x600/222/FFF/png?text=Back+View",
  ];

  const getContrastTextColor = (hexColor: string): string => {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  };

  const renderModernLayout = () => (
    <div 
      className="neuro p-6 rounded-lg overflow-hidden"
      style={{ 
        background: backgroundColor,
        color: textColor 
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="relative">
          <div className="relative aspect-square rounded-lg neuro-inset flex items-center justify-center overflow-hidden">
            <img src={images[currentIndex]} alt="Product" className="w-full h-full object-cover" />
          </div>
          
          <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button 
                key={index} 
                className={cn(
                  "w-2 h-2 rounded-full",
                  index === currentIndex ? `bg-[${primaryColor}]` : "bg-white/20"
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 neuro p-2 rounded-full"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 neuro p-2 rounded-full"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
          >
            <ChevronRight size={16} />
          </button>
        </div>
        
        <div>
          <h1 className="text-2xl font-bold mb-2" style={{ color: textColor }}>
            Premium Wireless Headphones
          </h1>
          <p 
            className="text-xl font-bold mb-4" 
            style={{ color: primaryColor }}
          >
            $249.99
          </p>
          
          <p className="text-sm mb-6" style={{ color: textColor }}>
            Experience crystal-clear sound with our premium wireless
            headphones featuring active noise cancellation.
          </p>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2" style={{ color: textColor }}>
              Features:
            </h3>
            <ul className="space-y-1">
              <li className="text-sm flex items-baseline gap-2" style={{ color: textColor }}>
                <span className="text-xs">•</span>
                <span>Active Noise Cancellation</span>
              </li>
              <li className="text-sm flex items-baseline gap-2" style={{ color: textColor }}>
                <span className="text-xs">•</span>
                <span>30-hour battery life</span>
              </li>
              <li className="text-sm flex items-baseline gap-2" style={{ color: textColor }}>
                <span className="text-xs">•</span>
                <span>Bluetooth 5.2 connectivity</span>
              </li>
              <li className="text-sm flex items-baseline gap-2" style={{ color: textColor }}>
                <span className="text-xs">•</span>
                <span>Memory foam ear cushions</span>
              </li>
              <li className="text-sm flex items-baseline gap-2" style={{ color: textColor }}>
                <span className="text-xs">•</span>
                <span>Voice assistant compatible</span>
              </li>
              <li className="text-sm flex items-baseline gap-2" style={{ color: textColor }}>
                <span className="text-xs">•</span>
                <span>Foldable design for easy storage</span>
              </li>
            </ul>
          </div>
          
          <div className="flex space-x-3">
            <button 
              className="flex-1 neuro neuro-hover neuro-active px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              style={{ 
                backgroundColor: primaryColor,
                color: getContrastTextColor(primaryColor)
              }}
            >
              <ShoppingCart size={16} />
              <span>Add to Cart</span>
            </button>
            <button className="neuro neuro-hover neuro-active p-2 rounded-lg">
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 
          className="text-lg font-medium mb-4" 
          style={{ color: textColor }}
        >
          Product Details
        </h2>
        <p 
          className="text-sm mb-4" 
          style={{ color: textColor }}
        >
          Our Premium Wireless Headphones represent the pinnacle of audio technology, combining exceptional sound quality with unparalleled comfort. The advanced active noise cancellation technology creates an immersive listening experience by effectively blocking out ambient noise, allowing you to focus entirely on your music, podcasts, or calls.
        </p>
        <p 
          className="text-sm mb-4" 
          style={{ color: textColor }}
        >
          The headphones feature a long-lasting 30-hour battery life, ensuring they'll keep up with your busy lifestyle. Whether you're commuting, working, or traveling, you won't have to worry about running out of power. The memory foam ear cushions provide exceptional comfort for extended listening sessions, while the adjustable headband ensures a perfect fit for any head size.
        </p>
        <p 
          className="text-sm" 
          style={{ color: textColor }}
        >
          With Bluetooth 5.2 connectivity, you'll enjoy a stable, high-quality wireless connection with your devices. The built-in voice assistant compatibility allows for hands-free control, making it easy to manage your music, calls, and more with simple voice commands. When not in use, the foldable design makes for convenient storage and portability.
        </p>
      </div>
    </div>
  );

  const renderGridLayout = () => (
    <div className="neuro p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Premium Wireless Headphones</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {[...images, ...images].slice(0, 6).map((src, index) => (
          <div key={index} className="aspect-square neuro-inset rounded-lg flex items-center justify-center overflow-hidden">
            <img src={src} alt={`Product view ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div>
          <p className="text-xl font-bold text-neuro-purple mb-2">$249.99</p>
          <p className="text-sm mb-4">
            Experience crystal-clear sound with our premium wireless
            headphones featuring active noise cancellation.
          </p>
          
          <button className="w-full neuro neuro-hover neuro-active bg-neuro-purple text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 mb-4">
            <ShoppingCart size={16} />
            <span>Add to Cart</span>
          </button>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2">Features:</h3>
          <ul className="grid grid-cols-2 gap-2">
            <li className="text-sm flex items-baseline gap-1">
              <span className="text-xs">•</span>
              <span>Active Noise Cancellation</span>
            </li>
            <li className="text-sm flex items-baseline gap-1">
              <span className="text-xs">•</span>
              <span>30-hour battery life</span>
            </li>
            <li className="text-sm flex items-baseline gap-1">
              <span className="text-xs">•</span>
              <span>Bluetooth 5.2 connectivity</span>
            </li>
            <li className="text-sm flex items-baseline gap-1">
              <span className="text-xs">•</span>
              <span>Memory foam ear cushions</span>
            </li>
            <li className="text-sm flex items-baseline gap-1">
              <span className="text-xs">•</span>
              <span>Voice assistant compatible</span>
            </li>
            <li className="text-sm flex items-baseline gap-1">
              <span className="text-xs">•</span>
              <span>Foldable design</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderStackLayout = () => (
    <div className="neuro p-6 rounded-lg">
      <div className="max-w-lg mx-auto">
        <div className="aspect-[4/3] neuro-inset rounded-lg overflow-hidden mb-6">
          <img 
            src={images[currentIndex]} 
            alt="Product" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex justify-center space-x-3 mb-6">
          {images.map((src, index) => (
            <button 
              key={index}
              className={cn(
                "h-16 w-16 rounded neuro-sm overflow-hidden",
                index === currentIndex && "ring-2 ring-neuro-purple"
              )}
              onClick={() => setCurrentIndex(index)}
            >
              <img 
                src={src} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover" 
              />
            </button>
          ))}
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Premium Wireless Headphones</h1>
        <p className="text-xl font-bold text-neuro-purple mb-4">$249.99</p>
        
        <p className="text-sm mb-6">
          Experience crystal-clear sound with our premium wireless
          headphones featuring active noise cancellation.
        </p>
        
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Features:</h3>
          <ul className="space-y-1">
            <li className="text-sm flex items-baseline gap-2">
              <span className="text-xs">•</span>
              <span>Active Noise Cancellation</span>
            </li>
            <li className="text-sm flex items-baseline gap-2">
              <span className="text-xs">•</span>
              <span>30-hour battery life</span>
            </li>
            <li className="text-sm flex items-baseline gap-2">
              <span className="text-xs">•</span>
              <span>Bluetooth 5.2 connectivity</span>
            </li>
            <li className="text-sm flex items-baseline gap-2">
              <span className="text-xs">•</span>
              <span>Memory foam ear cushions</span>
            </li>
            <li className="text-sm flex items-baseline gap-2">
              <span className="text-xs">•</span>
              <span>Voice assistant compatible</span>
            </li>
            <li className="text-sm flex items-baseline gap-2">
              <span className="text-xs">•</span>
              <span>Foldable design for easy storage</span>
            </li>
          </ul>
        </div>
        
        <button className="w-full neuro neuro-hover neuro-active bg-neuro-purple text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 mb-2">
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
        
        <button className="w-full neuro neuro-hover neuro-active px-4 py-2 rounded-lg flex items-center justify-center gap-2">
          <Heart size={16} />
          <span>Save for Later</span>
        </button>
      </div>
    </div>
  );

  const renderSplitLayout = () => (
    <div className="neuro p-0 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-full bg-neuro-dark p-6 flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-sm">
            <img 
              src={images[currentIndex]} 
              alt="Product" 
              className="w-full h-full object-cover rounded-lg"
            />
            
            <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button 
                  key={index} 
                  className={cn(
                    "w-2 h-2 rounded-full",
                    index === currentIndex ? "bg-neuro-purple" : "bg-white/20"
                  )}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">Premium Wireless Headphones</h1>
          <p className="text-xl font-bold text-neuro-purple mb-4">$249.99</p>
          
          <p className="text-sm mb-6">
            Experience crystal-clear sound with our premium wireless
            headphones featuring active noise cancellation.
          </p>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Features:</h3>
            <ul className="space-y-1">
              <li className="text-sm flex items-baseline gap-2">
                <span className="text-xs">•</span>
                <span>Active Noise Cancellation</span>
              </li>
              <li className="text-sm flex items-baseline gap-2">
                <span className="text-xs">•</span>
                <span>30-hour battery life</span>
              </li>
              <li className="text-sm flex items-baseline gap-2">
                <span className="text-xs">•</span>
                <span>Bluetooth 5.2 connectivity</span>
              </li>
              <li className="text-sm flex items-baseline gap-2">
                <span className="text-xs">•</span>
                <span>Memory foam ear cushions</span>
              </li>
              <li className="text-sm flex items-baseline gap-2">
                <span className="text-xs">•</span>
                <span>Voice assistant compatible</span>
              </li>
              <li className="text-sm flex items-baseline gap-2">
                <span className="text-xs">•</span>
                <span>Foldable design for easy storage</span>
              </li>
            </ul>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex-1 neuro neuro-hover neuro-active bg-neuro-purple text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2">
              <ShoppingCart size={16} />
              <span>Add to Cart</span>
            </button>
            <button className="neuro neuro-hover neuro-active p-2 rounded-lg">
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTemplateTwoLayout = () => (
    <div 
      className="neuro rounded-lg overflow-hidden"
      style={{ 
        background: backgroundColor,
        color: textColor 
      }}
    >
      <div className="w-full h-64 overflow-hidden relative">
        <img 
          src={images[0]} 
          alt="Product Hero" 
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6"
        >
          <h1 className="text-3xl font-light mb-1 text-white">
            Premium Wireless Headphones
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-xl font-medium text-white">$249.99</p>
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={16} 
                    className="text-yellow-400 fill-yellow-400" 
                  />
                ))}
              </div>
              <span className="ml-2 text-xs text-white">(124 reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 mb-6" style={{ color: textColor }}>
          <div className="text-center p-3 neuro-inset rounded-lg">
            <Clock size={24} className="mx-auto mb-2" style={{ color: primaryColor }} />
            <p className="text-xs font-medium">30-hour battery</p>
          </div>
          <div className="text-center p-3 neuro-inset rounded-lg">
            <Package size={24} className="mx-auto mb-2" style={{ color: primaryColor }} />
            <p className="text-xs font-medium">Noise cancellation</p>
          </div>
          <div className="text-center p-3 neuro-inset rounded-lg">
            <Truck size={24} className="mx-auto mb-2" style={{ color: primaryColor }} />
            <p className="text-xs font-medium">Free shipping</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2" style={{ color: primaryColor }}>The Perfect Sound</h3>
          <p className="text-sm leading-relaxed" style={{ color: textColor }}>
            Experience crystal-clear sound with our premium wireless headphones featuring active noise cancellation technology. 
            Designed for audiophiles and casual listeners alike, these headphones deliver exceptional audio quality in any environment.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2" style={{ color: textColor }}>Available Colors</h3>
          <div className="flex space-x-2">
            {[accentColor, primaryColor, secondaryColor, "#777777"].map((color, i) => (
              <button 
                key={i} 
                className={`w-8 h-8 rounded-full ${i === 0 ? 'ring-2 ring-offset-2' : ''}`}
                style={{ 
                  backgroundColor: color,
                  // Fix: Replace ringColor with proper ring styling
                  ...(i === 0 ? { outline: `2px solid ${textColor}`, outlineOffset: '2px' } : {})
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex space-x-3">
          <button 
            className="flex-1 px-4 py-3 rounded-lg flex items-center justify-center gap-2"
            style={{ 
              backgroundColor: accentColor,
              color: getContrastTextColor(accentColor)
            }}
          >
            <ShoppingCart size={16} />
            <span className="font-medium">Add to Cart</span>
          </button>
          <button 
            className="neuro neuro-hover neuro-active p-3 rounded-lg"
            style={{ color: primaryColor }}
          >
            <Heart size={20} />
          </button>
        </div>
      </div>
    </div>
  );

  const renderTemplateThreeLayout = () => (
    <div 
      className="neuro p-6 rounded-lg overflow-hidden"
      style={{ 
        background: backgroundColor,
        color: textColor 
      }}
    >
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-light mb-1" style={{ color: textColor }}>
          Premium Wireless Headphones
        </h1>
        <p className="text-sm mb-4" style={{ color: secondaryColor }}>
          Redefining your audio experience
        </p>
        <div className="w-16 h-1 mx-auto" style={{ backgroundColor: accentColor }}></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="aspect-square rounded-lg overflow-hidden mb-3">
            <img 
              src={images[currentIndex]} 
              alt="Product" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 rounded-full transition-all"
                style={{ backgroundColor: index === currentIndex ? primaryColor : secondaryColor + '50' }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <h2 className="text-xs uppercase tracking-wider mb-1" style={{ color: secondaryColor }}>
                Price
              </h2>
              <p 
                className="text-2xl" 
                style={{ color: primaryColor }}
              >
                $249.99
              </p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xs uppercase tracking-wider mb-2" style={{ color: secondaryColor }}>
                Description
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: textColor }}>
                Experience crystal-clear sound with our premium wireless
                headphones featuring active noise cancellation. Perfect for
                music lovers, travelers, and professionals alike.
              </p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xs uppercase tracking-wider mb-2" style={{ color: secondaryColor }}>
                Specifications
              </h2>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                <div>
                  <p className="text-xs font-medium" style={{ color: primaryColor }}>Battery Life</p>
                  <p style={{ color: textColor }}>30 hours</p>
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: primaryColor }}>Connectivity</p>
                  <p style={{ color: textColor }}>Bluetooth 5.2</p>
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: primaryColor }}>Noise Cancellation</p>
                  <p style={{ color: textColor }}>Active</p>
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: primaryColor }}>Design</p>
                  <p style={{ color: textColor }}>Over-ear, Foldable</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <button 
              className="w-full py-3 mb-3 rounded text-center"
              style={{ 
                backgroundColor: accentColor,
                color: getContrastTextColor(accentColor)
              }}
            >
              Add to Cart
            </button>
            
            <div className="flex justify-between text-xs" style={{ color: secondaryColor }}>
              <span className="flex items-center gap-1">
                <Truck size={14} />
                Free Shipping
              </span>
              <span className="flex items-center gap-1">
                <Gift size={14} />
                30-Day Returns
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTemplateFourLayout = () => (
    <div 
      className="neuro overflow-hidden rounded-lg"
      style={{ 
        background: backgroundColor,
        color: textColor 
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="p-4 border-r" style={{ borderColor: `${primaryColor}30` }}>
          <div className="flex flex-col space-y-3">
            {images.map((src, index) => (
              <button 
                key={index}
                className={cn(
                  "rounded overflow-hidden transition-all",
                  currentIndex === index ? "ring-2" : "opacity-70 hover:opacity-100"
                )}
                style={{ 
                  // Fix: Replace ringColor with proper CSS approach
                  ...(currentIndex === index ? { outline: `2px solid ${primaryColor}`, outlineOffset: '2px' } : {})
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={src} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        
        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-96 p-6">
              <div className="h-full rounded-lg overflow-hidden">
                <img 
                  src={images[currentIndex]} 
                  alt="Product" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={14} 
                        className="text-yellow-400 fill-yellow-400" 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-xs" style={{ color: secondaryColor }}>124 reviews</span>
                </div>
                
                <h1 className="text-2xl font-bold mb-2" style={{ color: textColor }}>
                  Premium Wireless Headphones
                </h1>
                
                <p className="text-sm mb-4" style={{ color: secondaryColor }}>
                  Experience studio-quality sound with our flagship headphones
                </p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold" style={{ color: accentColor }}>$249.99</span>
                  <span className="ml-2 line-through text-sm" style={{ color: secondaryColor }}>$299.99</span>
                </div>
              </div>
              
              <div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2" style={{ color: textColor }}>
                    Color
                  </h3>
                  <div className="flex space-x-2">
                    {["#000000", primaryColor, secondaryColor, accentColor].map((color, i) => (
                      <button 
                        key={i} 
                        className={`w-8 h-8 rounded-full ${i === 0 ? 'ring-2 ring-offset-2' : ''}`}
                        style={{ 
                          backgroundColor: color, 
                          // Fix: Replace ringColor with proper CSS approach
                          ...(i === 0 ? { outline: `2px solid ${textColor}`, outlineOffset: '2px' } : {})
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-1">
                    <button 
                      className="w-full py-3 rounded font-medium"
                      style={{ 
                        backgroundColor: accentColor,
                        color: getContrastTextColor(accentColor)
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                  <button 
                    className="py-3 px-4 rounded"
                    style={{ 
                      backgroundColor: secondaryColor,
                      color: getContrastTextColor(secondaryColor)
                    }}
                  >
                    <ShoppingCart size={20} />
                  </button>
                  <button 
                    className="py-3 px-4 rounded"
                    style={{ 
                      backgroundColor: `${primaryColor}20`,
                      color: primaryColor
                    }}
                  >
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t p-6" style={{ borderColor: `${primaryColor}30` }}>
            <h2 className="text-lg font-medium mb-4" style={{ color: primaryColor }}>Key Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}20` }}>
                  <span style={{ color: primaryColor }}>•</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: textColor }}>Active Noise Cancellation</p>
                  <p className="text-xs" style={{ color: secondaryColor }}>Block out external noise</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}20` }}>
                  <span style={{ color: primaryColor }}>•</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: textColor }}>30-hour Battery Life</p>
                  <p className="text-xs" style={{ color: secondaryColor }}>All-day listening power</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}20` }}>
                  <span style={{ color: primaryColor }}>•</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: textColor }}>Bluetooth 5.2</p>
                  <p className="text-xs" style={{ color: secondaryColor }}>Fast and stable connection</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}20` }}>
                  <span style={{ color: primaryColor }}>•</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: textColor }}>Memory Foam Cushions</p>
                  <p className="text-xs" style={{ color: secondaryColor }}>Premium comfort for hours</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}20` }}>
                  <span style={{ color: primaryColor }}>•</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: textColor }}>Voice Assistant</p>
                  <p className="text-xs" style={{ color: secondaryColor }}>Works with all assistants</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}20` }}>
                  <span style={{ color: primaryColor }}>•</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: textColor }}>Foldable Design</p>
                  <p className="text-xs" style={{ color: secondaryColor }}>Compact storage solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  let content;
  switch(selectedLayout) {
    case 'grid':
      content = renderGridLayout();
      break;
    case 'stack':
      content = renderStackLayout();
      break;
    case 'split':
      content = renderSplitLayout();
      break;
    case 'template-two':
      content = renderTemplateTwoLayout();
      break;
    case 'template-three':
      content = renderTemplateThreeLayout();
      break;
    case 'template-four':
      content = renderTemplateFourLayout();
      break;
    case 'carousel':
    default:
      content = renderModernLayout();
      break;
  }
  
  return (
    <div className="relative">
      {content}
      
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button className="neuro neuro-hover neuro-active py-1 px-3 rounded-lg text-xs">
          Edit
        </button>
        <button 
          className="neuro neuro-hover neuro-active py-1 px-3 rounded-lg text-xs" 
          style={{ 
            backgroundColor: primaryColor,
            color: getContrastTextColor(primaryColor)
          }}
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export default DesignCanvas;
````

## File: src/components/EnvTester.tsx
````typescript
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { supabase, isSupabaseConfigured } from '@/integrations/supabase/client';

interface TestResponse {
  openAIKeyExists: boolean;
  openAIKeyFirstChars: string | null;
  supabaseUrlExists: boolean;
  supabaseAnonKeyExists: boolean;
  timestamp: string;
  availableEnvVars: string[];
  error?: string;
}

const EnvTester = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<TestResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [supabaseConfigured, setSupabaseConfigured] = useState(false);

  useEffect(() => {
    // Check if Supabase is configured in environment
    setSupabaseConfigured(isSupabaseConfigured());
  }, []);

  const testEnvironmentVariables = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!supabaseConfigured) {
        throw new Error("Supabase is not configured. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment.");
      }
      
      const { data, error } = await supabase.functions.invoke('test-env', {
        method: 'POST',
      });
      
      if (error) throw new Error(error.message);
      
      setResult(data);
      toast({
        title: "Test Completed",
        description: "Environment variables test completed successfully.",
      });
    } catch (err: any) {
      console.error("Error testing environment variables:", err);
      setError(err.message || "An unknown error occurred");
      toast({
        variant: "destructive",
        title: "Test Failed",
        description: err.message || "Failed to test environment variables",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Card className="neuro">
        <CardHeader>
          <CardTitle>Environment Variables Tester</CardTitle>
          <CardDescription>
            Test connection to Supabase environment variables
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {!supabaseConfigured && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Configuration Missing</AlertTitle>
              <AlertDescription>
                Supabase is not configured. To use this tester, please add these environment variables:
                <ul className="list-disc ml-6 mt-2">
                  <li>VITE_SUPABASE_URL</li>
                  <li>VITE_SUPABASE_ANON_KEY</li>
                </ul>
              </AlertDescription>
            </Alert>
          )}
          
          <Button 
            onClick={testEnvironmentVariables} 
            disabled={isLoading || !supabaseConfigured}
            className="neuro-sm neuro-hover neuro-active"
          >
            {isLoading ? "Testing..." : "Test Environment Variables"}
          </Button>
          
          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded text-sm text-red-800">
              {error}
            </div>
          )}
          
          {result && (
            <div className="mt-4 space-y-4">
              <div className="neuro-inset p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Test Results:</h3>
                <ul className="space-y-2 text-sm">
                  <li>OpenAI API Key: {result.openAIKeyExists ? 
                    <span className="text-green-600 font-medium">Present ({result.openAIKeyFirstChars})</span> : 
                    <span className="text-red-600 font-medium">Missing</span>
                  }</li>
                  <li>Supabase URL: {result.supabaseUrlExists ? 
                    <span className="text-green-600 font-medium">Present</span> : 
                    <span className="text-red-600 font-medium">Missing</span>
                  }</li>
                  <li>Supabase Anon Key: {result.supabaseAnonKeyExists ? 
                    <span className="text-green-600 font-medium">Present</span> : 
                    <span className="text-red-600 font-medium">Missing</span>
                  }</li>
                  <li>Test Time: {new Date(result.timestamp).toLocaleString()}</li>
                </ul>
              </div>
              
              <div className="neuro-inset p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Available Environment Variables:</h3>
                <div className="max-h-40 overflow-y-auto text-xs">
                  <ul className="space-y-1">
                    {result.availableEnvVars.map((envVar, i) => (
                      <li key={i} className="font-mono">{envVar}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="text-xs text-muted-foreground">
          Note: This only shows if the variables exist, not their actual values (for security).
        </CardFooter>
      </Card>
    </div>
  );
};

export default EnvTester;
````

## File: src/components/InventoryView.tsx
````typescript
import { Database, AlertTriangle, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

const InventoryView = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium flex items-center">
          <Database className="mr-2" size={20} />
          Inventory
        </h2>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Total Stock</p>
          <div className="flex items-baseline mt-1">
            <h3 className="text-xl font-bold">1,234</h3>
            <span className="ml-1 text-xs text-muted-foreground">items</span>
          </div>
        </div>
        
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Low Stock</p>
          <div className="flex items-baseline mt-1">
            <h3 className="text-xl font-bold text-amber-500">12</h3>
            <span className="ml-1 text-xs text-muted-foreground">items</span>
          </div>
        </div>
        
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Out of Stock</p>
          <div className="flex items-baseline mt-1">
            <h3 className="text-xl font-bold text-red-500">5</h3>
            <span className="ml-1 text-xs text-muted-foreground">items</span>
          </div>
        </div>
      </div>
      
      <div className="neuro p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium">Inventory Status</h3>
          <button className="text-xs text-muted-foreground hover:text-white">View All</button>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between items-center text-xs py-2 border-b border-neuro-light">
            <div className="w-1/4 font-medium">Product</div>
            <div className="w-1/4 text-center font-medium">SKU</div>
            <div className="w-1/4 text-center font-medium">Stock</div>
            <div className="w-1/4 text-right font-medium">Status</div>
          </div>
          
          {[
            { name: "Product A", sku: "SKU-1001", stock: 124, status: "Good" },
            { name: "Product B", sku: "SKU-1002", stock: 8, status: "Low" },
            { name: "Product C", sku: "SKU-1003", stock: 0, status: "Out" },
            { name: "Product D", sku: "SKU-1004", stock: 32, status: "Good" },
            { name: "Product E", sku: "SKU-1005", stock: 16, status: "Good" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center text-xs py-2 border-b border-neuro-dark last:border-0">
              <div className="w-1/4">{item.name}</div>
              <div className="w-1/4 text-center text-muted-foreground">{item.sku}</div>
              <div className="w-1/4 text-center">{item.stock}</div>
              <div className="w-1/4 text-right">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                  item.status === "Good" ? "bg-green-900/30 text-green-300" :
                  item.status === "Low" ? "bg-amber-900/30 text-amber-300" :
                  "bg-red-900/30 text-red-300"
                }`}>
                  {item.status === "Low" && <AlertTriangle size={12} className="mr-1" />}
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryView;
````

## File: src/components/LayoutSelector.tsx
````typescript
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Layers, Grid, Columns, ChevronLeft, Layout, LayoutGrid, LayoutList, LayoutTemplate } from "lucide-react";

interface LayoutSelectorProps {
  layouts: Array<{
    id: string;
    name: string;
    icon: React.ReactNode;
  }>;
  themes: Array<{
    id: string;
    name: string;
  }>;
  selectedLayout: string;
  setSelectedLayout: (layout: string) => void;
}

const LayoutSelector = ({ layouts, themes, selectedLayout, setSelectedLayout }: LayoutSelectorProps) => {
  // Template data with preview thumbnails
  const savedTemplates = [
    {
      id: "template-one",
      name: "Template One",
      thumbnail: "https://placehold.co/400x300/5D87E8/F6F6F7/png?text=Modern"
    },
    {
      id: "template-two",
      name: "Template Two",
      thumbnail: "https://placehold.co/400x300/8A7FC8/F6F6F7/png?text=Elegant"
    },
    {
      id: "template-three",
      name: "Template Three",
      thumbnail: "https://placehold.co/400x300/ea384c/F6F6F7/png?text=Minimalist"
    },
    {
      id: "template-four",
      name: "Template Four",
      thumbnail: "https://placehold.co/400x300/2a2a2a/F6F6F7/png?text=Premium"
    }
  ];

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-sm font-medium mb-2">Layout Style</h3>
        <div className="grid grid-cols-2 gap-2">
          {layouts.map((layout) => (
            <button
              key={layout.id}
              className={cn(
                "neuro neuro-hover neuro-active px-3 py-2.5 rounded-lg text-xs flex items-center gap-2 transition-all",
                selectedLayout === layout.id && "shadow-neuro-inset text-neuro-purple font-medium"
              )}
              onClick={() => setSelectedLayout(layout.id)}
            >
              <span className="text-neuro-purple">{layout.icon}</span>
              <span>{layout.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Theme Style</h3>
        <div className="grid grid-cols-3 gap-2">
          {themes.map((theme) => (
            <button
              key={theme.id}
              className={cn(
                "neuro neuro-hover neuro-active px-3 py-2 rounded-lg text-xs transition-all",
                selectedLayout === theme.id && "shadow-neuro-inset text-neuro-purple font-medium"
              )}
              onClick={() => setSelectedLayout(theme.id)}
            >
              {theme.name}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Saved Templates</h3>
        <ScrollArea className="h-48 neuro-inset rounded-lg p-1">
          <div className="grid grid-cols-2 gap-2 p-2">
            {savedTemplates.map((template) => (
              <div 
                key={template.id} 
                className={cn(
                  "neuro p-2 rounded-lg cursor-pointer hover:shadow-neuro-hover transition-shadow",
                  selectedLayout === template.id && "shadow-neuro-inset border-2 border-neuro-purple"
                )}
                onClick={() => setSelectedLayout(template.id)}
              >
                <div className="aspect-video bg-neuro-dark rounded mb-1 overflow-hidden">
                  <img src={template.thumbnail} alt={template.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] font-medium">{template.name}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default LayoutSelector;
````

## File: src/components/MarketingView.tsx
````typescript
import { Megaphone, BarChart, Calendar, PlusSquare, ChevronRight, Mail, Rss, Video, Share2 } from 'lucide-react';
import CalendarDialog from './marketing/CalendarDialog';

const MarketingView = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium flex items-center">
          <Megaphone className="mr-2" size={20} />
          Marketing
        </h2>
        
        <div className="flex gap-3">
          <button className="neuro neuro-hover neuro-active px-3 py-2 rounded-lg flex items-center bg-green-500/10 text-green-400 hover:bg-green-500/20">
            <Mail size={16} className="mr-2" />
            <span className="text-sm">Newsletter</span>
          </button>
          <CalendarDialog />
          <button className="neuro neuro-hover neuro-active px-3 py-2 rounded-lg flex items-center">
            <PlusSquare size={16} className="mr-2" />
            <span className="text-sm">Create Campaign</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="neuro p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium">Active Campaigns</h3>
              <button className="text-xs text-muted-foreground hover:text-white">View All</button>
            </div>
            
            <div className="space-y-3">
              {[
                { name: "Summer Sale", status: "Running", performance: "Good", days: 5 },
                { name: "New Arrivals", status: "Running", performance: "Excellent", days: 12 },
                { name: "Clearance", status: "Scheduled", performance: "Pending", days: 0 },
              ].map((campaign, i) => (
                <div key={i} className="neuro-sm p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium">{campaign.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      campaign.status === "Running" ? "bg-green-900/30 text-green-300" : "bg-blue-900/30 text-blue-300"
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2 text-xs">
                    <span className="text-muted-foreground">
                      {campaign.status === "Running" ? `${campaign.days} days running` : "Starts tomorrow"}
                    </span>
                    <span className={`${
                      campaign.performance === "Good" ? "text-green-400" : 
                      campaign.performance === "Excellent" ? "text-purple-400" : "text-muted-foreground"
                    }`}>
                      {campaign.performance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="neuro p-4 rounded-lg mb-6">
            <h3 className="text-sm font-medium mb-4">Content Marketing</h3>
            <div className="space-y-4">
              <div className="neuro-sm p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 neuro-inset flex items-center justify-center rounded-lg mr-3">
                      <Rss size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Blog Posts</h4>
                      <p className="text-xs text-muted-foreground">12 posts this month</p>
                    </div>
                  </div>
                  <button className="text-xs text-neuro-purple hover:text-neuro-blue">New Post</button>
                </div>
              </div>

              <div className="neuro-sm p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 neuro-inset flex items-center justify-center rounded-lg mr-3">
                      <Video size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Video Logs</h4>
                      <p className="text-xs text-muted-foreground">4 videos scheduled</p>
                    </div>
                  </div>
                  <button className="text-xs text-neuro-purple hover:text-neuro-blue">Upload</button>
                </div>
              </div>

              <div className="neuro-sm p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 neuro-inset flex items-center justify-center rounded-lg mr-3">
                      <Share2 size={16} className="text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Social Media</h4>
                      <p className="text-xs text-muted-foreground">8 posts queued</p>
                    </div>
                  </div>
                  <button className="text-xs text-neuro-purple hover:text-neuro-blue">Schedule</button>
                </div>
              </div>
            </div>
          </div>

          <div className="neuro p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium">Upcoming Events</h3>
              <button className="text-xs text-muted-foreground hover:text-white">View Calendar</button>
            </div>
            
            <div className="space-y-3">
              {[
                { name: "Flash Sale", date: "Apr 12, 2025", type: "Discount" },
                { name: "Newsletter", date: "Apr 15, 2025", type: "Email" },
                { name: "Product Launch", date: "Apr 20, 2025", type: "Event" },
              ].map((event, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 neuro-sm flex items-center justify-center rounded-lg mr-3">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-medium">{event.name}</p>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{event.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="neuro p-4 rounded-lg mb-6">
            <h3 className="text-sm font-medium mb-3">Campaign Performance</h3>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="neuro-sm p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Click Rate</p>
                <div className="flex items-baseline mt-1">
                  <h4 className="text-lg font-bold">4.2%</h4>
                  <span className="text-xs text-green-400 ml-2">+0.8%</span>
                </div>
              </div>
              
              <div className="neuro-sm p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Conversion</p>
                <div className="flex items-baseline mt-1">
                  <h4 className="text-lg font-bold">2.8%</h4>
                  <span className="text-xs text-green-400 ml-2">+0.3%</span>
                </div>
              </div>
            </div>
            
            <div className="h-32 neuro-inset rounded-lg flex items-center justify-center mb-4">
              <BarChart size={24} className="text-muted-foreground" />
            </div>
            
            <button className="text-xs flex items-center justify-center w-full text-neuro-purple">
              View detailed analytics <ChevronRight size={14} className="ml-1" />
            </button>
          </div>
          
          <div className="neuro p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-4">Marketing Channels</h3>
            
            <div className="space-y-3">
              {[
                { name: "Social Media", percentage: 45 },
                { name: "Email", percentage: 30 },
                { name: "Search", percentage: 15 },
                { name: "Direct", percentage: 10 },
              ].map((channel, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs">{channel.name}</span>
                    <span className="text-xs">{channel.percentage}%</span>
                  </div>
                  <div className="h-2 bg-neuro-dark rounded-full">
                    <div 
                      className={`h-full rounded-full ${
                        i === 0 ? "bg-neuro-purple" :
                        i === 1 ? "bg-neuro-blue" :
                        i === 2 ? "bg-green-500" :
                        "bg-amber-500"
                      }`}
                      style={{ width: `${channel.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingView;
````

## File: src/components/NavBar.tsx
````typescript
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Package, BarChart2, Database, Bot, MessageSquare, 
  ShoppingBag, Megaphone, Settings, Palette
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  functions: string[];
  glowColor: string;
}

const NavItem = ({ icon, label, isActive, onClick, functions, glowColor }: NavItemProps) => {  
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={cn(
              "w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 bg-transparent",
              isActive && `text-[${glowColor}]`,
              `hover:text-[${glowColor}] hover:animate-pulse-glow`
            )}
            style={{
              filter: isActive ? `drop-shadow(0 0 8px ${glowColor})` : undefined,
            }}
          >
            {icon}
          </button>
        </TooltipTrigger>
        <TooltipContent 
          side="bottom" 
          align="center"
          sideOffset={5}
          onClick={onClick}
          className="cursor-pointer neuro p-3 min-w-52"
        >
          <h3 className="font-medium text-sm mb-2">{label}</h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            {functions.map((func, index) => (
              <li key={index}>{func}</li>
            ))}
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

interface NavBarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const NavBar = ({ activeView, setActiveView }: NavBarProps) => {
  const navigate = useNavigate();
  
  const navItems = [
    {
      id: 'products',
      icon: <Package size={24} />,
      label: 'Products',
      functions: ['Add Product', 'Edit Products', 'Product Categories'],
      glowColor: '#FF0000' // Red
    },
    {
      id: 'inventory',
      icon: <Database size={24} />,
      label: 'Inventory',
      functions: ['Stock Levels', 'Low Stock Alerts', 'Supply Orders'],
      glowColor: '#FF7F00' // Orange
    },
    {
      id: 'analytics',
      icon: <BarChart2 size={24} />,
      label: 'Analytics',
      functions: ['Sales Reports', 'Customer Insights', 'Growth Metrics'],
      glowColor: '#FFFF00' // Yellow
    },
    {
      id: 'chat',
      icon: <MessageSquare size={32} />, // Larger size for chat
      label: 'Chat',
      functions: ['Customer Support', 'Team Chat', 'Notifications'],
      glowColor: '#00FF00' // Green
    },
    {
      id: 'ai-assistant',
      icon: <Bot size={24} />,
      label: 'AI Assistant',
      functions: ['Product Suggestions', 'Content Writing', 'Market Analysis'],
      glowColor: '#0000FF' // Blue
    },
    {
      id: 'product-designer',
      icon: <Palette size={24} />,
      label: 'Product Designer',
      functions: ['Design Product Pages', 'Color Themes', 'AI Layout Generator'],
      glowColor: '#4B0082' // Indigo
    },
    {
      id: 'orders',
      icon: <ShoppingBag size={24} />,
      label: 'Orders',
      functions: ['New Orders', 'Processing', 'Delivery Status'],
      glowColor: '#8F00FF' // Violet
    },
    {
      id: 'marketing',
      icon: <Megaphone size={24} />,
      label: 'Marketing',
      functions: ['Campaigns', 'Discounts', 'Social Media'],
      glowColor: '#FF1493' // Pink
    },
    {
      id: 'settings',
      icon: <Settings size={24} />,
      label: 'Settings',
      functions: ['Profile', 'Store Settings', 'Integrations'],
      glowColor: '#00FFFF' // Cyan
    }
  ];

  const handleNavItemClick = (navId: string) => {
    if (navId === 'product-designer') {
      navigate('/product-designer');
    } else {
      setActiveView(navId);
      navigate('/');
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full px-6 py-3 z-10 bg-neuro/80 backdrop-blur-lg">
      <div className="flex items-center justify-center gap-4">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={
              item.id === 'product-designer' 
                ? window.location.pathname === '/product-designer' 
                : activeView === item.id && window.location.pathname === '/'
            }
            onClick={() => handleNavItemClick(item.id)}
            functions={item.functions}
            glowColor={item.glowColor}
          />
        ))}
      </div>
    </header>
  );
};

export default NavBar;
````

## File: src/components/OrdersView.tsx
````typescript
import { ShoppingBag, ChevronDown, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const OrdersView = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium flex items-center">
          <ShoppingBag className="mr-2" size={20} />
          Orders
        </h2>
        
        <div className="flex items-center space-x-2">
          <button className="neuro-sm neuro-hover neuro-active px-3 py-2 rounded-lg text-xs flex items-center">
            Status <ChevronDown size={14} className="ml-1" />
          </button>
          <button className="neuro-sm neuro-hover neuro-active px-3 py-2 rounded-lg text-xs flex items-center">
            Date Range <ChevronDown size={14} className="ml-1" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">New Orders</p>
          <div className="flex items-baseline mt-1">
            <h3 className="text-xl font-bold">24</h3>
            <span className="ml-1 text-xs text-muted-foreground">today</span>
          </div>
        </div>
        
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Processing</p>
          <div className="flex items-baseline mt-1">
            <h3 className="text-xl font-bold">18</h3>
            <span className="ml-1 text-xs text-muted-foreground">orders</span>
          </div>
        </div>
        
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Shipped</p>
          <div className="flex items-baseline mt-1">
            <h3 className="text-xl font-bold">42</h3>
            <span className="ml-1 text-xs text-muted-foreground">this week</span>
          </div>
        </div>
      </div>
      
      <div className="neuro p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium">Recent Orders</h3>
          <button className="text-xs text-muted-foreground hover:text-white">View All</button>
        </div>
        
        <div className="space-y-1">
          <div className="grid grid-cols-6 gap-2 text-xs py-2 border-b border-neuro-light">
            <div className="font-medium">Order ID</div>
            <div className="font-medium">Customer</div>
            <div className="font-medium">Date</div>
            <div className="font-medium">Amount</div>
            <div className="font-medium">Status</div>
            <div className="font-medium text-right">Action</div>
          </div>
          
          {[
            { id: "ORD-7891", customer: "John Smith", date: "Apr 09, 2025", amount: "$128.50", status: "New" },
            { id: "ORD-7890", customer: "Emma Johnson", date: "Apr 08, 2025", amount: "$85.25", status: "Processing" },
            { id: "ORD-7889", customer: "Michael Brown", date: "Apr 08, 2025", amount: "$212.99", status: "Processing" },
            { id: "ORD-7888", customer: "Sarah Wilson", date: "Apr 07, 2025", amount: "$59.99", status: "Shipped" },
            { id: "ORD-7887", customer: "David Taylor", date: "Apr 07, 2025", amount: "$145.00", status: "Delivered" },
          ].map((order, i) => (
            <div key={i} className="grid grid-cols-6 gap-2 text-xs py-2 border-b border-neuro-dark last:border-0">
              <div>{order.id}</div>
              <div>{order.customer}</div>
              <div className="text-muted-foreground">{order.date}</div>
              <div>{order.amount}</div>
              <div>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                  order.status === "New" ? "bg-blue-900/30 text-blue-300" :
                  order.status === "Processing" ? "bg-amber-900/30 text-amber-300" :
                  order.status === "Shipped" ? "bg-purple-900/30 text-purple-300" :
                  "bg-green-900/30 text-green-300"
                }`}>
                  {order.status === "New" && <AlertTriangle size={12} className="mr-1" />}
                  {order.status === "Processing" && <Clock size={12} className="mr-1" />}
                  {order.status === "Shipped" && <ShoppingBag size={12} className="mr-1" />}
                  {order.status === "Delivered" && <CheckCircle size={12} className="mr-1" />}
                  {order.status}
                </span>
              </div>
              <div className="text-right">
                <button className="hover:text-neuro-purple">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersView;
````

## File: src/components/ProductsView.tsx
````typescript
import React, { useState, useEffect } from 'react';
import { Package, Plus, Grid, List, Search, Filter, Edit, Sliders } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import VendorFilter from './filters/VendorFilter';
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';

// Define the Product type
interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  category: string;
  in_stock: boolean;
  featured: boolean;
  image_url: string | null;
  vendor_id?: string;
}

// Placeholder products
export const PLACEHOLDER_PRODUCTS: Product[] = [
  {
    id: 'pl-1',
    name: 'Ergonomic Chair',
    sku: 'ERG-1001',
    price: 199.99,
    category: 'Furniture',
    in_stock: true,
    featured: true,
    image_url: 'https://placehold.co/600x600/eee/888?text=Ergonomic+Chair',
    vendor_id: '101-BAB'
  },
  {
    id: 'pl-2',
    name: 'Wireless Headphones',
    sku: 'WH-2002',
    price: 89.99,
    category: 'Electronics',
    in_stock: true,
    featured: false,
    image_url: 'https://placehold.co/600x600/ddd/777?text=Wireless+Headphones',
    vendor_id: '103-CCC'
  },
  {
    id: 'pl-3',
    name: 'Ceramic Coffee Mug',
    sku: 'CCM-3003',
    price: 24.99,
    category: 'Kitchenware',
    in_stock: true,
    featured: false,
    image_url: 'https://placehold.co/600x600/ccc/666?text=Ceramic+Mug',
    vendor_id: '105-C3D'
  },
  {
    id: 'pl-4',
    name: 'Smart Watch',
    sku: 'SW-4004',
    price: 149.99,
    category: 'Electronics',
    in_stock: false,
    featured: true,
    image_url: 'https://placehold.co/600x600/bbb/555?text=Smart+Watch',
    vendor_id: '107-GVS'
  },
  {
    id: 'pl-5',
    name: 'Desk Lamp',
    sku: 'DL-5005',
    price: 34.99,
    category: 'Home Decor',
    in_stock: true,
    featured: false,
    image_url: 'https://placehold.co/600x600/aaa/444?text=Desk+Lamp',
    vendor_id: '109-ITB'
  },
  {
    id: 'pl-6',
    name: 'Bluetooth Speaker',
    sku: 'BS-6006',
    price: 79.99,
    category: 'Electronics',
    in_stock: true,
    featured: true,
    image_url: 'https://placehold.co/600x600/999/333?text=Bluetooth+Speaker',
    vendor_id: '111-MVP'
  },
  {
    id: 'pl-7',
    name: 'Non-Stick Pan',
    sku: 'NSP-7007',
    price: 45.99,
    category: 'Kitchenware',
    in_stock: true,
    featured: false,
    image_url: 'https://placehold.co/600x600/888/222?text=Non-Stick+Pan',
    vendor_id: '113-MJD'
  },
  {
    id: 'pl-8',
    name: 'Leather Wallet',
    sku: 'LW-8008',
    price: 29.99,
    category: 'Accessories',
    in_stock: true,
    featured: false,
    image_url: 'https://placehold.co/600x600/777/111?text=Leather+Wallet',
    vendor_id: '115-NUS'
  },
  {
    id: 'pl-9',
    name: 'Throw Pillow',
    sku: 'TP-9009',
    price: 19.99,
    category: 'Home Decor',
    in_stock: true,
    featured: false,
    image_url: 'https://placehold.co/600x600/666/000?text=Throw+Pillow',
    vendor_id: '117-SAS'
  }
];

// Placeholder images for database products without images
const PLACEHOLDER_IMAGES = [
  "https://placehold.co/600x600/eee/888?text=Product+1",
  "https://placehold.co/600x600/ddd/777?text=Product+2",
  "https://placehold.co/600x600/ccc/666?text=Product+3",
  "https://placehold.co/600x600/bbb/555?text=Product+4",
  "https://placehold.co/600x600/aaa/444?text=Product+5"
];

const ProductsView = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVendor, setSelectedVendor] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const productsPerPage = 9;
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const [showPlaceholders, setShowPlaceholders] = useState(true);

  // Fetch products from Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('products')
          .select('*');

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          const productsWithPlaceholders = data.map((product, index) => ({
            ...product,
            image_url: product.image_url || PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length]
          }));
          setAllProducts(productsWithPlaceholders);
          setShowPlaceholders(false);
        } else {
          // Use placeholder products if no products from database
          console.log("No products found in database, using placeholders");
          setAllProducts(PLACEHOLDER_PRODUCTS);
          setShowPlaceholders(true);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        toast({
          title: "Error fetching products",
          description: "Could not load products from the database. Using placeholders instead.",
          variant: "destructive",
        });
        // Fallback to placeholder products on error
        setAllProducts(PLACEHOLDER_PRODUCTS);
        setShowPlaceholders(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Subscribe to real-time changes
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*', // Listen for inserts, updates, and deletes
          schema: 'public',
          table: 'products'
        },
        (payload) => {
          // Refresh products when changes occur
          fetchProducts();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [toast]);

  // Apply filters whenever products, search query, vendor filter changes
  useEffect(() => {
    let filtered = [...allProducts];
    
    // Apply vendor filter
    if (selectedVendor && selectedVendor !== 'all') {
      filtered = filtered.filter(product => product.vendor_id === selectedVendor);
    }
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.sku.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    // Apply price filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [allProducts, selectedVendor, searchQuery, priceRange]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  
  // Handle vendor change
  const handleVendorChange = (vendorId: string) => {
    setSelectedVendor(vendorId === 'all' ? null : vendorId);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Generate pagination links
  const renderPaginationItems = () => {
    const items = [];
    
    // Always show first page
    items.push(
      <PaginationItem key="first">
        <PaginationLink 
          isActive={currentPage === 1} 
          onClick={() => handlePageChange(1)}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Show ellipsis if needed
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis-1">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Show pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i === 1 || i === totalPages) continue; // Skip first and last page as they're always shown
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            isActive={currentPage === i} 
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
      items.push(
        <PaginationItem key="ellipsis-2">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key="last">
          <PaginationLink 
            isActive={currentPage === totalPages} 
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  const renderProductContent = (product: Product) => (
    <Link to={`/product/${product.id}`} className="block">
      <>
        <div className="aspect-square neuro-inset rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
          <img 
            src={product.image_url || PLACEHOLDER_IMAGES[0]} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          {!product.in_stock && (
            <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded">
              Out of Stock
            </div>
          )}
          {product.featured && (
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
              Featured
            </div>
          )}
        </div>
        
        <h3 className="text-sm font-medium mb-1">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-2">{product.category}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">{product.sku}</span>
          <span className="text-sm font-medium">${product.price.toFixed(2)}</span>
        </div>
        
        {product.vendor_id && (
          <div className="mt-2 pt-2 border-t border-border">
            <span className="text-xs text-muted-foreground">Vendor: {product.vendor_id}</span>
          </div>
        )}
        
        <div className="mt-3 pt-3 border-t border-border flex justify-end">
          <button className="neuro-sm neuro-hover neuro-active p-2 rounded-lg">
            <Edit size={14} />
          </button>
        </div>
      </>
    </Link>
  );

  const renderProducts = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="neuro p-4 rounded-lg">
              <Skeleton className="aspect-square w-full mb-3 h-48" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-3 w-1/2 mb-4" />
              <div className="flex justify-between">
                <Skeleton className="h-3 w-1/4" />
                <Skeleton className="h-3 w-1/4" />
              </div>
            </div>
          ))}
        </div>
      );
    }
    
    if (currentProducts.length === 0) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="text-muted-foreground">No products found matching your filters.</div>
        </div>
      );
    }

    if (viewType === 'grid') {
      return (
        <div className="grid grid-cols-3 gap-4 pb-4">
          {currentProducts.map((product) => (
            <div key={product.id} className="neuro p-4 rounded-lg">
              {renderProductContent(product)}
            </div>
          ))}
        </div>
      );
    }

    // List view rendering
    return (
      <div className="space-y-4">
        {currentProducts.map((product) => (
          <div 
            key={product.id} 
            className="neuro p-4 rounded-lg flex items-center space-x-4"
          >
            <div className="w-24 h-24 neuro-inset rounded-lg flex items-center justify-center relative overflow-hidden">
              <img 
                src={product.image_url || PLACEHOLDER_IMAGES[0]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              {!product.in_stock && (
                <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs px-1 py-0.5 rounded text-[8px]">
                  Out of Stock
                </div>
              )}
              {product.featured && (
                <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-1 py-0.5 rounded text-[8px]">
                  Featured
                </div>
              )}
            </div>
            
            <div className="flex-1 flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <span className="text-xs text-muted-foreground">{product.sku}</span>
                {product.vendor_id && (
                  <p className="text-xs text-muted-foreground mt-1">Vendor: {product.vendor_id}</p>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">${product.price.toFixed(2)}</span>
                <button className="neuro-sm neuro-hover neuro-active p-2 rounded-lg">
                  <Edit size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 flex">
      {/* Filter Sidebar */}
      <div className="w-64 mr-6">
        <div className="neuro p-4 rounded-lg">
          <h2 className="font-medium text-lg mb-4 flex items-center">
            <Filter size={16} className="mr-2" />
            Filters
          </h2>
          
          {/* Search */}
          <div className="mb-6">
            <div className="neuro-inset flex items-center px-3 py-2 rounded-lg w-full">
              <Search size={16} className="text-muted-foreground mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none text-sm flex-1"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          
          {/* Vendor Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Vendor</h3>
            <VendorFilter 
              selectedVendor={selectedVendor} 
              onVendorChange={handleVendorChange} 
            />
          </div>
          
          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Categories</h3>
            <div className="space-y-2">
              {['Electronics', 'Furniture', 'Kitchenware', 'Accessories', 'Home Decor'].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} />
                  <Label htmlFor={`category-${category}`} className="text-sm">{category}</Label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Availability Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Availability</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="in-stock" />
                <Label htmlFor="in-stock" className="text-sm">In Stock</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="out-of-stock" />
                <Label htmlFor="out-of-stock" className="text-sm">Out of Stock</Label>
              </div>
            </div>
          </div>
          
          {/* Featured Filter */}
          <div className="mb-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="featured" />
              <Label htmlFor="featured" className="text-sm">Featured Products</Label>
            </div>
          </div>
          
          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Price Range</h3>
            <Slider 
              defaultValue={[0, 100]} 
              max={200} 
              step={1} 
              className="mb-2"
              onValueChange={(value) => setPriceRange(value)}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          
          {/* Apply Filters Button */}
          <button className="neuro neuro-hover neuro-active w-full px-3 py-2 rounded-lg text-sm">
            Apply Filters
          </button>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium flex items-center">
            <Package className="mr-2" size={20} />
            Products {showPlaceholders && <span className="text-xs text-muted-foreground ml-2">(Using placeholders)</span>}
          </h2>
          
          <div className="flex items-center gap-2">
            {selectedVendor && (
              <div className="text-sm">
                <span className="text-muted-foreground mr-1">Vendor:</span>
                <span className="font-medium">{selectedVendor}</span>
              </div>
            )}
            <button className="neuro neuro-hover neuro-active px-3 py-2 rounded-lg flex items-center">
              <Plus size={16} className="mr-2" />
              <span className="text-sm">Add Product</span>
            </button>
          </div>
        </div>
        
        <div className="flex justify-end items-center mb-4">
          <div className="flex items-center space-x-2">
            <button 
              className={cn(
                "neuro-sm neuro-hover p-2 rounded-lg", 
                viewType === 'grid' ? "shadow-neuro-inset text-neuro-purple" : ""
              )}
              onClick={() => setViewType('grid')}
            >
              <Grid size={16} />
            </button>
            <button 
              className={cn(
                "neuro-sm neuro-hover p-2 rounded-lg", 
                viewType === 'list' ? "shadow-neuro-inset text-neuro-purple" : ""
              )}
              onClick={() => setViewType('list')}
            >
              <List size={16} />
            </button>
          </div>
        </div>
        
        <ScrollArea className="h-[calc(100vh-280px)]">
          {renderProducts()}
        </ScrollArea>
        
        <div className="mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {renderPaginationItems()}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
````

## File: src/components/RotatingMetrics.tsx
````typescript
import { useEffect, useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface MetricData {
  title: string;
  data: { value: number }[];
}

const generateDummyData = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    value: Math.floor(Math.random() * 100),
  }));
};

const metrics: MetricData[] = [
  { title: 'Sales Growth', data: generateDummyData() },
  { title: 'User Engagement', data: generateDummyData() },
  { title: 'Revenue', data: generateDummyData() },
];

export const RotatingMetrics = () => {
  const [currentMetricIndex, setCurrentMetricIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetricIndex((prev) => (prev + 1) % metrics.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-32 p-4 neuro rounded-lg">
      <h3 className="text-sm font-medium mb-2">{metrics[currentMetricIndex].title}</h3>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={metrics[currentMetricIndex].data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8A7FC8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
````

## File: src/components/SettingsPanel.tsx
````typescript
import { X, Save } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface SettingsPanelProps {
  onClose: () => void;
}

const SettingsPanel = ({ onClose }: SettingsPanelProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-neuro/80 backdrop-blur-lg flex items-center justify-center p-6">
      <div className="neuro max-w-md w-full p-6 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium">Settings</h2>
          <button onClick={onClose} className="neuro p-2 rounded-lg neuro-hover">
            <X size={18} />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-4">AI Settings</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="creativity" className="text-sm">Creativity</Label>
                  <span className="text-xs text-muted-foreground">50%</span>
                </div>
                <Slider 
                  id="creativity"
                  defaultValue={[50]} 
                  max={100} 
                  step={1}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">Conservative</span>
                  <span className="text-xs text-muted-foreground">Creative</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-generate" className="text-sm">Auto-generate on changes</Label>
                <Switch id="auto-generate" />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="save-history" className="text-sm">Save generation history</Label>
                <Switch id="save-history" defaultChecked />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Display Settings</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="preview-size" className="text-sm">Preview Size</Label>
                  <span className="text-xs text-muted-foreground">Medium</span>
                </div>
                <Slider 
                  id="preview-size"
                  defaultValue={[50]} 
                  max={100} 
                  step={1}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">Small</span>
                  <span className="text-xs text-muted-foreground">Large</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="show-tooltips" className="text-sm">Show Tooltips</Label>
                <Switch id="show-tooltips" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="text-sm">Dark Mode</Label>
                <Switch id="dark-mode" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button className="neuro neuro-hover neuro-active bg-neuro-purple text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Save size={16} />
            <span>Save Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
````

## File: src/components/SettingsView.tsx
````typescript
import { Settings, User, Store, Link, Bell, CreditCard, Lock, Save } from 'lucide-react';
import { useState } from 'react';

const SettingsView = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User size={16} /> },
    { id: 'store', label: 'Store', icon: <Store size={16} /> },
    { id: 'integrations', label: 'Integrations', icon: <Link size={16} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={16} /> },
    { id: 'billing', label: 'Billing', icon: <CreditCard size={16} /> },
    { id: 'security', label: 'Security', icon: <Lock size={16} /> },
  ];
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium flex items-center">
          <Settings className="mr-2" size={20} />
          Settings
        </h2>
      </div>
      
      <div className="flex gap-6">
        <div className="w-48">
          <div className="neuro p-2 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-3 py-2 rounded-lg text-sm ${
                  activeTab === tab.id 
                    ? "neuro-inset text-neuro-purple" 
                    : "hover:bg-neuro-light/10"
                }`}
              >
                <span className="w-5 h-5 mr-2 flex items-center justify-center">
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex-1">
          {activeTab === 'profile' && (
            <div className="neuro p-4 rounded-lg">
              <h3 className="text-sm font-medium mb-4">Profile Settings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 neuro-inset rounded-full flex items-center justify-center mr-4">
                    <User size={24} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Jane Cooper</p>
                    <p className="text-xs text-muted-foreground">Vendor since April 2023</p>
                    <button className="text-xs text-neuro-blue mt-1">Change profile photo</button>
                  </div>
                </div>
                
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Display Name</label>
                  <input 
                    type="text" 
                    defaultValue="Jane Cooper" 
                    className="w-full neuro-inset bg-transparent p-2 rounded-lg text-sm outline-none"
                  />
                </div>
                
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue="jane@example.com" 
                    className="w-full neuro-inset bg-transparent p-2 rounded-lg text-sm outline-none"
                  />
                </div>
                
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Bio</label>
                  <textarea
                    defaultValue="Fashion designer and online vendor specializing in sustainable clothing."
                    className="w-full neuro-inset bg-transparent p-2 rounded-lg text-sm outline-none h-20 resize-none"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button className="neuro neuro-hover neuro-active px-4 py-2 rounded-lg text-sm flex items-center">
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab !== 'profile' && (
            <div className="neuro p-6 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 neuro-sm rounded-lg flex items-center justify-center mx-auto mb-3">
                  {tabs.find(tab => tab.id === activeTab)?.icon}
                </div>
                <h3 className="text-sm font-medium mb-1">{tabs.find(tab => tab.id === activeTab)?.label} Settings</h3>
                <p className="text-xs text-muted-foreground">This section is under development.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
````

## File: src/hooks/use-mobile.tsx
````typescript
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
````

## File: src/hooks/use-toast.ts
````typescript
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
````

## File: src/integrations/supabase/client.ts
````typescript
import { createClient } from '@supabase/supabase-js';

// Project-specific Supabase project details
const supabaseUrl = 'https://eegqwubvmjgfdbbngpdv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlZ3F3dWJ2bWpnZmRiYm5ncGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NDg4MDMsImV4cCI6MjA1OTEyNDgwM30.G90Ujxxz0aBQk2AvkysD6pGycOfDMTtCleFKKr_Dja8';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
  }
});

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => Boolean(supabaseUrl && supabaseAnonKey);
````

## File: src/integrations/supabase/types.ts
````typescript
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      inventory: {
        Row: {
          category: string | null
          created_at: string | null
          id: string
          last_updated: string | null
          price: number | null
          product_id: string
          product_name: string
          quantity: number
          sku: string
          status: string | null
          threshold_low: number | null
          updated_at: string | null
          vendor_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          id?: string
          last_updated?: string | null
          price?: number | null
          product_id: string
          product_name: string
          quantity?: number
          sku: string
          status?: string | null
          threshold_low?: number | null
          updated_at?: string | null
          vendor_id: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          id?: string
          last_updated?: string | null
          price?: number | null
          product_id?: string
          product_name?: string
          quantity?: number
          sku?: string
          status?: string | null
          threshold_low?: number | null
          updated_at?: string | null
          vendor_id?: string
        }
        Relationships: []
      }
      memory_context: {
        Row: {
          created_at: string | null
          key: string | null
          value: Json | null
        }
        Insert: {
          created_at?: string | null
          key?: string | null
          value?: Json | null
        }
        Update: {
          created_at?: string | null
          key?: string | null
          value?: Json | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          channel: string
          content: string | null
          created_at: string | null
          id: string
          message: string
          read: boolean | null
          receiver_id: string | null
          recipient_id: string | null
          sender_id: string
          sender_name: string
          subject: string | null
          updated_at: string | null
          vendor_id: string | null
        }
        Insert: {
          channel?: string
          content?: string | null
          created_at?: string | null
          id?: string
          message: string
          read?: boolean | null
          receiver_id?: string | null
          recipient_id?: string | null
          sender_id: string
          sender_name: string
          subject?: string | null
          updated_at?: string | null
          vendor_id?: string | null
        }
        Update: {
          channel?: string
          content?: string | null
          created_at?: string | null
          id?: string
          message?: string
          read?: boolean | null
          receiver_id?: string | null
          recipient_id?: string | null
          sender_id?: string
          sender_name?: string
          subject?: string | null
          updated_at?: string | null
          vendor_id?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          action_link: string | null
          body: string
          content: string | null
          created_at: string | null
          id: string
          priority: string | null
          read: boolean | null
          related_id: string | null
          title: string
          type: string | null
          user_id: string
          vendor_id: string | null
        }
        Insert: {
          action_link?: string | null
          body: string
          content?: string | null
          created_at?: string | null
          id?: string
          priority?: string | null
          read?: boolean | null
          related_id?: string | null
          title: string
          type?: string | null
          user_id: string
          vendor_id?: string | null
        }
        Update: {
          action_link?: string | null
          body?: string
          content?: string | null
          created_at?: string | null
          id?: string
          priority?: string | null
          read?: boolean | null
          related_id?: string | null
          title?: string
          type?: string | null
          user_id?: string
          vendor_id?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          category: string
          created_at: string | null
          featured: boolean | null
          id: string
          image_url: string | null
          in_stock: boolean | null
          name: string
          price: number
          sku: string
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          in_stock?: boolean | null
          name: string
          price: number
          sku: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          in_stock?: boolean | null
          name?: string
          price?: number
          sku?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      shopify_products: {
        Row: {
          Barcode: string | null
          "body(HTML)": string | null
          brand_name: string | null
          Category: string | null
          description: string | null
          handle: string | null
          id: string | null
          Images: string | null
          Price: string | null
          product_name: string | null
          Quantity: string | null
          "SEO Description": string | null
          SKU: string | null
          Tags: string | null
          vendor_id: string
        }
        Insert: {
          Barcode?: string | null
          "body(HTML)"?: string | null
          brand_name?: string | null
          Category?: string | null
          description?: string | null
          handle?: string | null
          id?: string | null
          Images?: string | null
          Price?: string | null
          product_name?: string | null
          Quantity?: string | null
          "SEO Description"?: string | null
          SKU?: string | null
          Tags?: string | null
          vendor_id: string
        }
        Update: {
          Barcode?: string | null
          "body(HTML)"?: string | null
          brand_name?: string | null
          Category?: string | null
          description?: string | null
          handle?: string | null
          id?: string | null
          Images?: string | null
          Price?: string | null
          product_name?: string | null
          Quantity?: string | null
          "SEO Description"?: string | null
          SKU?: string | null
          Tags?: string | null
          vendor_id?: string
        }
        Relationships: []
      }
      themes: {
        Row: {
          created_at: string | null
          font_family: string | null
          id: string
          is_active: boolean | null
          name: string | null
          primary_color: string | null
          secondary_color: string | null
          vendor_id: string | null
        }
        Insert: {
          created_at?: string | null
          font_family?: string | null
          id?: string
          is_active?: boolean | null
          name?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          vendor_id?: string | null
        }
        Update: {
          created_at?: string | null
          font_family?: string | null
          id?: string
          is_active?: boolean | null
          name?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          vendor_id?: string | null
        }
        Relationships: []
      }
      vendor_settings: {
        Row: {
          company_name: string | null
          contact_email: string | null
          created_at: string | null
          id: string
          settings_json: Json | null
          theme: Json | null
          theme_name: string | null
          updated_at: string | null
          vendor_id: string
        }
        Insert: {
          company_name?: string | null
          contact_email?: string | null
          created_at?: string | null
          id?: string
          settings_json?: Json | null
          theme?: Json | null
          theme_name?: string | null
          updated_at?: string | null
          vendor_id: string
        }
        Update: {
          company_name?: string | null
          contact_email?: string | null
          created_at?: string | null
          id?: string
          settings_json?: Json | null
          theme?: Json | null
          theme_name?: string | null
          updated_at?: string | null
          vendor_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_vendors_with_multiple_active_themes: {
        Args: Record<PropertyKey, never>
        Returns: {
          vendor_id: string
          count: number
        }[]
      }
      run_sql_verification: {
        Args: { sql_script: string }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
````

## File: src/lib/utils.ts
````typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
````

## File: src/pages/Index.tsx
````typescript
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import ChatView from '@/components/ChatView';
import ProductsView from '@/components/ProductsView';
import InventoryView from '@/components/InventoryView';
import AnalyticsView from '@/components/AnalyticsView';
import AiAssistantView from '@/components/AiAssistantView';
import OrdersView from '@/components/OrdersView';
import MarketingView from '@/components/MarketingView';
import SettingsView from '@/components/SettingsView';
import EnvTester from '@/components/EnvTester';

interface IndexProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Index = ({ activeView, setActiveView }: IndexProps) => {
  const renderActiveView = () => {
    switch (activeView) {
      case 'products':
        return <ProductsView />;
      case 'inventory':
        return <InventoryView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'ai-assistant':
        return <AiAssistantView />;
      case 'chat':
        return <ChatView />;
      case 'orders':
        return <OrdersView />;
      case 'marketing':
        return <MarketingView />;
      case 'settings':
        return <SettingsView />;
      case 'env-tester':
        return <EnvTester />;
      default:
        return <ChatView />;
    }
  };
  
  return (
    <div className="min-h-screen bg-neuro text-foreground">
      <main className="h-screen">
        {renderActiveView()}
      </main>
    </div>
  );
};

export default Index;
````

## File: src/pages/MarketingCalendar.tsx
````typescript
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { 
  CheckCircle2, 
  Circle, 
  Plus, 
  ArrowLeft, 
  CalendarDays,
  CheckSquare,
  ListChecks,
  Calendar as CalendarIcon,
  PlusCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Sample marketing events data
const initialEvents = [
  { id: "1", date: new Date(2025, 3, 12), title: "Flash Sale", type: "Discount", completed: false },
  { id: "2", date: new Date(2025, 3, 15), title: "Newsletter", type: "Email", completed: false },
  { id: "3", date: new Date(2025, 3, 20), title: "Product Launch", type: "Event", completed: true },
];

// Sample todo list items
const initialTodos = [
  { id: "1", title: "Draft product launch email", completed: false, date: new Date(2025, 3, 18) },
  { id: "2", title: "Prepare social media assets", completed: true, date: new Date(2025, 3, 18) },
  { id: "3", title: "Schedule newsletter blast", completed: false, date: new Date(2025, 3, 14) },
];

const MarketingCalendar = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<"calendar" | "todos">("calendar");
  const [events, setEvents] = useState(initialEvents);
  const [todos, setTodos] = useState(initialTodos);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventType, setNewEventType] = useState("Event");
  const [newTodoTitle, setNewTodoTitle] = useState("");

  // Filter events for selected date
  const selectedDateEvents = events.filter(
    event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
  );

  // Filter todos for selected date
  const selectedDateTodos = todos.filter(
    todo => 
      todo.date.getDate() === date.getDate() &&
      todo.date.getMonth() === date.getMonth() &&
      todo.date.getFullYear() === date.getFullYear()
  );

  const addNewEvent = () => {
    if (newEventTitle.trim()) {
      const newEvent = {
        id: `event-${Date.now()}`,
        date: new Date(date),
        title: newEventTitle,
        type: newEventType,
        completed: false
      };
      setEvents([...events, newEvent]);
      setNewEventTitle("");
    }
  };

  const addNewTodo = () => {
    if (newTodoTitle.trim()) {
      const newTodo = {
        id: `todo-${Date.now()}`,
        title: newTodoTitle,
        completed: false,
        date: new Date(date)
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle("");
    }
  };

  const toggleTodoComplete = (todoId: string) => {
    setTodos(todos.map(todo => 
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const toggleEventComplete = (eventId: string) => {
    setEvents(events.map(event => 
      event.id === eventId ? { ...event, completed: !event.completed } : event
    ));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="mr-4 p-2 neuro-sm rounded-full hover:bg-accent"
          >
            <ArrowLeft size={18} />
          </button>
          <h1 className="text-xl font-medium">Marketing Calendar</h1>
        </div>
        <div className="flex gap-2">
          <button 
            className={`neuro-sm px-3 py-2 rounded-lg flex items-center ${activeTab === "calendar" ? "bg-blue-500/20 text-blue-400" : ""}`} 
            onClick={() => setActiveTab("calendar")}
          >
            <CalendarDays size={16} className="mr-2" />
            <span>Calendar</span>
          </button>
          <button 
            className={`neuro-sm px-3 py-2 rounded-lg flex items-center ${activeTab === "todos" ? "bg-green-500/20 text-green-400" : ""}`}
            onClick={() => setActiveTab("todos")}
          >
            <ListChecks size={16} className="mr-2" />
            <span>To-Do List</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="neuro p-4 rounded-lg">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => date && setDate(date)}
            className="rounded-md pointer-events-auto"
          />
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <CalendarIcon size={16} className="mr-2 text-blue-400" />
              <h3 className="text-sm font-medium">
                {new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date)}
              </h3>
            </div>
            <div className="text-xs text-muted-foreground">
              {selectedDateEvents.length} events, {selectedDateTodos.length} to-dos
            </div>
          </div>
        </div>

        {activeTab === "calendar" ? (
          <div className="neuro p-4 rounded-lg md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">Events</h2>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="neuro-sm p-2 rounded-full hover:bg-accent">
                    <Plus size={16} />
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Add New Event</AlertDialogTitle>
                    <AlertDialogDescription>
                      Create a new marketing event for {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)}.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="flex flex-col gap-4 my-4">
                    <input
                      type="text"
                      placeholder="Event title"
                      className="w-full px-3 py-2 neuro-inset rounded-md bg-transparent"
                      value={newEventTitle}
                      onChange={(e) => setNewEventTitle(e.target.value)}
                    />
                    <select
                      className="w-full px-3 py-2 neuro-inset rounded-md bg-transparent"
                      value={newEventType}
                      onChange={(e) => setNewEventType(e.target.value)}
                    >
                      <option value="Event">Event</option>
                      <option value="Discount">Discount</option>
                      <option value="Email">Email</option>
                      <option value="Social">Social</option>
                      <option value="Launch">Product Launch</option>
                    </select>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={addNewEvent}>Add Event</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            {selectedDateEvents.length > 0 ? (
              <div className="space-y-3">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className="neuro-sm p-3 rounded-lg">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <button 
                          className="mr-3" 
                          onClick={() => toggleEventComplete(event.id)}
                        >
                          {event.completed ? (
                            <CheckCircle2 size={18} className="text-green-400" />
                          ) : (
                            <Circle size={18} className="text-muted-foreground" />
                          )}
                        </button>
                        <span className={`text-sm ${event.completed ? "line-through text-muted-foreground" : "font-medium"}`}>
                          {event.title}
                        </span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        event.type === "Discount" ? "bg-green-900/30 text-green-300" : 
                        event.type === "Email" ? "bg-blue-900/30 text-blue-300" :
                        event.type === "Social" ? "bg-purple-900/30 text-purple-300" :
                        event.type === "Launch" ? "bg-amber-900/30 text-amber-300" :
                        "bg-neutral-900/30 text-neutral-300"
                      }`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No events scheduled for this date</p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="mt-2 flex items-center mx-auto text-sm text-blue-400">
                      <PlusCircle size={14} className="mr-1" /> Add Event
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Add New Event</AlertDialogTitle>
                      <AlertDialogDescription>
                        Create a new marketing event for {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)}.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="flex flex-col gap-4 my-4">
                      <input
                        type="text"
                        placeholder="Event title"
                        className="w-full px-3 py-2 neuro-inset rounded-md bg-transparent"
                        value={newEventTitle}
                        onChange={(e) => setNewEventTitle(e.target.value)}
                      />
                      <select
                        className="w-full px-3 py-2 neuro-inset rounded-md bg-transparent"
                        value={newEventType}
                        onChange={(e) => setNewEventType(e.target.value)}
                      >
                        <option value="Event">Event</option>
                        <option value="Discount">Discount</option>
                        <option value="Email">Email</option>
                        <option value="Social">Social</option>
                        <option value="Launch">Product Launch</option>
                      </select>
                    </div>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={addNewEvent}>Add Event</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            )}
          </div>
        ) : (
          <div className="neuro p-4 rounded-lg md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">To-Do List</h2>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="neuro-sm p-2 rounded-full hover:bg-accent">
                    <Plus size={16} />
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Add New To-Do</AlertDialogTitle>
                    <AlertDialogDescription>
                      Create a new to-do item for {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)}.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="flex flex-col gap-4 my-4">
                    <input
                      type="text"
                      placeholder="Task description"
                      className="w-full px-3 py-2 neuro-inset rounded-md bg-transparent"
                      value={newTodoTitle}
                      onChange={(e) => setNewTodoTitle(e.target.value)}
                    />
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={addNewTodo}>Add To-Do</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            {selectedDateTodos.length > 0 ? (
              <div className="space-y-3">
                {selectedDateTodos.map((todo) => (
                  <div key={todo.id} className="neuro-sm p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <button 
                          className="mr-3" 
                          onClick={() => toggleTodoComplete(todo.id)}
                        >
                          {todo.completed ? (
                            <CheckSquare size={18} className="text-green-400" />
                          ) : (
                            <Square size={18} className="text-muted-foreground" />
                          )}
                        </button>
                        <span className={`text-sm ${todo.completed ? "line-through text-muted-foreground" : ""}`}>
                          {todo.title}
                        </span>
                      </div>
                      {todo.completed && <span className="text-xs text-green-400">Completed</span>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No to-dos for this date</p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="mt-2 flex items-center mx-auto text-sm text-green-400">
                      <PlusCircle size={14} className="mr-1" /> Add To-Do
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Add New To-Do</AlertDialogTitle>
                      <AlertDialogDescription>
                        Create a new to-do item for {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)}.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="flex flex-col gap-4 my-4">
                      <input
                        type="text"
                        placeholder="Task description"
                        className="w-full px-3 py-2 neuro-inset rounded-md bg-transparent"
                        value={newTodoTitle}
                        onChange={(e) => setNewTodoTitle(e.target.value)}
                      />
                    </div>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={addNewTodo}>Add To-Do</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Square = ({ size, className }: { size: number, className?: string }) => (
  <div className={`w-${size/16}rem h-${size/16}rem border-2 rounded-sm ${className || ""}`}></div>
);

export default MarketingCalendar;
````

## File: src/pages/NotFound.tsx
````typescript
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
````

## File: src/pages/ProductDesigner.tsx
````typescript
import { useState, useEffect } from "react";
import { 
  ChevronLeft, 
  Settings, 
  Sparkles, 
  Camera, 
  Grid, 
  Layers, 
  Columns, 
  MonitorSmartphone, 
  Palette,
  X,
  Wand
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import ColorPalette from "@/components/ColorPalette";
import DesignCanvas from "@/components/DesignCanvas";
import LayoutSelector from "@/components/LayoutSelector";
import SettingsPanel from "@/components/SettingsPanel";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Function to determine if text should be white or black based on background color
const getContrastTextColor = (hexColor: string): string => {
  // Convert hex to RGB
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return white for dark backgrounds, black for light backgrounds
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

// Function to generate color palette based on description using a simple algorithm
const generatePaletteFromDescription = (description: string, creativity: number): string[] => {
  // Seed for pseudo-randomness based on description
  const seed = description.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Create a consistent random function based on seed
  const seededRandom = () => {
    const x = Math.sin(seed + creativity) * 10000;
    return x - Math.floor(x);
  };
  
  // Generate a base hue from the description (0-360)
  const baseHue = (seed % 360);
  
  // Creativity affects how far colors deviate from base
  const hueVariance = creativity / 3;
  
  // Generate darker background (always dark gray with a hint of color)
  const backgroundSaturation = Math.min(15, creativity / 5);
  const backgroundLightness = Math.max(10, 20 - creativity / 10);
  
  // Convert HSL to HEX
  const hslToHex = (h: number, s: number, l: number) => {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    const toHex = (x: number) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };
  
  // Background: dark gray with a hint of the theme color
  const background = hslToHex(baseHue, backgroundSaturation, backgroundLightness);
  
  // Primary: a medium saturated color
  const primaryHue = (baseHue + seededRandom() * hueVariance) % 360;
  const primary = hslToHex(primaryHue, 40 + seededRandom() * 30, 60 + seededRandom() * 15);
  
  // Secondary: analogous or complementary color
  const secondaryHue = seededRandom() > 0.5 ? 
    (primaryHue + 30 + seededRandom() * 30) % 360 : // analogous
    (primaryHue + 180) % 360; // complementary
  const secondary = hslToHex(secondaryHue, 35 + seededRandom() * 30, 55 + seededRandom() * 15);
  
  // Text: always very light gray with a hint of the theme
  const textHue = (baseHue + seededRandom() * 20) % 360;
  const text = hslToHex(textHue, 5, 90 + seededRandom() * 7);
  
  // Accent: a bolder color for highlights
  const accentHue = (baseHue + 120 + seededRandom() * 60) % 360;
  const accent = hslToHex(accentHue, 50 + seededRandom() * 30, 50 + seededRandom() * 15);
  
  return [background, primary, secondary, text, accent];
};

// Function to enhance a prompt with more descriptive design language
const enhancePrompt = (prompt: string): string => {
  if (!prompt || prompt.trim() === '') {
    return "A modern, professional design with subtle color accents and clean typography";
  }
  
  // Simple mapping of common terms to more specific design language
  const keywords = {
    'light': 'bright, airy, spacious, with generous white space',
    'dark': 'deep, sophisticated, high-contrast',
    'modern': 'contemporary, sleek, with clean lines and minimalist elements',
    'vintage': 'retro-inspired, with classic typography and subtle texture',
    'minimal': 'streamlined, uncluttered, with focused content hierarchy',
    'bold': 'striking, with confident typography and strong visual elements',
    'soft': 'gentle color transitions, rounded corners, and subtle shadows',
    'clean': 'organized layout with clear hierarchy and balanced negative space',
    'colorful': 'vibrant but harmonious color palette with thoughtful accents',
    'pastel': 'soft, desaturated colors creating a calm and approachable feel',
    'professional': 'refined, business-appropriate with structured layout',
    'playful': 'dynamic elements with engaging micro-interactions',
    'elegant': 'sophisticated typography with refined color palette and subtle details',
    'tech': 'digital-first aesthetic with modern grid system and futuristic elements',
    'natural': 'organic shapes and earth-toned palette creating a grounded feel',
    'luxury': 'premium feel with high-contrast elements and refined details',
  };
  
  let enhanced = prompt;
  
  // Replace simple terms with more descriptive language
  Object.entries(keywords).forEach(([key, value]) => {
    const regex = new RegExp(`\\b${key}\\b`, 'gi');
    if (regex.test(enhanced)) {
      enhanced = enhanced.replace(regex, value);
    }
  });
  
  // Add design-specific terms if they don't exist
  if (!/(color|palette|tone|hue|shade)/i.test(enhanced)) {
    enhanced += " with a cohesive color palette that balances brand identity with visual harmony";
  }
  
  if (!/(layout|grid|structure|composition)/i.test(enhanced)) {
    enhanced += " using an intuitive layout that guides the user's journey";
  }
  
  if (!/(typo|font|text|readability)/i.test(enhanced)) {
    enhanced += " featuring purposeful typography that enhances readability";
  }
  
  return enhanced;
};

const ProductDesigner = () => {
  const [selectedTab, setSelectedTab] = useState("layout");
  const [showSettings, setShowSettings] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState("modern");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [creativity, setCreativity] = useState(50);
  const [currentPalette, setCurrentPalette] = useState([
    "#2a2a2a", "#8A7FC8", "#5D87E8", "#F6F6F7", "#ea384c"
  ]);
  const [sidebarBgColor, setSidebarBgColor] = useState("#222222");
  const [sidebarTextColor, setSidebarTextColor] = useState("#FFFFFF");
  const [designDescription, setDesignDescription] = useState("");
  const [enhancedPrompt, setEnhancedPrompt] = useState("");
  const [showEnhancedPrompt, setShowEnhancedPrompt] = useState(false);
  
  useEffect(() => {
    // Update text color based on sidebar background color
    setSidebarTextColor(getContrastTextColor(sidebarBgColor));
  }, [sidebarBgColor]);
  
  const layouts = [
    { id: "grid", name: "Thumbnail Grid", icon: <Grid size={18} /> },
    { id: "stack", name: "Vertical Stack", icon: <Layers size={18} /> },
    { id: "carousel", name: "Carousel", icon: <ChevronLeft size={18} /> },
    { id: "split", name: "Split Screen", icon: <Columns size={18} /> },
  ];

  const themes = [
    { id: "modern", name: "Modern" },
    { id: "vintage", name: "Vintage" },
    { id: "minimal", name: "Minimal" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handlePaletteSelect = (colors: string[]) => {
    setCurrentPalette(colors);
    // Set the sidebar background color to the first color (background)
    setSidebarBgColor(colors[0]);
  };
  
  const handleEnhancePrompt = () => {
    const enhanced = enhancePrompt(designDescription);
    setEnhancedPrompt(enhanced);
    setShowEnhancedPrompt(true);
    
    toast({
      title: "Prompt enhanced",
      description: "Your design description has been enhanced with more specific design language",
      duration: 3000,
    });
  };
  
  const handleGenerateFromDescription = () => {
    // If we have an enhanced prompt, use it instead of the original
    const promptToUse = showEnhancedPrompt && enhancedPrompt ? enhancedPrompt : designDescription;
    
    if (!promptToUse || promptToUse.trim() === '') {
      toast({
        title: "Missing description",
        description: "Please enter a design description first",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    // Generate a new palette based on the description and creativity
    const newPalette = generatePaletteFromDescription(promptToUse, creativity);
    
    // Update the current palette
    setCurrentPalette(newPalette);
    setSidebarBgColor(newPalette[0]);
    
    // Provide feedback to the user
    toast({
      title: "Design generated",
      description: "New design palette created based on your description",
      duration: 3000,
    });
    
    // Reset the enhanced prompt display after using it
    setShowEnhancedPrompt(false);
  };

  return (
    <div className="min-h-screen bg-neuro text-foreground">
      {/* Main Content */}
      <main className="pt-16 min-h-screen">
        <div className="h-[calc(100vh-4rem)] grid grid-cols-1 lg:grid-cols-[280px_1fr]">
          {/* Left Sidebar */}
          <div className="h-full overflow-y-auto border-r border-border bg-neuro">
            <div className="p-4 space-y-6">
              <h2 className="text-sm font-medium">Editor Tools</h2>
              <p className="text-xs text-muted-foreground">Customize your product page</p>
              
              <Tabs defaultValue="layout" value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="layout">Layout</TabsTrigger>
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="style">Style</TabsTrigger>
                  <TabsTrigger value="ai">AI</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <ScrollArea className="h-[calc(100vh-12rem)] pr-2">
                {selectedTab === "layout" && (
                  <LayoutSelector 
                    layouts={layouts} 
                    themes={themes}
                    selectedLayout={selectedLayout}
                    setSelectedLayout={setSelectedLayout}
                  />
                )}
                
                {selectedTab === "content" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-1 font-medium">Title</label>
                      <input 
                        type="text" 
                        placeholder="Premium Wireless Headphones" 
                        className="w-full neuro-inset p-2 rounded text-sm bg-transparent"
                      />
                      <p className="text-[10px] text-muted-foreground mt-1">Product title (24px, bold)</p>
                    </div>
                    <div>
                      <label className="block text-sm mb-1 font-medium">Price</label>
                      <input 
                        type="text" 
                        placeholder="$249.99" 
                        className="w-full neuro-inset p-2 rounded text-sm bg-transparent"
                      />
                      <p className="text-[10px] text-muted-foreground mt-1">Product price (20px, bold)</p>
                    </div>
                    <div>
                      <label className="block text-sm mb-1 font-medium">Description</label>
                      <textarea 
                        placeholder="Experience crystal-clear sound with our premium wireless headphones..." 
                        className="w-full neuro-inset p-2 rounded text-sm bg-transparent h-24 resize-none"
                      />
                      <p className="text-[10px] text-muted-foreground mt-1">Short product description</p>
                    </div>
                    <div>
                      <label className="block text-sm mb-1 font-medium">Features</label>
                      <div className="neuro-inset rounded p-2">
                        {["Active Noise Cancellation", "30-hour battery life", "Bluetooth 5.2"].map((feature, i) => (
                          <div key={i} className="flex items-center mb-1 last:mb-0">
                            <input 
                              type="text" 
                              value={feature} 
                              className="w-full bg-transparent text-xs border-b border-border pb-1 focus:outline-none"
                            />
                            <button className="text-xs text-muted-foreground hover:text-neuro-purple ml-1">
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                        <button className="w-full text-xs text-neuro-purple mt-2">+ Add Feature</button>
                      </div>
                    </div>
                  </div>
                )}
                
                {selectedTab === "style" && (
                  <ColorPalette onPaletteSelect={handlePaletteSelect} />
                )}
                
                {selectedTab === "ai" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2 font-medium">Creativity Level</label>
                      <Slider 
                        value={[creativity]} 
                        onValueChange={(value) => setCreativity(value[0])} 
                        max={100} 
                        step={1}
                        className="py-2"
                      />
                      <div className="flex justify-between">
                        <span className="text-xs text-muted-foreground">Conservative</span>
                        <span className="text-xs text-muted-foreground">Creative</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-2 font-medium">Describe your design</label>
                      <textarea 
                        placeholder="A modern, clean design with muted colors..." 
                        value={designDescription}
                        onChange={(e) => setDesignDescription(e.target.value)}
                        className="w-full h-32 neuro-inset p-2 rounded text-sm bg-transparent resize-none"
                      />
                      
                      {showEnhancedPrompt && enhancedPrompt && (
                        <div className="mt-2 p-2 bg-neuro-purple/10 border border-neuro-purple/20 rounded-lg">
                          <p className="text-xs text-neuro-purple">
                            <span className="font-medium">Enhanced: </span> 
                            {enhancedPrompt}
                          </p>
                        </div>
                      )}
                      
                      <div className="mt-2 flex items-center gap-2">
                        <button 
                          className="flex-1 neuro neuro-hover neuro-active bg-neuro-purple/10 text-neuro-purple px-4 py-2 rounded-lg flex items-center gap-2 justify-center animate-pulse-glow"
                          onClick={handleGenerateFromDescription}
                        >
                          <Sparkles size={16} />
                          <span>Generate from description</span>
                        </button>
                        <button
                          className="neuro neuro-hover neuro-active px-3 py-2 rounded-lg"
                          onClick={handleEnhancePrompt}
                          title="Enhance your prompt with more descriptive design language"
                        >
                          <Wand size={16} className="text-neuro-purple" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </ScrollArea>
            </div>
          </div>
          
          {/* Main Canvas */}
          <div className="h-full overflow-y-auto bg-neuro-dark/20 p-6">
            <DesignCanvas selectedLayout={selectedLayout} colorPalette={currentPalette} />
          </div>
        </div>
      </main>

      {/* Color Palettes Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent 
          side="left" 
          className="w-[320px] sm:w-[540px] p-0 overflow-hidden z-50"
          style={{ backgroundColor: sidebarBgColor, color: sidebarTextColor }}
        >
          <div className="h-full flex flex-col overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Color Palettes
                </h2>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className={cn(
                    "p-2 rounded-lg",
                    sidebarTextColor === "#FFFFFF" ? "hover:bg-white/10" : "hover:bg-black/10"
                  )}
                >
                  <ChevronLeft size={18} />
                </button>
              </div>
            </div>
            
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-8">
                {/* Color Palette Groups */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Recommended Palettes</h3>
                  
                  {/* Example Color Palette */}
                  <div className={cn(
                    "p-4 rounded-lg",
                    sidebarTextColor === "#FFFFFF" ? "bg-white/10" : "bg-black/10"
                  )}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs">Modern Purple</span>
                      <button className="text-xs text-neuro-purple">Apply</button>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                      {["#B38CB4", "#B7918C", "#C5A48A", "#DDC67B", "#F8F272"].map((color, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div 
                            className="w-10 h-10 rounded-full mb-1 shadow-md"
                            style={{backgroundColor: color}}
                          />
                          <span className="text-[10px]">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Example Color Palette */}
                  <div className={cn(
                    "p-4 rounded-lg",
                    sidebarTextColor === "#FFFFFF" ? "bg-white/10" : "bg-black/10"
                  )}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs">Ocean Blues</span>
                      <button className="text-xs text-neuro-purple">Apply</button>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                      {["#2A2A2A", "#8A7FC8", "#5D87E8", "#F6F6F7", "#EA384C"].map((color, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div 
                            className="w-10 h-10 rounded-full mb-1 shadow-md"
                            style={{backgroundColor: color}}
                          />
                          <span className="text-[10px]">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Example Color Palette */}
                  <div className={cn(
                    "p-4 rounded-lg",
                    sidebarTextColor === "#FFFFFF" ? "bg-white/10" : "bg-black/10"
                  )}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs">Neutral Gray</span>
                      <button className="text-xs text-neuro-purple">Apply</button>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                      {["#FCF7F8", "#CED3DC", "#ABA9C3", "#275DAD", "#5B616A"].map((color, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div 
                            className="w-10 h-10 rounded-full mb-1 shadow-md"
                            style={{backgroundColor: color}}
                          />
                          <span className="text-[10px]">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Color Harmony Models</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["Monochromatic", "Analogous", "Complementary", "Split Complementary", "Triadic", "Tetradic", "Square"].map((type) => (
                      <button 
                        key={type} 
                        className={cn(
                          "px-3 py-2 rounded-lg text-xs",
                          sidebarTextColor === "#FFFFFF" ? "hover:bg-white/10" : "hover:bg-black/10"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Generate from Image</h3>
                  <div className={cn(
                    "rounded-lg p-4 h-48 flex items-center justify-center",
                    sidebarTextColor === "#FFFFFF" ? "bg-white/5" : "bg-black/5"
                  )}>
                    <div className="text-center">
                      <Camera size={32} className="mx-auto mb-3 opacity-60" />
                      <p className="text-sm">Drop an image or click to upload</p>
                      <button className={cn(
                        "mt-3 px-4 py-2 rounded-lg text-xs",
                        sidebarTextColor === "#FFFFFF" ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20",
                        "transition-colors"
                      )}>
                        Upload Image
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Saved Palettes</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "p-4 rounded-lg",
                          sidebarTextColor === "#FFFFFF" ? "bg-white/10" : "bg-black/10"
                        )}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-xs">Saved Palette {i}</span>
                          <div className="flex gap-2">
                            <button className="text-xs text-neuro-purple">Edit</button>
                            <button className="text-xs text-neuro-purple">Apply</button>
                          </div>
                        </div>
                        <div className="flex h-8 rounded-md overflow-hidden shadow-md">
                          <div className="flex-1 bg-[#2A2A2A]"></div>
                          <div className="flex-1 bg-[#8A7FC8]"></div>
                          <div className="flex-1 bg-[#5D87E8]"></div>
                          <div className="flex-1 bg-[#F6F6F7]"></div>
                          <div className="flex-1 bg-[#EA384C]"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t border-white/10">
              <button className={cn(
                "w-full px-4 py-2 rounded-lg flex items-center gap-2 justify-center",
                sidebarTextColor === "#FFFFFF" ? 
                  "bg-white/10 hover:bg-white/20 text-white" : 
                  "bg-black/10 hover:bg-black/20 text-black"
              )}>
                <Sparkles size={16} />
                <span>Generate New Palette</span>
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      
      {/* Settings Panel */}
      {showSettings && <SettingsPanel onClose={() => setShowSettings(false)} />}
    </div>
  );
};

export default ProductDesigner;
````

## File: src/pages/ProductPage.tsx
````typescript
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Package, Tag, DollarSign, Truck, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PLACEHOLDER_PRODUCTS } from '@/components/ProductsView';

const ProductPage = () => {
  const { id } = useParams();
  const product = PLACEHOLDER_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="p-6">
        <Link to="/" className="neuro-sm neuro-hover px-3 py-2 rounded-lg inline-flex items-center mb-6">
          <ChevronLeft size={16} className="mr-1" />
          Back to Products
        </Link>
        <div className="text-center py-12">
          <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-xl font-medium mb-2">Product Not Found</h2>
          <p className="text-muted-foreground">The product you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Link to="/" className="neuro-sm neuro-hover px-3 py-2 rounded-lg inline-flex items-center mb-6">
        <ChevronLeft size={16} className="mr-1" />
        Back to Products
      </Link>

      <div className="grid grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="neuro p-6 rounded-lg">
          <div className="aspect-square relative rounded-lg overflow-hidden neuro-inset">
            <img 
              src={product.image_url} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.featured && (
              <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                Featured
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-medium mb-2">{product.name}</h1>
            <div className="flex items-center text-muted-foreground text-sm">
              <Package size={16} className="mr-1" />
              <span className="mr-4">{product.category}</span>
              <Tag size={16} className="mr-1" />
              <span>{product.sku}</span>
            </div>
          </div>

          <div className="neuro p-4 rounded-lg">
            <div className="flex items-baseline mb-2">
              <DollarSign size={20} className="text-neuro-purple" />
              <span className="text-2xl font-bold">{product.price.toFixed(2)}</span>
              <span className="ml-2 text-sm text-muted-foreground">USD</span>
            </div>
            
            <div className="flex items-center text-sm">
              <Truck size={16} className="mr-1" />
              <span className={cn(
                product.in_stock ? "text-green-500" : "text-destructive"
              )}>
                {product.in_stock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>

          <div className="neuro p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Vendor Information</h3>
            <p className="text-sm text-muted-foreground">
              Vendor ID: {product.vendor_id || "Not specified"}
            </p>
          </div>

          <button 
            className={cn(
              "neuro neuro-hover w-full py-3 rounded-lg text-sm font-medium",
              !product.in_stock && "opacity-50 cursor-not-allowed"
            )}
            disabled={!product.in_stock}
          >
            {product.in_stock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
````

## File: src/App.css
````css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
````

## File: src/App.tsx
````typescript
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDesigner from "./pages/ProductDesigner";
import ProductPage from "./pages/ProductPage";
import MarketingCalendar from "./pages/MarketingCalendar";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [activeView, setActiveView] = useState('chat');

  // Function to set view to env-tester
  const showEnvTester = () => {
    setActiveView('env-tester');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col h-screen">
            <div className="fixed top-0 left-0 w-full z-50">
              <NavBar activeView={activeView} setActiveView={setActiveView} />
            </div>
            <div className="flex-grow overflow-auto pt-20 pb-16">
              <Routes>
                <Route path="/" element={<Index activeView={activeView} setActiveView={setActiveView} />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/product-designer" element={<ProductDesigner />} />
                <Route path="/env-test" element={<Index activeView="env-tester" setActiveView={setActiveView} />} />
                <Route path="/marketing-calendar" element={<MarketingCalendar />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <ChatBox />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
````

## File: src/index.css
````css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
    --radius: 0.75rem;
  }
}

@layer base {
  * {
    @apply border-border selection:bg-white/10 selection:text-white;
  }
  
  body {
    @apply bg-neuro text-foreground antialiased overflow-hidden;
    font-feature-settings: "ss01", "ss02", "cv01", "cv02", "cv03";
  }

  html {
    @apply scroll-smooth;
  }
}

@layer utilities {
  .scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-none::-webkit-scrollbar {
    display: none;
  }

  .neuro {
    @apply bg-neuro shadow-neuro rounded-lg transition-all duration-300;
  }
  
  .neuro-inset {
    @apply bg-neuro shadow-neuro-inset rounded-lg transition-all duration-300;
  }
  
  .neuro-sm {
    @apply bg-neuro shadow-neuro-sm rounded-lg transition-all duration-300;
  }
  
  .neuro-hover {
    @apply hover:shadow-neuro-hover transition-all duration-300;
  }
  
  .neuro-active {
    @apply active:shadow-neuro-inset transition-all duration-300;
  }
}

@keyframes rotate-content {
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  8% {
    opacity: 1;
    transform: translateY(0);
  }
  85% {
    opacity: 1;
    transform: translateY(0);
  }
  93% {
    opacity: 0;
    transform: translateY(-8px);
  }
  100% {
    opacity: 0;
    transform: translateY(-8px);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(5px);
  }
}

.animate-rotate-content {
  animation: rotate-content 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.animation-delay-0 {
  animation-delay: 0ms;
}

.animation-delay-\[1\.6s\] {
  animation-delay: 3.5s;
}

.animation-delay-\[3\.3s\] {
  animation-delay: 7s;
}

.animate-fade-in {
  animation: fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-fade-out {
  animation: fade-out 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
````

## File: src/main.tsx
````typescript
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
````

## File: src/vite-env.d.ts
````typescript
/// <reference types="vite/client" />
````

## File: supabase/functions/chat-message/index.ts
````typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.42.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    
    if (!message) {
      throw new Error("No message provided");
    }
    
    const openAiApiKey = Deno.env.get('OPENAI_API_KEY');
    
    if (!openAiApiKey) {
      throw new Error("OpenAI API key not found. Please add OPENAI_API_KEY to your Supabase project's secrets.");
    }
    
    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAiApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant for an e-commerce vendor management system. Keep your responses concise and focused on helping with products, inventory, analytics, and marketing."
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 800,
      }),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(`OpenAI API error: ${error.error?.message || response.statusText}`);
    }
    
    const data = await response.json();
    const aiResponseText = data.choices[0].message.content;
    
    return new Response(
      JSON.stringify({ 
        text: aiResponseText
      }),
      { 
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json" 
        } 
      }
    );
    
  } catch (error) {
    console.error("Error processing chat message:", error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || "An error occurred while processing your request." 
      }),
      { 
        status: 400, 
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json" 
        } 
      }
    );
  }
});
````

## File: supabase/functions/test-env/index.ts
````typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY');
    
    // Test object to send back
    const response = {
      openAIKeyExists: !!openAIApiKey,
      openAIKeyFirstChars: openAIApiKey ? `${openAIApiKey.substring(0, 5)}...` : null,
      supabaseUrlExists: !!supabaseUrl,
      supabaseAnonKeyExists: !!anonKey,
      timestamp: new Date().toISOString(),
      // List all available environment variables (just the names, not values)
      availableEnvVars: Object.keys(Deno.env.toObject())
    };

    console.log("Environment variables test completed successfully");
    
    return new Response(
      JSON.stringify(response),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  } catch (error) {
    console.error("Error in test-env function:", error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});
````

## File: supabase/config.toml
````toml
project_id = "eegqwubvmjgfdbbngpdv"

[functions.chat-message]

[functions.test-env]
````

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## File: components.json
````json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
````

## File: eslint.config.js
````javascript
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
);
````

## File: index.html
````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>tactile-vendor-nexus</title>
    <meta name="description" content="Lovable Generated Project" />
    <meta name="author" content="Lovable" />

    <meta property="og:title" content="tactile-vendor-nexus" />
    <meta property="og:description" content="Lovable Generated Project" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  </head>

  <body>
    <div id="root"></div>
    <!-- IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT! -->
    <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: package.json
````json
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-context-menu": "^2.2.1",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.4",
    "@supabase/supabase-js": "^2.49.4",
    "@tanstack/react-query": "^5.56.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.0",
    "react-intersection-observer": "^9.16.0",
    "react-resizable-panels": "^2.1.3",
    "react-router-dom": "^6.26.2",
    "recharts": "^2.12.7",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.3",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.0",
    "@tailwindcss/typography": "^0.5.15",
    "@types/node": "^22.5.5",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.9.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "globals": "^15.9.0",
    "lovable-tagger": "^1.1.7",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.11",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.0.1",
    "vite": "^5.4.1"
  }
}
````

## File: postcss.config.js
````javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
````

## File: README.md
````markdown
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/9b7a72be-c5d2-44eb-8c18-5940849b35da

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9b7a72be-c5d2-44eb-8c18-5940849b35da) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/9b7a72be-c5d2-44eb-8c18-5940849b35da) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
````

## File: tailwind.config.ts
````typescript
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neuro: {
					light: '#2a2a2a',
					DEFAULT: '#222222',
					dark: '#1a1a1a',
					shadow: 'rgba(0, 0, 0, 0.4)',
					highlight: 'rgba(255, 255, 255, 0.05)',
					purple: '#8A7FC8',
					blue: '#5D87E8',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(5px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(5px)' },
				},
				'rotate-content': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'20%': { opacity: '1', transform: 'translateY(0)' },
					'80%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(-10px)' },
				},
				'pulse-glow': {
					'0%': { boxShadow: '0 0 10px 2px rgba(138, 127, 200, 0.7)' }, // Purple glow
					'33%': { boxShadow: '0 0 12px 3px rgba(93, 135, 232, 0.7)' }, // Blue glow
					'66%': { boxShadow: '0 0 14px 4px rgba(30, 174, 219, 0.7)' }, // Bright blue glow
					'100%': { boxShadow: '0 0 10px 2px rgba(138, 127, 200, 0.7)' }, // Back to purple
				},
				'glow-pulse': {
					'0%, 100%': { filter: 'brightness(1)' },
					'50%': { filter: 'brightness(1.3)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 8s ease-in-out infinite',
				'glow': 'glow-pulse 2s ease-in-out infinite',
			},
			boxShadow: {
				'neuro': '5px 5px 10px rgba(0, 0, 0, 0.4), -5px -5px 10px rgba(255, 255, 255, 0.05)',
				'neuro-inset': 'inset 3px 3px 6px rgba(0, 0, 0, 0.4), inset -3px -3px 6px rgba(255, 255, 255, 0.05)',
				'neuro-sm': '3px 3px 6px rgba(0, 0, 0, 0.4), -3px -3px 6px rgba(255, 255, 255, 0.05)',
				'neuro-hover': '6px 6px 12px rgba(0, 0, 0, 0.5), -6px -6px 12px rgba(255, 255, 255, 0.06)',
			},
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
````

## File: tsconfig.app.json
````json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noImplicitAny": false,
    "noFallthroughCasesInSwitch": false,

    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
````

## File: tsconfig.json
````json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "noImplicitAny": false,
    "noUnusedParameters": false,
    "skipLibCheck": true,
    "allowJs": true,
    "noUnusedLocals": false,
    "strictNullChecks": false
  }
}
````

## File: tsconfig.node.json
````json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
````

## File: vite.config.ts
````typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
````
