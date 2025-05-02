
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShoppingCart, ArrowLeft, Trash, Plus, Minus } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { toast } = useToast();

  // Calculate the subtotal
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 4.99;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "This would normally proceed to checkout. For now, we'll just clear your cart.",
    });
    clearCart();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="text-thrift-green hover:text-thrift-orange flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
        </div>

        <h1 className="text-3xl font-bold font-lora mb-6 flex items-center">
          <ShoppingCart className="mr-3 h-8 w-8" />
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-4">
              <ShoppingCart className="h-16 w-16 mx-auto text-gray-300" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Link to="/">
              <Button className="bg-thrift-green hover:bg-thrift-green/90">
                Browse Products
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Cart Items */}
              <div className="bg-white rounded-lg shadow-sm">
                {cart.map((item) => (
                  <div key={item.id} className="border-b border-gray-100 last:border-0 p-4 flex">
                    <div className="h-24 w-24 flex-shrink-0 bg-gray-50 rounded overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/200x200?text=No+Image";
                        }}
                      />
                    </div>
                    
                    <div className="ml-4 flex flex-col flex-grow justify-between">
                      <div>
                        <Link to={`/product/${item.id}`}>
                          <h3 className="font-medium hover:text-thrift-orange transition-colors">{item.name}</h3>
                        </Link>
                        <p className="text-gray-500 text-sm">Unit Price: ${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded">
                          <button 
                            className="px-2 py-1 text-gray-500 hover:text-thrift-orange"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button 
                            className="px-2 py-1 text-gray-500 hover:text-thrift-orange"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="font-medium mr-4">${(item.price * item.quantity).toFixed(2)}</span>
                          <button 
                            className="text-gray-400 hover:text-red-500"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="bg-thrift-beige/30 p-6 rounded-lg h-fit">
              <h2 className="text-xl font-semibold mb-4 font-lora">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-thrift-orange hover:bg-thrift-orange/90 text-white py-6"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Free shipping on orders over $75
              </p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
