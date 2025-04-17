
import { BarChart2, TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sales: 400 },
  { name: 'Tue', sales: 600 },
  { name: 'Wed', sales: 500 },
  { name: 'Thu', sales: 700 },
  { name: 'Fri', sales: 800 },
  { name: 'Sat', sales: 1000 },
  { name: 'Sun', sales: 600 },
];

const AnalyticsView = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium flex items-center">
          <BarChart2 className="mr-2" size={20} />
          Analytics
        </h2>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Revenue</p>
          <div className="flex items-baseline justify-between mt-1">
            <h3 className="text-xl font-bold">$12,628</h3>
            <span className="text-xs text-green-400 flex items-center">
              <TrendingUp size={14} className="mr-1" /> 12.4%
            </span>
          </div>
        </div>
        
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Customers</p>
          <div className="flex items-baseline justify-between mt-1">
            <h3 className="text-xl font-bold">843</h3>
            <span className="text-xs text-green-400 flex items-center">
              <TrendingUp size={14} className="mr-1" /> 4.2%
            </span>
          </div>
        </div>
        
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Avg. Order Value</p>
          <div className="flex items-baseline justify-between mt-1">
            <h3 className="text-xl font-bold">$58.39</h3>
            <span className="text-xs text-red-400 flex items-center">
              <TrendingDown size={14} className="mr-1" /> 2.1%
            </span>
          </div>
        </div>
      </div>
      
      <div className="neuro p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium">Weekly Sales</h3>
          <div className="text-xs text-muted-foreground">Last 7 days</div>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#888888', fontSize: 12 }}
              />
              <YAxis 
                hide={true}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#222222', 
                  border: 'none',
                  borderRadius: '0.5rem',
                  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.4), -5px -5px 10px rgba(255, 255, 255, 0.05)'
                }}
              />
              <Bar 
                dataKey="sales" 
                fill="#5D87E8" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="neuro p-4 rounded-lg">
          <h3 className="text-sm font-medium mb-3">Top Products</h3>
          <div className="space-y-2">
            {[
              { name: "Premium T-shirt", sales: 128 },
              { name: "Designer Jeans", sales: 86 },
              { name: "Leather Bag", sales: 54 },
              { name: "Running Shoes", sales: 42 },
            ].map((product, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-xs">{product.name}</span>
                <span className="text-xs text-muted-foreground">{product.sales} sold</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="neuro p-4 rounded-lg">
          <h3 className="text-sm font-medium mb-3">Key Metrics</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-8 h-8 neuro-sm flex items-center justify-center rounded-lg mr-3">
                <Users size={16} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Conversion Rate</p>
                <p className="text-sm font-medium">3.42%</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 neuro-sm flex items-center justify-center rounded-lg mr-3">
                <ShoppingCart size={16} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Abandoned Cart</p>
                <p className="text-sm font-medium">21.8%</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 neuro-sm flex items-center justify-center rounded-lg mr-3">
                <DollarSign size={16} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Profit Margin</p>
                <p className="text-sm font-medium">24.3%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;
