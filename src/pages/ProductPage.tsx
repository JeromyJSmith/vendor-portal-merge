
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Package, Tag, DollarSign, Truck, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PLACEHOLDER_PRODUCTS } from '@/components/ProductsView';

const ProductPage = () => {
  const { id } = useParams();
  const product = PLACEHOLDER_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="p-6">
        <Link to="/" className="neuro-sm neuro-hover px-3 py-2 rounded-lg inline-flex items-center mb-6">
          <ChevronLeft size={16} className="mr-1" />
          Back to Products
        </Link>
        <div className="text-center py-12">
          <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-xl font-medium mb-2">Product Not Found</h2>
          <p className="text-muted-foreground">The product you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Link to="/" className="neuro-sm neuro-hover px-3 py-2 rounded-lg inline-flex items-center mb-6">
        <ChevronLeft size={16} className="mr-1" />
        Back to Products
      </Link>

      <div className="grid grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="neuro p-6 rounded-lg">
          <div className="aspect-square relative rounded-lg overflow-hidden neuro-inset">
            <img 
              src={product.image_url} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.featured && (
              <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                Featured
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-medium mb-2">{product.name}</h1>
            <div className="flex items-center text-muted-foreground text-sm">
              <Package size={16} className="mr-1" />
              <span className="mr-4">{product.category}</span>
              <Tag size={16} className="mr-1" />
              <span>{product.sku}</span>
            </div>
          </div>

          <div className="neuro p-4 rounded-lg">
            <div className="flex items-baseline mb-2">
              <DollarSign size={20} className="text-neuro-purple" />
              <span className="text-2xl font-bold">{product.price.toFixed(2)}</span>
              <span className="ml-2 text-sm text-muted-foreground">USD</span>
            </div>
            
            <div className="flex items-center text-sm">
              <Truck size={16} className="mr-1" />
              <span className={cn(
                product.in_stock ? "text-green-500" : "text-destructive"
              )}>
                {product.in_stock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>

          <div className="neuro p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Vendor Information</h3>
            <p className="text-sm text-muted-foreground">
              Vendor ID: {product.vendor_id || "Not specified"}
            </p>
          </div>

          <button 
            className={cn(
              "neuro neuro-hover w-full py-3 rounded-lg text-sm font-medium",
              !product.in_stock && "opacity-50 cursor-not-allowed"
            )}
            disabled={!product.in_stock}
          >
            {product.in_stock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
