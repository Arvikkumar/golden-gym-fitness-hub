
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center mt-16">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 animate-fade-in">
          TRANSFORM <span className="text-gold">YOUR BODY</span> <br />
          TRANSFORM YOUR LIFE
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 animate-fade-in" style={{animationDelay: "0.2s"}}>
          Bihar's premier fitness destination offering top-quality equipment, expert trainers, and a motivating environment for all fitness levels.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <Link to="/membership" className="btn-primary text-lg">
            View Membership Plans
          </Link>
          <Link to="/services" className="btn-secondary text-lg">
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
