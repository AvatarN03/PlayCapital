import React from 'react'
import { Link } from 'react-router-dom';

 const Logo = () => {
  return (
    <>
    <Link to={"/"} className='flex justify-center items-center' >
    <img className='hidden sm:block sm:w-14 md:w-16 lg:w-24 object-contain h-fit' src="./assets/logo.jpeg" alt="" />
    <h1 className='text-xl sm:text-2xl md:text-4xl font-semibold text-white font-serif'>Play Capital</h1>
    </Link>
    </>
  )
}

export default Logo;