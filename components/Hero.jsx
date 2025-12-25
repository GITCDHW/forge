import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          FORGE: Your Vision, Accelerated.
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 opacity-0 animate-fade-in-up animation-delay-300">
          Rapid MVP Development & Brand Kit Delivery to Launch Your Business Faster.
        </p>
        <p className="text-md sm:text-lg lg:text-xl font-normal mb-10 opacity-0 animate-fade-in-up animation-delay-600">
          Stop waiting. Start building. We craft functional MVPs and stunning brand identities in record time, so you can validate ideas and capture your market.
        </p>
      </div>
    </section>
  );
};

export default Hero;
