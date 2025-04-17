
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
    <div className="h-full max-h-full overflow-hidden bg-neuro text-foreground">
      <main className="h-full max-h-full overflow-hidden">
        {renderActiveView()}
      </main>
    </div>
  );
};

export default Index;
