
import React from 'react';
import { Dumbbell, Weight, Users, User } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Dumbbell size={48} className="text-gold mb-4" />,
      title: "Professional Equipment",
      description: "State-of-the-art weightlifting and cardio equipment for all your fitness needs."
    },
    {
      icon: <Weight size={48} className="text-gold mb-4" />,
      title: "Specialized Training",
      description: "Focused programs for bodybuilders and serious weightlifters."
    },
    {
      icon: <Users size={48} className="text-gold mb-4" />,
      title: "Group Classes",
      description: "Energetic group sessions led by certified fitness instructors."
    },
    {
      icon: <User size={48} className="text-gold mb-4" />,
      title: "Personal Training",
      description: "Customized one-on-one training sessions to achieve your fitness goals."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose <span className="text-gold">Golden Gym</span></h2>
          <p className="section-subtitle">
            We provide everything you need to transform your body and reach your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center hover:border-gold transition-all duration-300"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gym-dark">{feature.title}</h3>
              <p className="text-gym-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
