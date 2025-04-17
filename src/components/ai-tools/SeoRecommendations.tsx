
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
