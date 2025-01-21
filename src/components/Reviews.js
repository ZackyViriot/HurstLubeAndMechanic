import React, { useState, useEffect } from 'react';

const reviews = [
  {
    name: "Bianca Pena",
    rating: 5,
    text: "Recommending this place to anyone and everyone that needs quality and honest service for their vehicles. We brought in our Honda civic first for oil and transmission fluid change, then after a really bad curb check warped our wheel baring...",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Daniel Clarke",
    rating: 5,
    text: "I have been coming here for a few years to do my oil change and have always had a positive experience! The workers are friendly and get the job done fast. Very competitive prices and comfortable couches to wait on. Hassan was so friendly and welcoming also...",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "John Novads",
    rating: 5,
    text: "Went here for the first time after my sister told me about them. The price was amazing, I'm used to paying $94 for a full synthetic oil change but here for a full synthetic oil change and an inspection was $84. The guys there were awesome...",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Surica Flores",
    rating: 5,
    text: "This was my first time coming here due to being new to the area. I asked the shop manager Anthony if he was able to do my diesel F250 oil change, balance all the tires and rotate them, and state inspection. He said it could be done but...",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Pratap Malla",
    rating: 5,
    text: "Fast and very friendly service. Anthony the manager is very friendly. I drive a white Nissan Rogue. He remembers everything about my car. The two guys working on the oil change are super fast. Best place in Hurst... Oh yeah, good price too.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`h-5 w-5 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            } transition-colors duration-300`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Customer Reviews
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="relative">
              <p className="text-xl text-gray-600 max-w-2xl">
                See what our customers are saying about us
              </p>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="max-w-3xl mx-auto h-[300px] relative">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  currentIndex === index 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : 'opacity-0 translate-x-8 -z-10'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 truncate">
                        {review.name}
                      </h3>
                      <StarRating rating={review.rating} />
                      <div className="mt-4 relative">
                        <svg
                          className="absolute -top-3 -left-4 w-8 h-8 text-gray-200 transform -rotate-12"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-lg text-gray-600 italic relative z-10 line-clamp-4">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:-translate-x-1"
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:translate-x-1"
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-gray-600'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 