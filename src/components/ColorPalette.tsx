
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
