import { useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeDrawer();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-gray-800">FullStackDev</span>
            </div>
            <div className="flex items-center">
              <button 
                onClick={toggleDrawer}
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Drawer Menu */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 mt-16">
          <button 
            onClick={() => scrollToSection('skills')}
            className="block w-full text-left p-2 hover:bg-gray-100"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="block w-full text-left p-2 hover:bg-gray-100"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="block w-full text-left p-2 hover:bg-gray-100"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left p-2 hover:bg-gray-100"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div 
          onClick={closeDrawer}
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
        ></div>
      )}

      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;