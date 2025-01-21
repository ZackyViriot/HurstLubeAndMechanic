import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-red-600 shadow-lg' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="text-white text-xl font-bold"
              aria-label="Hurst Lube & Mechanic - Home"
            >
              Hurst Lube & Mechanic
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a 
                href="#services" 
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                aria-label="View our services"
              >
                Services
              </a>
              <a 
                href="#pricing" 
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                aria-label="View our pricing"
              >
                Pricing
              </a>
              <a 
                href="#reviews" 
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                aria-label="Read customer reviews"
              >
                Reviews
              </a>
              <a 
                href="#contact" 
                className="bg-white text-red-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                aria-label="Contact us"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-red-600 shadow-lg">
          <a
            href="#services"
            className="block text-white hover:bg-red-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#pricing"
            className="block text-white hover:bg-red-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#reviews"
            className="block text-white hover:bg-red-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reviews
          </a>
          <a
            href="#contact"
            className="block text-white hover:bg-red-700 px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 