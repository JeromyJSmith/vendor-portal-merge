
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
          <div className="flex flex-col h-screen max-h-screen overflow-hidden">
            <NavBar activeView={activeView} setActiveView={setActiveView} />
            <div className="flex-grow pt-16 sm:pt-20 pb-12 overflow-hidden">
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
