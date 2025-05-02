
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation({ once: true });

  return (
    <section className="bg-thrift-green text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-28">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl relative z-10 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-lora leading-tight">
            Sustainable Style<br />Starts Here
          </h1>
          <p className="text-lg md:text-xl mb-8 text-thrift-gray/90 max-w-lg">
            Discover pre-loved fashion that's kinder to the planet and your wallet. 
            Join the circular fashion movement with ThriftNest.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-thrift-orange hover:bg-thrift-orange/90 text-white px-8 py-6 text-lg">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-lg">
              Donate Items
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-gradient-to-l from-thrift-orange/20 to-transparent opacity-70"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-thrift-orange/10"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-thrift-orange/15"></div>
      </div>
    </section>
  );
};

export default HeroSection;
