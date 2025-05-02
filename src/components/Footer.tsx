
import React from 'react';
import { ShoppingBag, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-thrift-green text-white dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Information */}
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-6 w-6 mr-2" />
              <span className="text-xl font-semibold font-lora">ThriftNest</span>
            </div>
            <p className="text-thrift-gray/80 dark:text-gray-300 mb-6">
              Sustainable fashion marketplace giving pre-loved items a new home while reducing waste.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-thrift-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-thrift-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-thrift-orange transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-lora">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-thrift-gray/80 dark:text-gray-300 hover:text-thrift-orange transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-thrift-gray/80 dark:text-gray-300 hover:text-thrift-orange transition-colors">Vintage Collection</a></li>
              <li><a href="#" className="text-thrift-gray/80 dark:text-gray-300 hover:text-thrift-orange transition-colors">Accessories</a></li>
              <li><a href="#" className="text-thrift-gray/80 dark:text-gray-300 hover:text-thrift-orange transition-colors">Home Décor</a></li>
              <li><a href="#" className="text-thrift-gray/80 dark:text-gray-300 hover:text-thrift-orange transition-colors">Sale Items</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-lora">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-thrift-gray/80 dark:text-gray-300 hover:text-thrift-orange transition-colors">FAQ</a></li>
              <li><a href="#" className="text-thrift-gray/80 dark:text-gray-300 hover:text-thrift-orange transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-thrift-gray/80 dark:text-gray-300 hover:text-thrift-orange transition-colors">Donation Process</a></li>
              <li><a href="#" className="text-thrift-gray/80 dark:text-gray-300 hover:text-thrift-orange transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-thrift-gray/80 dark:text-gray-300 hover:text-thrift-orange transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-lora">Stay Updated</h4>
            <p className="text-thrift-gray/80 dark:text-gray-300 mb-4">
              Subscribe to our newsletter for new arrivals, styling tips, and sustainable fashion insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md text-gray-800 dark:text-white dark:bg-gray-700 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-thrift-orange hover:bg-thrift-orange/90 px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-thrift-gray/70 dark:text-gray-400">
          <p>&copy; {currentYear} ThriftNest. All rights reserved. Made with ♻️ for sustainable fashion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
