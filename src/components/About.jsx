import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6">
            Passionate full-stack developer with 15+ years of experience building scalable web applications.
            Specialized in JavaScript technologies across the entire stack.
          </p>
          <p className="text-lg">
            When I'm not coding, I enjoy contributing to open source projects and mentoring junior developers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;