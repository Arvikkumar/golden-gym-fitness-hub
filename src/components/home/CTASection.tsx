
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gym-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: "url('https://www.transparenttextures.com/patterns/diamond-eyes.png')"
             }}>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">
            START YOUR FITNESS JOURNEY <span className="text-gold">TODAY</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Take the first step towards a healthier, stronger you. Join Golden Gym and experience the difference professional equipment and expert guidance can make.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/membership" className="btn-primary text-lg">
              View Membership Plans
            </Link>
            <Link to="/services" className="btn-secondary text-lg">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
