import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h3 className="font-semibold">JavaScript</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h3 className="font-semibold">React</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h3 className="font-semibold">Node.js</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h3 className="font-semibold">TypeScript</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;