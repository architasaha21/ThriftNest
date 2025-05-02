
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import QuickLinks from '@/components/QuickLinks';
import Categories from '@/components/Categories';
import HowItWorks from '@/components/HowItWorks';
import DonationInfo from '@/components/DonationInfo';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <QuickLinks />
        <Categories />
        <HowItWorks />
        <FeaturedProducts />
        <DonationInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
