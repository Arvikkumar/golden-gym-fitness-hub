
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gym-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="mb-6">
              <span className="text-gold text-3xl font-display tracking-wider">GOLDEN</span>
              <span className="text-white text-3xl font-display ml-1">GYM</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your premier fitness destination in Bihar, offering state-of-the-art equipment and expert training for all fitness levels.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-white hover:text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition-colors duration-300">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold transition-colors duration-300">Services</Link></li>
              <li><Link to="/membership" className="text-gray-300 hover:text-gold transition-colors duration-300">Membership Plans</Link></li>
              <li><Link to="/trainers" className="text-gray-300 hover:text-gold transition-colors duration-300">Our Trainers</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-gold transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Clock size={18} className="text-gold mr-2" />
                <div>
                  <span className="text-gray-300">Monday - Friday:</span>
                  <p className="text-white">5:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="text-gold mr-2" />
                <div>
                  <span className="text-gray-300">Saturday:</span>
                  <p className="text-white">6:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="text-gold mr-2" />
                <div>
                  <span className="text-gray-300">Sunday:</span>
                  <p className="text-white">8:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-gold mr-2 mt-1" />
                <span className="text-gray-300">FXG4+H58, Amarpura, Kopa Khurd, Bihar 801109, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gold mr-2" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-gold transition-colors duration-300">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gold mr-2" />
                <a href="mailto:info@goldengym.com" className="text-gray-300 hover:text-gold transition-colors duration-300">info@goldengym.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Golden Gym. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
