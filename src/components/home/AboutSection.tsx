
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gym-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-display font-bold mb-6 text-gym-dark">
              About <span className="text-gold">Golden Gym</span>
            </h2>
            <p className="text-gym-gray mb-6 text-lg">
              Golden Gym is Bihar's premier fitness destination, established with a passion for helping people transform their lives through fitness. For over 10 years, we've been helping the local community achieve their health and fitness goals.
            </p>
            <p className="text-gym-gray mb-6 text-lg">
              Our facility features a wide range of professional equipment, from free weights and machines for serious bodybuilders to cardio equipment and functional training areas for those just beginning their fitness journey.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded shadow text-center">
                <h3 className="text-gold text-4xl font-bold mb-2">500+</h3>
                <p className="text-gym-dark font-medium">Happy Members</p>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <h3 className="text-gold text-4xl font-bold mb-2">10+</h3>
                <p className="text-gym-dark font-medium">Certified Trainers</p>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <h3 className="text-gold text-4xl font-bold mb-2">15+</h3>
                <p className="text-gym-dark font-medium">Fitness Classes</p>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <h3 className="text-gold text-4xl font-bold mb-2">10+</h3>
                <p className="text-gym-dark font-medium">Years Experience</p>
              </div>
            </div>
            <Link to="/about" className="btn-primary">Learn More About Us</Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1637666068482-1e9819b51c71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Golden Gym Interior" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-gym-dark font-display text-xl font-bold">10+ YEARS</p>
                <p className="text-gym-dark font-medium">OF EXCELLENCE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
