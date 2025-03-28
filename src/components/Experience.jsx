import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Senior Developer at TechCorp</h3>
            <p className="text-gray-600">2020 - Present</p>
            <p className="mt-2">Led frontend architecture and mentored junior developers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Full Stack Developer at WebSolutions</h3>
            <p className="text-gray-600">2015 - 2020</p>
            <p className="mt-2">Developed and maintained multiple web applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;