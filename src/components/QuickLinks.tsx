
import React from 'react';
import { ShoppingBag, Gift, Calendar, Archive } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const QuickLinks = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const links = [
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Shop Now",
      description: "Browse our curated collections",
      url: "#"
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Donate",
      description: "Give your clothes a new life",
      url: "#"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "New Arrivals",
      description: "Fresh additions to our collection",
      url: "#"
    },
    {
      icon: <Archive className="h-8 w-8" />,
      title: "Vintage Picks",
      description: "Timeless classics and rare finds",
      url: "#"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-thrift-offwhite">
      <div 
        ref={ref as React.RefObject<HTMLDivElement>} 
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              className={`flex flex-col items-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="p-3 rounded-full bg-thrift-beige text-thrift-green mb-4">
                {link.icon}
              </div>
              <h3 className="text-xl font-semibold text-thrift-green mb-2 font-lora">{link.title}</h3>
              <p className="text-center text-gray-600">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
