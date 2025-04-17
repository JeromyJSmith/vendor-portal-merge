
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
