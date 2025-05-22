
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import MembershipSection from '../components/home/MembershipSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import LocationSection from '../components/home/LocationSection';
import TrainerHighlightSection from '../components/home/TrainerHighlightSection';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <TrainerHighlightSection />
      <MembershipSection />
      <TestimonialsSection />
      <LocationSection />
      <CTASection />
    </Layout>
  );
};

export default Home;
