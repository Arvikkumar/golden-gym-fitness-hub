
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const MembershipSection = () => {
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
    <section className="py-20 bg-gym-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Membership <span className="text-gold">Plans</span></h2>
          <p className="section-subtitle">
            Choose the perfect plan to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl relative ${
                plan.isPopular ? 'border-2 border-gold transform scale-105 z-10' : 'border border-gray-100'
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
                <Link 
                  to="/membership" 
                  className={`block w-full py-3 px-4 text-center font-bold rounded-md transition-colors duration-300 ${
                    plan.isPopular 
                      ? 'bg-gold text-gym-dark hover:bg-gold-dark' 
                      : 'bg-gym-dark text-white hover:bg-opacity-90'
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gym-gray mb-4">
            Looking for corporate memberships or special packages?
          </p>
          <Link to="/contact" className="text-gold font-medium hover:underline text-lg">
            Contact us for custom quotes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
