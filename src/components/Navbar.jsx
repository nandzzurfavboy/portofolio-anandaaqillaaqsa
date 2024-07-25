import React, { useState } from 'react';
import logo from '../assets/pict/nandzz-logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md py-4'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <div className='flex items-center'>
          <img src={logo} alt='Logo' className='w-8 h-8 mr-2' />
          <h1 className='text-2xl font-bold'>Nandzz.</h1>
        </div>
        <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          <button className='text-gray-700 focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              {isOpen ? <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' /> : <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />}
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto font-bold`}>
          <a href='#home' className='block md:inline-block mx-2 text-gray-700'>
            Home
          </a>
          <a href='#projects' className='block md:inline-block mx-2 text-gray-700'>
            Projects
          </a>
          <a href='#about' className='block md:inline-block mx-2 text-gray-700'>
            About
          </a>
          <a href='#contact' className='block md:inline-block mx-2 text-gray-700'>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
