
import { ShoppingBag, ChevronDown, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const OrdersView = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium flex items-center">
          <ShoppingBag className="mr-2" size={20} />
          Orders
        </h2>
        
        <div className="flex items-center space-x-2">
          <button className="neuro-sm neuro-hover neuro-active px-3 py-2 rounded-lg text-xs flex items-center">
            Status <ChevronDown size={14} className="ml-1" />
          </button>
          <button className="neuro-sm neuro-hover neuro-active px-3 py-2 rounded-lg text-xs flex items-center">
            Date Range <ChevronDown size={14} className="ml-1" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">New Orders</p>
          <div className="flex items-baseline mt-1">
            <h3 className="text-xl font-bold">24</h3>
            <span className="ml-1 text-xs text-muted-foreground">today</span>
          </div>
        </div>
        
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Processing</p>
          <div className="flex items-baseline mt-1">
            <h3 className="text-xl font-bold">18</h3>
            <span className="ml-1 text-xs text-muted-foreground">orders</span>
          </div>
        </div>
        
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Shipped</p>
          <div className="flex items-baseline mt-1">
            <h3 className="text-xl font-bold">42</h3>
            <span className="ml-1 text-xs text-muted-foreground">this week</span>
          </div>
        </div>
      </div>
      
      <div className="neuro p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium">Recent Orders</h3>
          <button className="text-xs text-muted-foreground hover:text-white">View All</button>
        </div>
        
        <div className="space-y-1">
          <div className="grid grid-cols-6 gap-2 text-xs py-2 border-b border-neuro-light">
            <div className="font-medium">Order ID</div>
            <div className="font-medium">Customer</div>
            <div className="font-medium">Date</div>
            <div className="font-medium">Amount</div>
            <div className="font-medium">Status</div>
            <div className="font-medium text-right">Action</div>
          </div>
          
          {[
            { id: "ORD-7891", customer: "John Smith", date: "Apr 09, 2025", amount: "$128.50", status: "New" },
            { id: "ORD-7890", customer: "Emma Johnson", date: "Apr 08, 2025", amount: "$85.25", status: "Processing" },
            { id: "ORD-7889", customer: "Michael Brown", date: "Apr 08, 2025", amount: "$212.99", status: "Processing" },
            { id: "ORD-7888", customer: "Sarah Wilson", date: "Apr 07, 2025", amount: "$59.99", status: "Shipped" },
            { id: "ORD-7887", customer: "David Taylor", date: "Apr 07, 2025", amount: "$145.00", status: "Delivered" },
          ].map((order, i) => (
            <div key={i} className="grid grid-cols-6 gap-2 text-xs py-2 border-b border-neuro-dark last:border-0">
              <div>{order.id}</div>
              <div>{order.customer}</div>
              <div className="text-muted-foreground">{order.date}</div>
              <div>{order.amount}</div>
              <div>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                  order.status === "New" ? "bg-blue-900/30 text-blue-300" :
                  order.status === "Processing" ? "bg-amber-900/30 text-amber-300" :
                  order.status === "Shipped" ? "bg-purple-900/30 text-purple-300" :
                  "bg-green-900/30 text-green-300"
                }`}>
                  {order.status === "New" && <AlertTriangle size={12} className="mr-1" />}
                  {order.status === "Processing" && <Clock size={12} className="mr-1" />}
                  {order.status === "Shipped" && <ShoppingBag size={12} className="mr-1" />}
                  {order.status === "Delivered" && <CheckCircle size={12} className="mr-1" />}
                  {order.status}
                </span>
              </div>
              <div className="text-right">
                <button className="hover:text-neuro-purple">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersView;
