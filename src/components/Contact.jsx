import React from 'react';

function Contact() {
  return (
    <section id='contact' className='py-20 bg-gray-200'>
      <div className='container mx-auto text-center px-4'>
        <h2 className='text-3xl font-bold'>Contact</h2>
        <p className='mt-4'>Feel free to reach out to me through the following platforms...</p>
        <div className='mt-8'>
          <a href='mailto:ananda@example.com' className='mx-2 text-blue-500'>
            Email
          </a>
          <a href='https://linkedin.com/in/ananda' className='mx-2 text-blue-500'>
            LinkedIn
          </a>
          <a href='https://github.com/ananda' className='mx-2 text-blue-500'>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
