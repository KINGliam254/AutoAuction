import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedListings from '../components/home/FeaturedListings';
import LiveAuctions from '../components/home/LiveAuctions';
import HowItWorks from '../components/home/HowItWorks';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedListings />
      <LiveAuctions />
      <HowItWorks />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;