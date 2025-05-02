
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  condition: string;
  tags?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "https://placehold.co/200x200?text=No+Image",
      quantity: 1
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-md h-full flex flex-col">
        <div className="aspect-square relative bg-gray-100 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/300x300?text=No+Image";
            }}
          />
          
          {/* Condition badge */}
          <span className="absolute top-2 left-2 bg-thrift-green text-white text-xs px-2 py-1 rounded-full">
            {product.condition}
          </span>
          
          {/* Action buttons */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 flex justify-between opacity-0 hover:opacity-100 transition-opacity">
            <button
              onClick={handleAddToCart}
              className="p-2 bg-thrift-orange rounded-full text-white hover:bg-thrift-orange/90"
              aria-label="Add to cart"
            >
              <ShoppingCart size={16} />
            </button>
            
            <button
              onClick={handleWishlist}
              className="p-2 bg-white rounded-full text-thrift-green hover:bg-gray-100"
              aria-label="Add to wishlist"
            >
              <Heart size={16} />
            </button>
          </div>
        </div>
        
        <CardContent className="p-4 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="font-medium mb-1 hover:text-thrift-orange transition-colors">{product.name}</h3>
            <p className="text-thrift-green font-semibold">${product.price.toFixed(2)}</p>
          </div>
          
          {product.tags && product.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {product.tags.map((tag) => (
                <span key={tag} className="bg-thrift-beige text-thrift-green text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
