import {Link } from 'react-router-dom'
import Button from '../component/Button';

const Landingpage = () => {
  return (
    <div className='h-screen text-white  py-32 px-10 font-light   landing-page'>
     <div className='flex justify-center lg:items-center '>
      <main className='flex flex-col mb-20 md:justify-start lg:justify-start lg:flex-row lg:mb-40'>
      <section className='mb-5 lg:px-40 leading-10'>
      <h1 className=' font-medium text-6xl'>Excellence in Education</h1>
      <p className=' text-base mt-4'>Having every student performing at their every 
      <strong className='font-medium'> BEST</strong></p>
     <Button props="Explore"
     className='bg-black bg-opacity-50 border-gray-100 text-white px-4 py-2 rounded-sm  hover:bg-white hover:text-black transition-colors mt-5'
     />
     </section>
     <section className='flex flex-row justify-center lg:flex-col gap-2'>
      <button className='bg-black bg-opacity-50 text-white py-2 w-20 rounded-sm border-gray-100 text-sm hover:bg-white hover:text-black transition-colors '>
       <Link to='/signup'>Sign Up</Link>
      </button>
      <button className='bg-black bg-opacity-50 text-white py-2 w-20 rounded-sm border-gray-100 text-sm hover:bg-white hover:text-black transition-colors '>
        <Link to='/login'>Login</Link>
        </button>
     </section>
      </main>
     </div>
      <footer className='flex flex-row gap-4 justify-end'>
        <Button props="About Us"
        className='bg-black bg-opacity-50 text-white py-2 px-4 w-30 rounded-sm border-gray-100 text-sm hover:bg-white hover:text-black transition-colors '
        />
        <Button props="Contact us"
        className='bg-black bg-opacity-50 text-white py-2 px-4 w-30 rounded-sm border-gray-100 text-sm hover:bg-white hover:text-black transition-colors '
        />
      </footer>
    </div>
  );
}

export default Landingpage;