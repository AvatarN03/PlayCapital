import React from 'react'
import { Link } from 'react-router-dom';

 const Logo = () => {
  return (
    <>
    <Link to={"/"}>
    <h1 className='text-xl sm:text-2xl md:text-4xl font-semibold text-white font-serif'>Play Capital</h1>
    </Link>
    </>
  )
}

export default Logo;