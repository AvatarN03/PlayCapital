import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup';
import { Link } from 'react-router-dom';

const Authenticate = () => {
  const [logsig, setLogSig] = useState(false);

  return (
    <section className='auth_bg grid place-content-center min-h-screen w-[100vw] transition-transform duration-150 ease-in'>
      <div className="z-20 ">
      <h1 className='font-bold block sm:hidden tracking-wide bg-slate-400 p-5 rounded-xl -mb-4 z-30 relative text-white text-xl sm:text-2xl md:text-3xl '>{
        logsig? "Sign Up - Register Here": "Welcome Back"}</h1>

        {
          logsig ? <Login setLogSig={setLogSig} /> : <Signup setLogSig={setLogSig} />}
      </div>
      <Link className='rounded-md p-2 bg-neutral-200 text-gray-700 fixed right-4 bottom-4' to={"/"}>Return Home</Link >
    </section>
  )
}

export default Authenticate