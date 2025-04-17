
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
