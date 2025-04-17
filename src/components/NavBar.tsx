
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Package, BarChart2, Database, Bot, MessageSquare, 
  ShoppingBag, Megaphone, Settings, Palette, Menu
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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
              "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg transition-all duration-300 bg-transparent",
              isActive && `text-[${glowColor}]`
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
          className="cursor-pointer neuro p-3 min-w-40 md:min-w-52"
        >
          <h3 className="font-medium text-xs md:text-sm mb-2">{label}</h3>
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
  const isMobile = useIsMobile();
  
  const navItems = [
    {
      id: 'products',
      icon: <Package size={isMobile ? 20 : 24} />,
      label: 'Products',
      functions: ['Add Product', 'Edit Products', 'Product Categories'],
      glowColor: '#FFDEE2' // Soft Pink
    },
    {
      id: 'inventory',
      icon: <Database size={isMobile ? 20 : 24} />,
      label: 'Inventory',
      functions: ['Stock Levels', 'Low Stock Alerts', 'Supply Orders'],
      glowColor: '#FEC6A1' // Soft Orange
    },
    {
      id: 'analytics',
      icon: <BarChart2 size={isMobile ? 20 : 24} />,
      label: 'Analytics',
      functions: ['Sales Reports', 'Customer Insights', 'Growth Metrics'],
      glowColor: '#FEF7CD' // Soft Yellow
    },
    {
      id: 'ai-assistant',
      icon: <Bot size={isMobile ? 22 : 26} />,
      label: 'AI Assistant',
      functions: ['Product Suggestions', 'Content Writing', 'Market Analysis'],
      glowColor: '#F2FCE2' // Soft Green
    },
    {
      id: 'chat',
      icon: <MessageSquare size={isMobile ? 26 : 32} />, // Larger size for chat
      label: 'Chat',
      functions: ['Customer Support', 'Team Chat', 'Notifications'],
      glowColor: '#D3E4FD' // Soft Blue
    },
    {
      id: 'product-designer',
      icon: <Palette size={isMobile ? 20 : 24} />,
      label: 'Product Designer',
      functions: ['Design Product Pages', 'Color Themes', 'AI Layout Generator'],
      glowColor: '#E5DEFF' // Soft Purple
    },
    {
      id: 'orders',
      icon: <ShoppingBag size={isMobile ? 20 : 24} />,
      label: 'Orders',
      functions: ['New Orders', 'Processing', 'Delivery Status'],
      glowColor: '#FFDEE2' // Soft Pink
    },
    {
      id: 'marketing',
      icon: <Megaphone size={isMobile ? 20 : 24} />,
      label: 'Marketing',
      functions: ['Campaigns', 'Discounts', 'Social Media'],
      glowColor: '#FEC6A1' // Soft Orange
    },
    {
      id: 'settings',
      icon: <Settings size={isMobile ? 20 : 24} />,
      label: 'Settings',
      functions: ['Profile', 'Store Settings', 'Integrations'],
      glowColor: '#FEF7CD' // Soft Yellow
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

  // For extra small screens, show mobile menu
  if (isMobile && window.innerWidth < 640) {
    return (
      <header className="fixed top-0 left-0 w-full px-4 py-3 z-10 bg-neuro/80 backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <button className="w-10 h-10 flex items-center justify-center neuro rounded-lg">
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-neuro p-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleNavItemClick(item.id);
                    }}
                    className={cn(
                      "flex items-center gap-3 p-2 rounded-lg transition-all",
                      (item.id === 'product-designer' 
                        ? window.location.pathname === '/product-designer' 
                        : activeView === item.id && window.location.pathname === '/'
                      ) && "neuro-inset"
                    )}
                    style={{
                      color: (item.id === 'product-designer' 
                        ? window.location.pathname === '/product-designer' 
                        : activeView === item.id && window.location.pathname === '/'
                      ) ? item.glowColor : undefined,
                    }}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Always show the active icon in the header */}
          <div className="flex items-center">
            {navItems.find(item => 
              item.id === 'product-designer' 
                ? window.location.pathname === '/product-designer' 
                : activeView === item.id && window.location.pathname === '/'
            )?.icon}
            <span className="ml-2 text-sm font-medium">
              {navItems.find(item => 
                item.id === 'product-designer' 
                  ? window.location.pathname === '/product-designer' 
                  : activeView === item.id && window.location.pathname === '/'
              )?.label}
            </span>
          </div>
          
          {/* Quick access to chat */}
          <button
            onClick={() => handleNavItemClick('chat')}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-lg",
              activeView === 'chat' && window.location.pathname === '/' && "text-[#D3E4FD]"
            )}
            style={{
              filter: activeView === 'chat' && window.location.pathname === '/' 
                ? `drop-shadow(0 0 8px #D3E4FD)` 
                : undefined,
            }}
          >
            <MessageSquare size={24} />
          </button>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 w-full px-3 sm:px-6 py-2 sm:py-3 z-10 bg-neuro/80 backdrop-blur-lg">
      <div className="flex items-center justify-center max-w-full overflow-x-auto scrollbar-none">
        <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
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
      </div>
    </header>
  );
};

export default NavBar;
