
import React from 'react';
import { Button } from "@/components/ui/button";
import { Tag, Heart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Vintage Denim Jacket",
      price: 45.99,
      originalPrice: 120.00,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&auto=format",
      condition: "Gently Used",
      tag: "Vintage",
      brand: "Levi's",
      size: "M",
    },
    {
      id: 2,
      name: "Boho Style Maxi Dress",
      price: 28.50,
      originalPrice: 75.00,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&auto=format",
      condition: "Like New",
      tag: "Under $30",
      brand: "Free People",
      size: "S",
    },
    {
      id: 3,
      name: "Men's Leather Boots",
      price: 59.99,
      originalPrice: 150.00,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&auto=format",
      condition: "Light Wear",
      tag: "Trending",
      brand: "Dr. Martens",
      size: "42",
    },
    {
      id: 4,
      name: "Cashmere Sweater",
      price: 49.95,
      originalPrice: 125.00,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&auto=format",
      condition: "Like New",
      tag: "Rare",
      brand: "J.Crew",
      size: "L",
    }
  ];

  return (
    <section className="py-16 bg-thrift-offwhite">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-thrift-green font-lora mb-2">Featured Finds</h2>
            <p className="text-gray-600 max-w-2xl">
              Hand-picked treasures you won't want to miss
            </p>
          </div>
          <Button className="mt-4 md:mt-0 bg-thrift-green hover:bg-thrift-green/90 text-white">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative pb-[100%] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-thrift-orange text-white">
                    {product.tag}
                  </span>
                </div>
                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-thrift-green" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-thrift-green">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.brand} • Size {product.size}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center">
                    <span className="font-semibold text-thrift-green">${product.price}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">${product.originalPrice}</span>
                  </div>
                  <span className="inline-flex items-center text-xs text-gray-500">
                    <Tag className="h-3 w-3 mr-1" />
                    {product.condition}
                  </span>
                </div>
                
                <Button className="w-full mt-4 bg-thrift-green hover:bg-thrift-green/90 text-white">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="bg-thrift-orange/10 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-thrift-orange mb-1">2,500+</h3>
              <p className="text-gray-600">Items Available</p>
            </div>
            <div className="bg-thrift-orange/10 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-thrift-orange mb-1">500+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-thrift-orange/10 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-thrift-orange mb-1">10 tons</h3>
              <p className="text-gray-600">Textile Waste Saved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
