
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Member since 2019",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Golden Gym completely transformed my physique. The trainers are knowledgeable and the equipment is top-notch. I've gained 15 kg of muscle in just a year!",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Member since 2018",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      quote: "As a competitive bodybuilder, I need a gym that understands my needs. Golden Gym has everything I require for my training regimen.",
      rating: 4
    },
    {
      name: "Sanjay Sharma",
      role: "Member since 2021",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      quote: "The personal training with Vikas Kumar has transformed my body composition. His gymnastics-inspired workouts have given me strength I never thought possible.",
      rating: 5
    }
  ];

  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        size={18} 
        className={`${index < count ? 'text-gold' : 'text-gray-300'}`}
        fill={index < count ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our <span className="text-gold">Members Say</span></h2>
          <p className="section-subtitle">
            Real stories from our members who have transformed their bodies and lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-gold transition-all duration-300"
            >
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gym-gray mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gym-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gym-gray">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
