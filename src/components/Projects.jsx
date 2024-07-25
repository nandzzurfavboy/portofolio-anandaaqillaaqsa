import React from 'react';

function Projects() {
  return (
    <section id='projects' className='py-20 bg-gray-200'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
          {/* Card Project 1 */}
          <div className='bg-white p-6 shadow-md rounded-lg'>
            <h3 className='text-xl font-bold'>Project 1</h3>
            <p className='mt-2'>Description of project 1.</p>
          </div>
          {/* Card Project 2 */}
          <div className='bg-white p-6 shadow-md rounded-lg'>
            <h3 className='text-xl font-bold'>Project 2</h3>
            <p className='mt-2'>Description of project 2.</p>
          </div>
          {/* Card Project 3 */}
          <div className='bg-white p-6 shadow-md rounded-lg'>
            <h3 className='text-xl font-bold'>Project 3</h3>
            <p className='mt-2'>Description of project 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
