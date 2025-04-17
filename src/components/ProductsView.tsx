import React, { useState, useEffect } from 'react';
import { Package, Plus, Grid, List, Search, Filter, Edit, Sliders } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import VendorFilter from './filters/VendorFilter';
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';

// Define the Product type
interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  category: string;
  in_stock: boolean;
  featured: boolean;
  image_url: string | null;
  vendor_id?: string;
}

// Placeholder products
export const PLACEHOLDER_PRODUCTS: Product[] = [
  {
    id: 'pl-1',
    name: 'Ergonomic Chair',
    sku: 'ERG-1001',
    price: 199.99,
    category: 'Furniture',
    in_stock: true,
    featured: true,
    image_url: 'https://placehold.co/600x600/eee/888?text=Ergonomic+Chair',
    vendor_id: '101-BAB'
  },
  {
    id: 'pl-2',
    name: 'Wireless Headphones',
    sku: 'WH-2002',
    price: 89.99,
    category: 'Electronics',
    in_stock: true,
    featured: false,
    image_url: 'https://placehold.co/600x600/ddd/777?text=Wireless+Headphones',
    vendor_id: '103-CCC'
  },
  {
    id: 'pl-3',
    name: 'Ceramic Coffee Mug',
    sku: 'CCM-3003',
    price: 24.99,
    category: 'Kitchenware',
    in_stock: true,
    featured: false,
    image_url: 'https://placehold.co/600x600/ccc/666?text=Ceramic+Mug',
    vendor_id: '105-C3D'
  },
  {
    id: 'pl-4',
    name: 'Smart Watch',
    sku: 'SW-4004',
    price: 149.99,
    category: 'Electronics',
    in_stock: false,
    featured: true,
    image_url: 'https://placehold.co/600x600/bbb/555?text=Smart+Watch',
    vendor_id: '107-GVS'
  },
  {
    id: 'pl-5',
    name: 'Desk Lamp',
    sku: 'DL-5005',
    price: 34.99,
    category: 'Home Decor',
    in_stock: true,
    featured: false,
    image_url: 'https://placehold.co/600x600/aaa/444?text=Desk+Lamp',
    vendor_id: '109-ITB'
  },
  {
    id: 'pl-6',
    name: 'Bluetooth Speaker',
    sku: 'BS-6006',
    price: 79.99,
    category: 'Electronics',
    in_stock: true,
    featured: true,
    image_url: 'https://placehold.co/600x600/999/333?text=Bluetooth+Speaker',
    vendor_id: '111-MVP'
  },
  {
    id: 'pl-7',
    name: 'Non-Stick Pan',
    sku: 'NSP-7007',
    price: 45.99,
    category: 'Kitchenware',
    in_stock: true,
    featured: false,
    image_url: 'https://placehold.co/600x600/888/222?text=Non-Stick+Pan',
    vendor_id: '113-MJD'
  },
  {
    id: 'pl-8',
    name: 'Leather Wallet',
    sku: 'LW-8008',
    price: 29.99,
    category: 'Accessories',
    in_stock: true,
    featured: false,
    image_url: 'https://placehold.co/600x600/777/111?text=Leather+Wallet',
    vendor_id: '115-NUS'
  },
  {
    id: 'pl-9',
    name: 'Throw Pillow',
    sku: 'TP-9009',
    price: 19.99,
    category: 'Home Decor',
    in_stock: true,
    featured: false,
    image_url: 'https://placehold.co/600x600/666/000?text=Throw+Pillow',
    vendor_id: '117-SAS'
  }
];

// Placeholder images for database products without images
const PLACEHOLDER_IMAGES = [
  "https://placehold.co/600x600/eee/888?text=Product+1",
  "https://placehold.co/600x600/ddd/777?text=Product+2",
  "https://placehold.co/600x600/ccc/666?text=Product+3",
  "https://placehold.co/600x600/bbb/555?text=Product+4",
  "https://placehold.co/600x600/aaa/444?text=Product+5"
];

