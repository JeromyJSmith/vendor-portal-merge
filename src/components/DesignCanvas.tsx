
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
