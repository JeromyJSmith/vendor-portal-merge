
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
