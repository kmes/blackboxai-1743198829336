import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
        <p>© {new Date().getFullYear()} Full-Stack Developer Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;