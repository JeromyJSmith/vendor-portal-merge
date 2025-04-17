
import { Database, AlertTriangle, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

const InventoryView = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium flex items-center">
          <Database className="mr-2" size={20} />
          Inventory
        </h2>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Total Stock</p>
          <div className="flex items-baseline mt-1">
            <h3 className="text-xl font-bold">1,234</h3>
            <span className="ml-1 text-xs text-muted-foreground">items</span>
          </div>
        </div>
        
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Low Stock</p>
          <div className="flex items-baseline mt-1">
            <h3 className="text-xl font-bold text-amber-500">12</h3>
            <span className="ml-1 text-xs text-muted-foreground">items</span>
          </div>
        </div>
        
        <div className="neuro p-4 rounded-lg">
          <p className="text-xs text-muted-foreground">Out of Stock</p>
          <div className="flex items-baseline mt-1">
            <h3 className="text-xl font-bold text-red-500">5</h3>
            <span className="ml-1 text-xs text-muted-foreground">items</span>
          </div>
        </div>
      </div>
      
      <div className="neuro p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium">Inventory Status</h3>
          <button className="text-xs text-muted-foreground hover:text-white">View All</button>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between items-center text-xs py-2 border-b border-neuro-light">
            <div className="w-1/4 font-medium">Product</div>
            <div className="w-1/4 text-center font-medium">SKU</div>
            <div className="w-1/4 text-center font-medium">Stock</div>
            <div className="w-1/4 text-right font-medium">Status</div>
          </div>
          
          {[
            { name: "Product A", sku: "SKU-1001", stock: 124, status: "Good" },
            { name: "Product B", sku: "SKU-1002", stock: 8, status: "Low" },
            { name: "Product C", sku: "SKU-1003", stock: 0, status: "Out" },
            { name: "Product D", sku: "SKU-1004", stock: 32, status: "Good" },
            { name: "Product E", sku: "SKU-1005", stock: 16, status: "Good" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center text-xs py-2 border-b border-neuro-dark last:border-0">
              <div className="w-1/4">{item.name}</div>
              <div className="w-1/4 text-center text-muted-foreground">{item.sku}</div>
              <div className="w-1/4 text-center">{item.stock}</div>
              <div className="w-1/4 text-right">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                  item.status === "Good" ? "bg-green-900/30 text-green-300" :
                  item.status === "Low" ? "bg-amber-900/30 text-amber-300" :
                  "bg-red-900/30 text-red-300"
                }`}>
                  {item.status === "Low" && <AlertTriangle size={12} className="mr-1" />}
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryView;
