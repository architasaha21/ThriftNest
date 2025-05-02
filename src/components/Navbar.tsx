
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Menu, X, ShoppingBag, User, Heart, Moon, Sun } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useTheme } from '@/hooks/useTheme';
import { Toggle } from "@/components/ui/toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();
  
  // Calculate total items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-thrift-beige dark:bg-thrift-green/90 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-thrift-green dark:text-thrift-beige mr-2" />
              <span className="text-2xl font-bold text-thrift-green dark:text-thrift-beige font-lora">ThriftNest</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange font-medium transition-colors">Shop</Link>
            <Link to="/donate" className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange font-medium transition-colors">Donate</Link>
            <Link to="/shop" className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange font-medium transition-colors">New Arrivals</Link>
            <Link to="/shop" className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange font-medium transition-colors">Vintage</Link>
          </div>

          {/* Search and Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Toggle 
              pressed={isDarkMode}
              onPressedChange={toggleTheme}
              aria-label="Toggle dark mode"
              className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Toggle>
            <button className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange transition-colors">
              <Search size={20} />
            </button>
            <Link to="/account" className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange transition-colors">
              <User size={20} />
            </Link>
            <button className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange transition-colors">
              <Heart size={20} />
            </button>
            <Link to="/cart">
              <Button className="bg-thrift-green dark:bg-thrift-beige text-white dark:text-thrift-green hover:bg-thrift-orange relative">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Cart
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-thrift-orange text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Toggle 
              pressed={isDarkMode}
              onPressedChange={toggleTheme}
              aria-label="Toggle dark mode"
              className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Toggle>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-thrift-green dark:text-thrift-beige p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-thrift-beige dark:bg-thrift-green/90 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/shop" className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange font-medium transition-colors px-4">Shop</Link>
              <Link to="/donate" className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange font-medium transition-colors px-4">Donate</Link>
              <Link to="/shop" className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange font-medium transition-colors px-4">New Arrivals</Link>
              <Link to="/shop" className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange font-medium transition-colors px-4">Vintage</Link>
              
              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange transition-colors">
                  <Search size={20} />
                </button>
                <Link to="/account" className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange transition-colors">
                  <User size={20} />
                </Link>
                <button className="text-thrift-green dark:text-thrift-beige hover:text-thrift-orange transition-colors">
                  <Heart size={20} />
                </button>
                <Link to="/cart">
                  <Button className="bg-thrift-green dark:bg-thrift-beige text-white dark:text-thrift-green hover:bg-thrift-orange relative">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Cart
                    {cartItemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-thrift-orange text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {cartItemCount}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
