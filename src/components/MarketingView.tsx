
import { Megaphone, BarChart, Calendar, PlusSquare, ChevronRight, Mail, Rss, Video, Share2 } from 'lucide-react';
import CalendarDialog from './marketing/CalendarDialog';

const MarketingView = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium flex items-center">
          <Megaphone className="mr-2" size={20} />
          Marketing
        </h2>
        
        <div className="flex gap-3">
          <button className="neuro neuro-hover neuro-active px-3 py-2 rounded-lg flex items-center bg-green-500/10 text-green-400 hover:bg-green-500/20">
            <Mail size={16} className="mr-2" />
            <span className="text-sm">Newsletter</span>
          </button>
          <CalendarDialog />
          <button className="neuro neuro-hover neuro-active px-3 py-2 rounded-lg flex items-center">
            <PlusSquare size={16} className="mr-2" />
            <span className="text-sm">Create Campaign</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="neuro p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium">Active Campaigns</h3>
              <button className="text-xs text-muted-foreground hover:text-white">View All</button>
            </div>
            
            <div className="space-y-3">
              {[
                { name: "Summer Sale", status: "Running", performance: "Good", days: 5 },
                { name: "New Arrivals", status: "Running", performance: "Excellent", days: 12 },
                { name: "Clearance", status: "Scheduled", performance: "Pending", days: 0 },
              ].map((campaign, i) => (
                <div key={i} className="neuro-sm p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium">{campaign.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      campaign.status === "Running" ? "bg-green-900/30 text-green-300" : "bg-blue-900/30 text-blue-300"
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2 text-xs">
                    <span className="text-muted-foreground">
                      {campaign.status === "Running" ? `${campaign.days} days running` : "Starts tomorrow"}
                    </span>
                    <span className={`${
                      campaign.performance === "Good" ? "text-green-400" : 
                      campaign.performance === "Excellent" ? "text-purple-400" : "text-muted-foreground"
                    }`}>
                      {campaign.performance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="neuro p-4 rounded-lg mb-6">
            <h3 className="text-sm font-medium mb-4">Content Marketing</h3>
            <div className="space-y-4">
              <div className="neuro-sm p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 neuro-inset flex items-center justify-center rounded-lg mr-3">
                      <Rss size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Blog Posts</h4>
                      <p className="text-xs text-muted-foreground">12 posts this month</p>
                    </div>
                  </div>
                  <button className="text-xs text-neuro-purple hover:text-neuro-blue">New Post</button>
                </div>
              </div>

              <div className="neuro-sm p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 neuro-inset flex items-center justify-center rounded-lg mr-3">
                      <Video size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Video Logs</h4>
                      <p className="text-xs text-muted-foreground">4 videos scheduled</p>
                    </div>
                  </div>
                  <button className="text-xs text-neuro-purple hover:text-neuro-blue">Upload</button>
                </div>
              </div>

              <div className="neuro-sm p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 neuro-inset flex items-center justify-center rounded-lg mr-3">
                      <Share2 size={16} className="text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Social Media</h4>
                      <p className="text-xs text-muted-foreground">8 posts queued</p>
                    </div>
                  </div>
                  <button className="text-xs text-neuro-purple hover:text-neuro-blue">Schedule</button>
                </div>
              </div>
            </div>
          </div>

          <div className="neuro p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium">Upcoming Events</h3>
              <button className="text-xs text-muted-foreground hover:text-white">View Calendar</button>
            </div>
            
            <div className="space-y-3">
              {[
                { name: "Flash Sale", date: "Apr 12, 2025", type: "Discount" },
                { name: "Newsletter", date: "Apr 15, 2025", type: "Email" },
                { name: "Product Launch", date: "Apr 20, 2025", type: "Event" },
              ].map((event, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 neuro-sm flex items-center justify-center rounded-lg mr-3">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-medium">{event.name}</p>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{event.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="neuro p-4 rounded-lg mb-6">
            <h3 className="text-sm font-medium mb-3">Campaign Performance</h3>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="neuro-sm p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Click Rate</p>
                <div className="flex items-baseline mt-1">
                  <h4 className="text-lg font-bold">4.2%</h4>
                  <span className="text-xs text-green-400 ml-2">+0.8%</span>
                </div>
              </div>
              
              <div className="neuro-sm p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Conversion</p>
                <div className="flex items-baseline mt-1">
                  <h4 className="text-lg font-bold">2.8%</h4>
                  <span className="text-xs text-green-400 ml-2">+0.3%</span>
                </div>
              </div>
            </div>
            
            <div className="h-32 neuro-inset rounded-lg flex items-center justify-center mb-4">
              <BarChart size={24} className="text-muted-foreground" />
            </div>
            
            <button className="text-xs flex items-center justify-center w-full text-neuro-purple">
              View detailed analytics <ChevronRight size={14} className="ml-1" />
            </button>
          </div>
          
          <div className="neuro p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-4">Marketing Channels</h3>
            
            <div className="space-y-3">
              {[
                { name: "Social Media", percentage: 45 },
                { name: "Email", percentage: 30 },
                { name: "Search", percentage: 15 },
                { name: "Direct", percentage: 10 },
              ].map((channel, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs">{channel.name}</span>
                    <span className="text-xs">{channel.percentage}%</span>
                  </div>
                  <div className="h-2 bg-neuro-dark rounded-full">
                    <div 
                      className={`h-full rounded-full ${
                        i === 0 ? "bg-neuro-purple" :
                        i === 1 ? "bg-neuro-blue" :
                        i === 2 ? "bg-green-500" :
                        "bg-amber-500"
                      }`}
                      style={{ width: `${channel.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingView;
