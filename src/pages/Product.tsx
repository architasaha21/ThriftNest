
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShoppingCart, Heart, ArrowLeft } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

// Mock product data - in a real app, this would come from an API
const mockProducts = [
  {
    id: "1",
    name: "Vintage Denim Jacket",
    description: "Authentic 90s denim jacket in excellent condition. Medium wash with minimal wear and classic styling.",
    price: 45.99,
    condition: "Excellent",
    size: "Medium",
    brand: "Levi's",
    images: ["/images/denim-jacket.jpg"],
    category: "Clothing"
  },
  {
    id: "2",
    name: "Retro Graphic T-shirt",
    description: "Bold vintage graphic tee from the early 2000s. Soft cotton with minor fading that adds to the vintage charm.",
    price: 18.50,
    condition: "Good",
    size: "Large",
    brand: "Unknown",
    images: ["/images/graphic-tee.jpg"],
    category: "Clothing" 
  },
  {
    id: "3",
    name: "Bohemian Woven Bag",
    description: "Handcrafted woven bag with colorful accents. Perfect for summer outings.",
    price: 24.99,
    condition: "Like New",
    size: "One Size",
    brand: "Handmade",
    images: ["/images/woven-bag.jpg"],
    category: "Accessories"
  }
];

const Product = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { addToCart } = useCart();
  
  // Find the product with the matching ID
  const product = mockProducts.find(p => p.id === id);
  
  // If no product is found, show a message
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
            <Link to="/">
              <Button className="bg-thrift-green hover:bg-thrift-green/90">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] || "https://placehold.co/200x200?text=No+Image",
      quantity: 1
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="text-thrift-green hover:text-thrift-orange flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shopping
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-thrift-beige/50 rounded-lg overflow-hidden flex items-center justify-center h-[400px]">
            {product.images && product.images.length > 0 ? (
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="object-cover h-full w-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/400x400?text=No+Image";
                }}
              />
            ) : (
              <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                <span className="text-gray-400">No image available</span>
              </div>
            )}
          </div>
          
          {/* Product Information */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold font-lora mb-2">{product.name}</h1>
              <p className="text-2xl text-thrift-green font-semibold">${product.price.toFixed(2)}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-medium text-sm text-gray-500">Condition</h3>
                <p>{product.condition}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-500">Size</h3>
                <p>{product.size}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-500">Brand</h3>
                <p>{product.brand}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-500">Category</h3>
                <p>{product.category}</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button 
                className="bg-thrift-orange hover:bg-thrift-orange/90 text-white px-8 py-6"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" className="border-thrift-green text-thrift-green hover:bg-thrift-green/10">
                <Heart className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
