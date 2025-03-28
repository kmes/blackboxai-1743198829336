import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Senior Full-Stack Developer</h1>
        <p className="text-xl mb-8">15+ years of experience building web applications</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;