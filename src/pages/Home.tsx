
import React from 'react';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import MembershipSection from '../components/home/MembershipSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import LocationSection from '../components/home/LocationSection';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <MembershipSection />
      <TestimonialsSection />
      <LocationSection />
      <CTASection />
    </>
  );
};

export default Home;