const ProductsView = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVendor, setSelectedVendor] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const productsPerPage = 9;
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const [showPlaceholders, setShowPlaceholders] = useState(true);

  // Fetch products from Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('products')
          .select('*');

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          const productsWithPlaceholders = data.map((product, index) => ({
            ...product,
            image_url: product.image_url || PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length]
          }));
          setAllProducts(productsWithPlaceholders);
          setShowPlaceholders(false);
        } else {
          // Use placeholder products if no products from database
          console.log("No products found in database, using placeholders");
          setAllProducts(PLACEHOLDER_PRODUCTS);
          setShowPlaceholders(true);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        toast({
          title: "Error fetching products",
          description: "Could not load products from the database. Using placeholders instead.",
          variant: "destructive",
        });
        // Fallback to placeholder products on error
        setAllProducts(PLACEHOLDER_PRODUCTS);
        setShowPlaceholders(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Subscribe to real-time changes
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*', // Listen for inserts, updates, and deletes
          schema: 'public',
          table: 'products'
        },
        (payload) => {
          // Refresh products when changes occur
          fetchProducts();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [toast]);

  // Apply filters whenever products, search query, vendor filter changes
  useEffect(() => {
    let filtered = [...allProducts];
    
    // Apply vendor filter
    if (selectedVendor && selectedVendor !== 'all') {
      filtered = filtered.filter(product => product.vendor_id === selectedVendor);
    }
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.sku.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    // Apply price filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [allProducts, selectedVendor, searchQuery, priceRange]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  
  // Handle vendor change
  const handleVendorChange = (vendorId: string) => {
    setSelectedVendor(vendorId === 'all' ? null : vendorId);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Generate pagination links
  const renderPaginationItems = () => {
    const items = [];
    
    // Always show first page
    items.push(
      <PaginationItem key="first">
        <PaginationLink 
          isActive={currentPage === 1} 
          onClick={() => handlePageChange(1)}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Show ellipsis if needed
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis-1">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Show pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i === 1 || i === totalPages) continue; // Skip first and last page as they're always shown
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            isActive={currentPage === i} 
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
      items.push(
        <PaginationItem key="ellipsis-2">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key="last">
          <PaginationLink 
            isActive={currentPage === totalPages} 
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  const renderProductContent = (product: Product) => (
    <Link to={`/product/${product.id}`} className="block">
      <>
        <div className="aspect-square neuro-inset rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
          <img 
            src={product.image_url || PLACEHOLDER_IMAGES[0]} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          {!product.in_stock && (
            <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded">
              Out of Stock
            </div>
          )}
          {product.featured && (
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
              Featured
            </div>
          )}
        </div>
        
        <h3 className="text-sm font-medium mb-1">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-2">{product.category}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">{product.sku}</span>
          <span className="text-sm font-medium">${product.price.toFixed(2)}</span>
        </div>
        
        {product.vendor_id && (
          <div className="mt-2 pt-2 border-t border-border">
            <span className="text-xs text-muted-foreground">Vendor: {product.vendor_id}</span>
          </div>
        )}
        
        <div className="mt-3 pt-3 border-t border-border flex justify-end">
          <button className="neuro-sm neuro-hover neuro-active p-2 rounded-lg">
            <Edit size={14} />
          </button>
        </div>
      </>
    </Link>
  );

  const renderProducts = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="neuro p-4 rounded-lg">
              <Skeleton className="aspect-square w-full mb-3 h-48" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-3 w-1/2 mb-4" />
              <div className="flex justify-between">
                <Skeleton className="h-3 w-1/4" />
                <Skeleton className="h-3 w-1/4" />
              </div>
            </div>
          ))}
        </div>
      );
    }
    
    if (currentProducts.length === 0) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="text-muted-foreground">No products found matching your filters.</div>
        </div>
      );
    }

    if (viewType === 'grid') {
      return (
        <div className="grid grid-cols-3 gap-4 pb-4">
          {currentProducts.map((product) => (
            <div key={product.id} className="neuro p-4 rounded-lg">
              {renderProductContent(product)}
            </div>
          ))}
        </div>
      );
    }

    // List view rendering
    return (
      <div className="space-y-4">
        {currentProducts.map((product) => (
          <div 
            key={product.id} 
            className="neuro p-4 rounded-lg flex items-center space-x-4"
          >
            <div className="w-24 h-24 neuro-inset rounded-lg flex items-center justify-center relative overflow-hidden">
              <img 
                src={product.image_url || PLACEHOLDER_IMAGES[0]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              {!product.in_stock && (
                <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs px-1 py-0.5 rounded text-[8px]">
                  Out of Stock
                </div>
              )}
              {product.featured && (
                <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-1 py-0.5 rounded text-[8px]">
                  Featured
                </div>
              )}
            </div>
            
            <div className="flex-1 flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <span className="text-xs text-muted-foreground">{product.sku}</span>
                {product.vendor_id && (
                  <p className="text-xs text-muted-foreground mt-1">Vendor: {product.vendor_id}</p>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">${product.price.toFixed(2)}</span>
                <button className="neuro-sm neuro-hover neuro-active p-2 rounded-lg">
                  <Edit size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 flex">
      {/* Filter Sidebar */}
      <div className="w-64 mr-6">
        <div className="neuro p-4 rounded-lg">
          <h2 className="font-medium text-lg mb-4 flex items-center">
            <Filter size={16} className="mr-2" />
            Filters
          </h2>
          
          {/* Search */}
          <div className="mb-6">
            <div className="neuro-inset flex items-center px-3 py-2 rounded-lg w-full">
              <Search size={16} className="text-muted-foreground mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none text-sm flex-1"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          
          {/* Vendor Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Vendor</h3>
            <VendorFilter 
              selectedVendor={selectedVendor} 
              onVendorChange={handleVendorChange} 
            />
          </div>
          
          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Categories</h3>
            <div className="space-y-2">
              {['Electronics', 'Furniture', 'Kitchenware', 'Accessories', 'Home Decor'].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} />
                  <Label htmlFor={`category-${category}`} className="text-sm">{category}</Label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Availability Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Availability</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="in-stock" />
                <Label htmlFor="in-stock" className="text-sm">In Stock</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="out-of-stock" />
                <Label htmlFor="out-of-stock" className="text-sm">Out of Stock</Label>
              </div>
            </div>
          </div>
          
          {/* Featured Filter */}
          <div className="mb-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="featured" />
              <Label htmlFor="featured" className="text-sm">Featured Products</Label>
            </div>
          </div>
          
          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Price Range</h3>
            <Slider 
              defaultValue={[0, 100]} 
              max={200} 
              step={1} 
              className="mb-2"
              onValueChange={(value) => setPriceRange(value)}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          
          {/* Apply Filters Button */}
          <button className="neuro neuro-hover neuro-active w-full px-3 py-2 rounded-lg text-sm">
            Apply Filters
          </button>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium flex items-center">
            <Package className="mr-2" size={20} />
            Products {showPlaceholders && <span className="text-xs text-muted-foreground ml-2">(Using placeholders)</span>}
          </h2>
          
          <div className="flex items-center gap-2">
            {selectedVendor && (
              <div className="text-sm">
                <span className="text-muted-foreground mr-1">Vendor:</span>
                <span className="font-medium">{selectedVendor}</span>
              </div>
            )}
            <button className="neuro neuro-hover neuro-active px-3 py-2 rounded-lg flex items-center">
              <Plus size={16} className="mr-2" />
              <span className="text-sm">Add Product</span>
            </button>
          </div>
        </div>
        
        <div className="flex justify-end items-center mb-4">
          <div className="flex items-center space-x-2">
            <button 
              className={cn(
                "neuro-sm neuro-hover p-2 rounded-lg", 
                viewType === 'grid' ? "shadow-neuro-inset text-neuro-purple" : ""
              )}
              onClick={() => setViewType('grid')}
            >
              <Grid size={16} />
            </button>
            <button 
              className={cn(
                "neuro-sm neuro-hover p-2 rounded-lg", 
                viewType === 'list' ? "shadow-neuro-inset text-neuro-purple" : ""
              )}
              onClick={() => setViewType('list')}
            >
              <List size={16} />
            </button>
          </div>
        </div>
        
        <ScrollArea className="h-[calc(100vh-280px)]">
          {renderProducts()}
        </ScrollArea>
        
        <div className="mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {renderPaginationItems()}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
