
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Menu, X, ShoppingBag, User, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-thrift-beige py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-thrift-green mr-2" />
              <span className="text-2xl font-bold text-thrift-green font-lora">ThriftNest</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-thrift-green hover:text-thrift-orange font-medium transition-colors">Shop</a>
            <a href="#" className="text-thrift-green hover:text-thrift-orange font-medium transition-colors">Donate</a>
            <a href="#" className="text-thrift-green hover:text-thrift-orange font-medium transition-colors">New Arrivals</a>
            <a href="#" className="text-thrift-green hover:text-thrift-orange font-medium transition-colors">Vintage</a>
          </div>

          {/* Search and Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-thrift-green hover:text-thrift-orange transition-colors">
              <Search size={20} />
            </button>
            <button className="text-thrift-green hover:text-thrift-orange transition-colors">
              <User size={20} />
            </button>
            <button className="text-thrift-green hover:text-thrift-orange transition-colors">
              <Heart size={20} />
            </button>
            <Button className="bg-thrift-green text-white hover:bg-thrift-orange">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Cart
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-thrift-green p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-thrift-beige animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-thrift-green hover:text-thrift-orange font-medium transition-colors px-4">Shop</a>
              <a href="#" className="text-thrift-green hover:text-thrift-orange font-medium transition-colors px-4">Donate</a>
              <a href="#" className="text-thrift-green hover:text-thrift-orange font-medium transition-colors px-4">New Arrivals</a>
              <a href="#" className="text-thrift-green hover:text-thrift-orange font-medium transition-colors px-4">Vintage</a>
              
              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-gray-200">
                <button className="text-thrift-green hover:text-thrift-orange transition-colors">
                  <Search size={20} />
                </button>
                <button className="text-thrift-green hover:text-thrift-orange transition-colors">
                  <User size={20} />
                </button>
                <button className="text-thrift-green hover:text-thrift-orange transition-colors">
                  <Heart size={20} />
                </button>
                <Button className="bg-thrift-green text-white hover:bg-thrift-orange">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
