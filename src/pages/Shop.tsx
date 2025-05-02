import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Filter, ShoppingBag } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import BackToTop from '@/components/BackToTop';

// Mock category data
const categories = [
  "All Items",
  "Clothing",
  "Accessories",
  "Shoes",
  "Vintage",
  "Home Décor",
  "Books"
];

// Mock product data
const products = [
  {
    id: "1",
    name: "Vintage Denim Jacket",
    price: 45.99,
    image: "/images/denim-jacket.jpg",
    category: "Clothing",
    condition: "Excellent",
    tags: ["Vintage", "Trending"]
  },
  {
    id: "2",
    name: "Retro Graphic T-shirt",
    price: 18.50,
    image: "/images/graphic-tee.jpg", 
    category: "Clothing",
    condition: "Good",
    tags: ["Vintage"]
  },
  {
    id: "3",
    name: "Bohemian Woven Bag",
    price: 24.99,
    image: "/images/woven-bag.jpg",
    category: "Accessories",
    condition: "Like New",
    tags: ["Handmade"]
  },
  {
    id: "4",
    name: "Vintage Polaroid Camera",
    price: 65.00,
    image: "/images/polaroid-camera.jpg",
    category: "Accessories",
    condition: "Good",
    tags: ["Vintage", "Rare"]
  },
  {
    id: "5",
    name: "Classic Vinyl Records (Set of 3)",
    price: 34.99,
    image: "/images/vinyl-records.jpg",
    category: "Home Décor",
    condition: "Good",
    tags: ["Vintage", "Rare"]
  },
  {
    id: "6",
    name: "Leather Ankle Boots",
    price: 42.50,
    image: "/images/ankle-boots.jpg",
    category: "Shoes",
    condition: "Excellent",
    tags: ["Trending"]
  },
  {
    id: "7",
    name: "Vintage Book Collection",
    price: 28.99,
    image: "/images/book-collection.jpg",
    category: "Books",
    condition: "Good",
    tags: ["Vintage", "Under $30"]
  },
  {
    id: "8",
    name: "Handcrafted Wall Art",
    price: 36.75,
    image: "/images/wall-art.jpg",
    category: "Home Décor",
    condition: "Like New",
    tags: ["Handmade"]
  }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All Items" 
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-thrift-beige py-10">
          <div className="container mx-auto px-4 text-center">
            <ShoppingBag className="h-12 w-12 mx-auto text-thrift-green mb-4" />
            <h1 className="text-4xl font-bold font-lora text-thrift-green mb-3">Shop Sustainable Style</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our curated collection of pre-loved treasures. Every purchase helps reduce waste and gives unique items a second life.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Category Navigation */}
          <div className="flex justify-between items-center mb-8">
            <div className="overflow-x-auto pb-2 -mx-4 px-4">
              <div className="flex space-x-2 md:space-x-4 min-w-min">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 whitespace-nowrap rounded-full text-sm ${
                      selectedCategory === category 
                        ? "bg-thrift-green text-white" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <Button
              variant="outline"
              className="border-thrift-green text-thrift-green hover:bg-thrift-green/10 hidden md:flex"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Mobile Filter Button */}
          <div className="mb-4 md:hidden">
            <Button
              variant="outline"
              className="w-full border-thrift-green text-thrift-green hover:bg-thrift-green/10"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter Options
            </Button>
          </div>
          
          {/* Filter Panel - can be expanded in a real implementation */}
          {isFilterOpen && (
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Price Range</h3>
                    <div className="space-y-1">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Under $25</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>$25 - $50</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>$50 - $100</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Condition</h3>
                    <div className="space-y-1">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Like New</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Excellent</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Good</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Tags</h3>
                    <div className="space-y-1">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Vintage</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Trending</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Handmade</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button 
                    variant="outline" 
                    className="mr-2"
                  >
                    Reset
                  </Button>
                  <Button className="bg-thrift-green hover:bg-thrift-green/90">
                    Apply Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Shop;
