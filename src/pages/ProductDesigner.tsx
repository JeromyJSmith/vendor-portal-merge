
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
