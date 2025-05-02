
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Categories = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const categories = [
    {
      name: "Clothes",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format",
      count: "1,245 items",
      url: "#"
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&auto=format",
      count: "834 items",
      url: "#"
    },
    {
      name: "Home Décor",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&auto=format",
      count: "423 items",
      url: "#"
    },
    {
      name: "Vintage",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format",
      count: "512 items",
      url: "#"
    }
  ];

  return (
    <section className="py-16 bg-thrift-beige/30">
      <div className="container mx-auto px-4">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-thrift-green font-lora mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our thoughtfully curated categories of pre-loved treasures, each item with its own unique story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const { ref, isVisible } = useScrollAnimation({ 
              threshold: 0.1,
              rootMargin: "0px 0px -100px 0px"
            });
            
            return (
              <a 
                key={index} 
                href={category.url}
                ref={ref as React.RefObject<HTMLAnchorElement>}
                className={`group relative overflow-hidden rounded-lg h-80 flex items-end justify-center text-center transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 w-full h-full bg-black opacity-30 group-hover:opacity-40 transition-opacity z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-20 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
                  <h3 className="text-xl font-semibold text-white mb-1 font-lora">{category.name}</h3>
                  <p className="text-thrift-gray/90 text-sm">{category.count}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
