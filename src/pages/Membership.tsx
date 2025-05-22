
import React from 'react';
import Layout from '../components/Layout';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Membership = () => {
  const plans = [
    {
      name: "Standard",
      price: "₹1,499",
      duration: "per month",
      features: [
        "Access to gym equipment",
        "Basic fitness assessment",
        "Locker room access",
        "Free parking",
      ],
      isPopular: false
    },
    {
      name: "Gold",
      price: "₹2,499",
      duration: "per month",
      features: [
        "Everything in Standard",
        "Access to all group classes",
        "One personal training session/month",
        "Towel service",
        "Nutrition consultation"
      ],
      isPopular: true
    },
    {
      name: "Platinum",
      price: "₹3,999",
      duration: "per month",
      features: [
        "Everything in Gold",
        "Unlimited personal training",
        "Premium locker",
        "Sauna & steam room access",
        "Massage therapy sessions",
        "Personalized workout programs"
      ],
      isPopular: false
    }
  ];

  return (
    <Layout>
      <div className="bg-gym-dark min-h-[300px] flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: "url('https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1698&q=80')",
                 backgroundPosition: "center",
                 backgroundSize: "cover"
               }}>
          </div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-display mb-4">MEMBERSHIP <span className="text-gold">PLANS</span></h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Choose the perfect plan to achieve your fitness goals
          </p>
        </div>
      </div>

      <section className="py-20 bg-gym-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl relative ${
                  plan.isPopular ? 'border-2 border-gold transform md:scale-105 z-10' : 'border border-gray-100'
                }`}
              >
                {plan.isPopular && (
                  <div className="bg-gold text-gym-dark py-1 px-4 font-bold absolute top-0 right-0 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-gym-dark">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gold">{plan.price}</span>
                    <span className="text-gym-gray">/{plan.duration}</span>
                  </div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check size={18} className="text-gold mr-2" />
                        <span className="text-gym-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Membership Benefits</h2>
            <p className="mb-8 text-gym-gray">
              All our memberships include access to our state-of-the-art facility with professional equipment, 
              clean locker rooms, and a motivating environment. Our expert trainers are dedicated to helping 
              you achieve your fitness goals, whether you're just starting out or are a seasoned athlete.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[30%]">
                <h3 className="font-bold text-xl mb-2 text-gold">No Lock-in Contracts</h3>
                <p className="text-gym-gray">Flexible membership options with no long-term commitments</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[30%]">
                <h3 className="font-bold text-xl mb-2 text-gold">Free Fitness Assessment</h3>
                <p className="text-gym-gray">Personalized evaluation to help establish your fitness goals</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[30%]">
                <h3 className="font-bold text-xl mb-2 text-gold">24/7 Gym Access</h3>
                <p className="text-gym-gray">Work out on your schedule with our secure facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Membership;
