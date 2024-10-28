import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup';
import { Link } from 'react-router-dom';

const Authenticate = () => {
  const [logsig, setLogSig] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  return (
    <section className='auth_bg grid place-content-center min-h-screen w-[100vw] transition-transform duration-150 ease-in'>
      <div className="z-20 w-full mx-auto ">
      <h1 className='font-medium sm:font-bold block sm:hidden tracking-wide w-fit bg-slate-400 bg-opacity-50 p-1 rounded-md -mb-4 ml-4 whitespace-nowrap z-30 relative text-white text-base md:text-3xl '>{
        !logsig? " Register Here": "Welcome Back"}</h1>

        {
          logsig ? <Login setLogSig={setLogSig} setMessage={setMessage} setError={setError} /> : <Signup setLogSig={setLogSig} setMessage={setMessage} setError={setError}  />}
      </div>
      <Link className='rounded-md p-2 bg-neutral-200 text-gray-700 fixed right-4 top-4' to={"/"}>Return Home</Link >
    </section>
  )
}

export default Authenticate