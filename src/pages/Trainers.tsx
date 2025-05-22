import React from 'react';
import Layout from '../components/Layout';

const Trainers = () => {
  const trainers = [
    {
      name: "Vikas Kumar",
      role: "Head Trainer & Gymnastics Specialist",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      bio: "Vikas Kumar is our head trainer with over 10 years of experience in fitness and gymnastics. He specializes in helping clients achieve their physical potential through a combination of traditional bodybuilding techniques and gymnastics-inspired training. Vikas has worked with national-level athletes and helped transform countless physiques through his innovative approach to strength training.",
      specialties: ["Gymnastics", "Bodybuilding", "Strength Training", "Calisthenics", "Nutrition Planning"],
      certifications: ["Certified Strength and Conditioning Specialist", "Advanced Gymnastics Instructor", "Sports Nutrition Expert"]
    },
    {
      name: "Rajesh Singh",
      role: "Senior Personal Trainer",
      image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      bio: "Rajesh brings 8 years of personal training experience to Golden Gym. He specializes in hypertrophy training and has helped numerous clients build impressive physiques through scientifically-backed training methodologies. His attention to proper form and technique ensures maximum results with minimal injury risk.",
      specialties: ["Hypertrophy Training", "Bodybuilding", "Muscle Definition", "Contest Prep"],
      certifications: ["Certified Personal Trainer", "Bodybuilding Coach", "Nutrition Specialist"]
    },
    {
      name: "Amit Patel",
      role: "Strength & Conditioning Coach",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      bio: "With a background in competitive powerlifting, Amit specializes in helping clients build serious strength. His methodical approach to progressive overload has helped clients break through plateaus and reach new personal records in compound lifts.",
      specialties: ["Powerlifting", "Strength Development", "Power Training", "Athletic Performance"],
      certifications: ["Strength & Conditioning Specialist", "Powerlifting Coach", "Sports Performance Expert"]
    }
  ];

  return (
    <Layout>
      <div className="bg-gym-dark min-h-[300px] flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: "url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80')",
                 backgroundPosition: "center",
                 backgroundSize: "cover"
               }}>
          </div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-display mb-4">OUR <span className="text-gold">TRAINERS</span></h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Meet our team of expert fitness professionals
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Featured Trainer - Vikas Kumar */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="section-title">Featured <span className="text-gold">Trainer</span></h2>
              <p className="section-subtitle">
                Meet our head trainer who leads our team of fitness professionals
              </p>
            </div>

            <div className="bg-gym-light rounded-lg overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-[400px]">
                  <img 
                    src={trainers[0].image} 
                    alt={trainers[0].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-2 text-gym-dark">{trainers[0].name}</h3>
                  <p className="text-gold text-xl mb-4">{trainers[0].role}</p>
                  <p className="text-gym-gray mb-6">{trainers[0].bio}</p>
                  
                  <h4 className="font-bold mb-2 text-gym-dark">Specialties:</h4>
                  <ul className="mb-4 grid grid-cols-2 gap-2">
                    {trainers[0].specialties.map((specialty, idx) => (
                      <li key={idx} className="text-gym-gray">• {specialty}</li>
                    ))}
                  </ul>
                  
                  <h4 className="font-bold mb-2 text-gym-dark">Certifications:</h4>
                  <ul>
                    {trainers[0].certifications.map((cert, idx) => (
                      <li key={idx} className="text-gym-gray">• {cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Other Trainers */}
          <div>
            <h2 className="section-title text-center mb-16">Our <span className="text-gold">Training Team</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainers.slice(1).map((trainer, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-[300px]">
                    <img 
                      src={trainer.image} 
                      alt={trainer.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gym-dark">{trainer.name}</h3>
                    <p className="text-gold mb-4">{trainer.role}</p>
                    <p className="text-gym-gray mb-5">{trainer.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.slice(0, 4).map((specialty, idx) => (
                        <span key={idx} className="bg-gym-light text-gym-dark px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainers;
