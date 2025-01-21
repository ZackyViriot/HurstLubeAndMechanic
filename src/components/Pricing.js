import React from 'react';

const services = [
  {
    name: 'Oil Change',
    description: 'Full synthetic oil change with filter',
    price: '$84',
    features: [
      'Up to 5 quarts of synthetic oil',
      'New oil filter',
      'Multi-point inspection',
      '20-minute service time',
    ],
    popular: true,
  },
  {
    name: 'Tire Services',
    description: 'Complete tire maintenance package',
    price: '$60',
    features: [
      'Tire rotation',
      'Wheel balancing',
      'Tire pressure check',
      'Tread depth inspection',
    ],
    popular: false,
  },
  {
    name: 'State Inspection',
    description: 'Complete vehicle inspection',
    price: '$25.50',
    features: [
      'Comprehensive safety check',
      'Emissions testing',
      'Brake inspection',
      'Light check',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Transparent Pricing
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="relative">
              <p className="text-xl text-gray-600 max-w-2xl">
                Competitive prices for quality service
              </p>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative animate-slide-up hover-lift ${
                service.popular ? 'border-red-600' : 'border-gray-200'
              } border-2 rounded-xl bg-white overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.popular && (
                <div className="absolute top-0 right-0">
                  <div className="text-xs font-semibold text-white px-3 py-1 bg-red-600 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-5xl font-extrabold text-red-600">
                    {service.price}
                  </span>
                </div>

                <ul className="mt-8 space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`block w-full text-center px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 ${
                      service.popular
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-gray-800 hover:bg-gray-900'
                    } transform hover:-translate-y-1 hover:shadow-lg`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center animate-fade-in">
          <p className="text-gray-600">
            * Prices may vary based on vehicle make and model. Contact us for detailed pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 