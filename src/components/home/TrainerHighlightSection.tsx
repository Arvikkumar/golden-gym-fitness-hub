
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TrainerHighlightSection = () => {
  return (
    <section className="py-20 bg-gym-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Meet Our <span className="text-gold">Expert Trainer</span></h2>
          <p className="section-subtitle">
            Learn from professionals who are dedicated to helping you achieve your fitness goals
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
                alt="Vikas Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-2 text-gym-dark">Vikas Kumar</h3>
              <p className="text-gold text-xl mb-6">Head Trainer & Gymnastics Specialist</p>
              <p className="text-gym-gray mb-6">
                Vikas Kumar brings over 10 years of experience in fitness and gymnastics to Golden Gym. 
                He specializes in helping clients achieve their physical potential through a combination of 
                traditional bodybuilding techniques and gymnastics-inspired training. His approach has 
                transformed countless physiques and helped athletes reach new levels of performance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gym-light p-4 rounded-lg">
                  <h4 className="font-bold text-gym-dark mb-2">Specialties</h4>
                  <ul className="text-gym-gray space-y-1">
                    <li className="flex items-center">
                      <ArrowRight size={16} className="text-gold mr-2" /> Bodybuilding
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="text-gold mr-2" /> Gymnastics
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="text-gold mr-2" /> Strength Training
                    </li>
                  </ul>
                </div>
                <div className="bg-gym-light p-4 rounded-lg">
                  <h4 className="font-bold text-gym-dark mb-2">Certifications</h4>
                  <ul className="text-gym-gray space-y-1">
                    <li className="flex items-center">
                      <ArrowRight size={16} className="text-gold mr-2" /> CSCS
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="text-gold mr-2" /> Gymnastics Instructor
                    </li>
                    <li className="flex items-center">
                      <ArrowRight size={16} className="text-gold mr-2" /> Nutrition Expert
                    </li>
                  </ul>
                </div>
              </div>
              
              <Link to="/trainers" className="btn-primary self-start">
                Meet All Trainers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerHighlightSection;
