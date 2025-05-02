
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Browse & Discover",
      description: "Explore our curated collection of pre-loved items, each carefully selected and verified for quality."
    },
    {
      number: "02",
      title: "Find Your Style",
      description: "Filter by size, price, brand, and condition to find exactly what you're looking for."
    },
    {
      number: "03",
      title: "Purchase Sustainably",
      description: "Buy with confidence knowing you're giving items a second life and reducing fashion waste."
    },
    {
      number: "04",
      title: "Donate Your Items",
      description: "Complete the circle by donating your own pre-loved clothing and accessories."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-thrift-green font-lora mb-4">How ThriftNest Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our community of conscious consumers and make a difference with every purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-2 -top-2 text-5xl font-bold text-thrift-orange opacity-15 font-lora">
                {step.number}
              </div>
              <div className="pl-4 pt-8 relative">
                <h3 className="text-xl font-semibold text-thrift-green font-lora mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#D35400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
