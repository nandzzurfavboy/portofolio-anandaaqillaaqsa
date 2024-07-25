import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-gray-100 text-gray-900'>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
