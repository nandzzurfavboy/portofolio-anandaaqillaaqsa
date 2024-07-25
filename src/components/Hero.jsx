import React from 'react';

function Hero() {
  return (
    <section id='home' className='bg-blue-500 text-white h-screen flex items-center justify-center'>
      <div className='text-center px-4'>
        <h2 className='text-4xl md:text-6xl font-bold'>Hello, I'm Ananda Aqilla Aqsa</h2>
        <p className='mt-4 text-xl'>A Web Developer and Designer</p>
        <a href='#projects' className='mt-8 inline-block bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300'>
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
