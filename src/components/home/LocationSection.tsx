
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-20 bg-gym-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Find <span className="text-gold">Us</span></h2>
          <p className="section-subtitle">
            Visit our state-of-the-art facility in Kopa Khurd, Bihar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gym-dark">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={24} className="text-gold mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-gym-dark mb-1">Address</h4>
                  <p className="text-gym-gray">FXG4+H58, Amarpura, Kopa Khurd, Bihar 801109, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="text-gold mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-gym-dark mb-1">Phone</h4>
                  <p className="text-gym-gray">
                    <a href="tel:+919876543210" className="hover:text-gold">+91 98765 43210</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={24} className="text-gold mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-gym-dark mb-1">Email</h4>
                  <p className="text-gym-gray">
                    <a href="mailto:info@goldengym.com" className="hover:text-gold">info@goldengym.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={24} className="text-gold mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-gym-dark mb-1">Opening Hours</h4>
                  <p className="text-gym-gray mb-1">Monday - Friday: 5:00 AM - 10:00 PM</p>
                  <p className="text-gym-gray mb-1">Saturday: 6:00 AM - 8:00 PM</p>
                  <p className="text-gym-gray">Sunday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.728139333423!2d84.89059191494574!3d25.521520683746477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1ff74b27b96ad%3A0xb9b6a613e736de6f!2sAmarpura%2C%20Kopa%20Khurd%2C%20Bihar%20801109%2C%20India!5e0!3m2!1sen!2sus!4v1653992727417!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Golden Gym Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
