
import { X, Save } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface SettingsPanelProps {
  onClose: () => void;
}

const SettingsPanel = ({ onClose }: SettingsPanelProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-neuro/80 backdrop-blur-lg flex items-center justify-center p-6">
      <div className="neuro max-w-md w-full p-6 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium">Settings</h2>
          <button onClick={onClose} className="neuro p-2 rounded-lg neuro-hover">
            <X size={18} />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-4">AI Settings</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="creativity" className="text-sm">Creativity</Label>
                  <span className="text-xs text-muted-foreground">50%</span>
                </div>
                <Slider 
                  id="creativity"
                  defaultValue={[50]} 
                  max={100} 
                  step={1}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">Conservative</span>
                  <span className="text-xs text-muted-foreground">Creative</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-generate" className="text-sm">Auto-generate on changes</Label>
                <Switch id="auto-generate" />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="save-history" className="text-sm">Save generation history</Label>
                <Switch id="save-history" defaultChecked />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Display Settings</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <Label htmlFor="preview-size" className="text-sm">Preview Size</Label>
                  <span className="text-xs text-muted-foreground">Medium</span>
                </div>
                <Slider 
                  id="preview-size"
                  defaultValue={[50]} 
                  max={100} 
                  step={1}
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">Small</span>
                  <span className="text-xs text-muted-foreground">Large</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="show-tooltips" className="text-sm">Show Tooltips</Label>
                <Switch id="show-tooltips" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="text-sm">Dark Mode</Label>
                <Switch id="dark-mode" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button className="neuro neuro-hover neuro-active bg-neuro-purple text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Save size={16} />
            <span>Save Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
