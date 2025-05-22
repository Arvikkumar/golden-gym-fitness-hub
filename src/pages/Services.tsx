
import React from 'react';
import Layout from '../components/Layout';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Weightlifting",
      description: "Our weightlifting area features premium equipment for both beginners and advanced athletes. With multiple squat racks, bench press stations, and a comprehensive range of free weights, you'll have everything you need for strength training and muscle building.",
      image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      benefits: ["Professional grade equipment", "Form guidance from trainers", "Specialized weightlifting platforms", "Competition preparation coaching"]
    },
    {
      title: "Cardio Training",
      description: "Our cardio section features the latest treadmills, ellipticals, rowing machines, and exercise bikes. Whether you're looking to improve your cardiovascular health, lose weight, or enhance your endurance, our cardio equipment will help you reach your goals.",
      image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      benefits: ["Latest cardio equipment", "Heart rate monitoring", "Personalized cardio programs", "Interval training guidance"]
    },
    {
      title: "Group Classes",
      description: "Join our energizing group fitness classes led by certified instructors. From high-intensity interval training to strength conditioning, our diverse schedule offers something for everyone, all in a motivating environment.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1675&q=80",
      benefits: ["Variety of class styles", "Certified instructors", "Scheduled sessions", "All fitness levels welcome"]
    },
    {
      title: "Personal Training",
      description: "Get personalized training plans and one-on-one guidance from our expert personal trainers. Our trainers will help you achieve your specific fitness goals through customized workout routines and nutrition advice.",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      benefits: ["One-on-one attention", "Customized training plans", "Regular progress assessments", "Nutritional guidance"]
    }
  ];

  return (
    <Layout>
      <div className="bg-gym-dark min-h-[300px] flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: "url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80')",
                 backgroundPosition: "center",
                 backgroundSize: "cover"
               }}>
          </div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-display mb-4">OUR <span className="text-gold">SERVICES</span></h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive fitness solutions to help you achieve your goals
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-24 last:mb-0 items-center`}
            >
              <div className="w-full md:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gym-dark">{service.title}</h2>
                <p className="text-gym-gray mb-6">{service.description}</p>
                <h3 className="text-xl font-bold mb-3 text-gold">Benefits</h3>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight size={18} className="text-gold mr-2 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
