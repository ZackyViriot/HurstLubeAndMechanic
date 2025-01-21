import React from 'react';
import heroImage from '../photos/Hustlubemechanicdemo.jpg';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background image with overlay and parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transformOrigin: 'center center',
          transition: 'transform 0.5s ease-out',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="block transform hover:scale-105 transition-transform duration-300">
              Reliable Auto
            </span>
            <span className="block text-red-400 transform hover:scale-105 transition-transform duration-300 delay-100">
              Repair Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '300ms' }}>
            Professional service you can trust, with over 20 years of experience in automotive care
          </p>
          <div className="space-x-4 animate-slide-up" style={{ animationDelay: '600ms' }}>
            <a
              href="#services"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="inline-block bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-red-600 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  );
};

export default Hero; 