
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Truck } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DonationInfo = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ 
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  });

  return (
    <section className="py-16 bg-thrift-green text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ${
              leftVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-lora mb-6">Give Your Clothes a Second Life</h2>
            <p className="text-thrift-gray/90 mb-8">
              Your pre-loved items can find a new home while helping reduce textile waste.
              We make it easy to donate with convenient pickup options and tax-deductible receipts.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-lora mb-4">What We Accept</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-thrift-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Gently used clothing in good condition
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-thrift-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Accessories, bags, and shoes
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-thrift-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Home décor and small household items
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-thrift-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Books and media in working condition
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-thrift-orange hover:bg-thrift-orange/90 text-white">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Pickup
              </Button>
              <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white">
                <Truck className="mr-2 h-4 w-4" />
                Find Drop-off Locations
              </Button>
            </div>
          </div>
          
          <div 
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`relative transition-all duration-1000 ${
              rightVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-thrift-beige rounded-lg p-8 relative z-10">
              <h3 className="text-2xl font-bold text-thrift-green font-lora mb-4">Donation Process</h3>
              <ol className="space-y-6">
                <li className="flex">
                  <span className="bg-thrift-orange h-6 w-6 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">1</span>
                  <div>
                    <h4 className="text-thrift-green font-semibold">Prepare your items</h4>
                    <p className="text-gray-600">Clean, fold, and pack your donations in a bag or box</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-thrift-orange h-6 w-6 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">2</span>
                  <div>
                    <h4 className="text-thrift-green font-semibold">Schedule pickup or drop-off</h4>
                    <p className="text-gray-600">Choose a convenient time and location</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-thrift-orange h-6 w-6 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">3</span>
                  <div>
                    <h4 className="text-thrift-green font-semibold">Receive a receipt</h4>
                    <p className="text-gray-600">Get a donation confirmation for tax deduction purposes</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-thrift-orange h-6 w-6 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">4</span>
                  <div>
                    <h4 className="text-thrift-green font-semibold">Create positive impact</h4>
                    <p className="text-gray-600">Your donations help others and reduce environmental waste</p>
                  </div>
                </li>
              </ol>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-thrift-orange/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationInfo;
