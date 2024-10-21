import React, { useState } from 'react'
import { Google } from "@mui/icons-material"
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'
import { loginCatch, loginInitial } from '../../utls/features'

const Login = ({ setLogSig }) => {
  const [login, setLogin] = useState(loginInitial);





  const loginChange = (e) => {
    setLogin(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCatch(login, setLogin);
  };







  return (
    <div className='bg-[#4e2de4e8] rounded-md w-full flex h-fit p-2 justify-center '>
      <div className="auth_comp_ui p-4 rounded-md w-full sm:w-[50%] ">
        <form action="" onSubmit={handleSubmit}>
          <Input label="Username" value={login.username} name="username" place="Enter the Username ..." onChange={loginChange} />
          <Input label="Password" value={login.password} type='password' name="password" place="Enter the Password " onChange={loginChange} />
          <Button name="Login" />
        </form>
        <p className='text-center text-slate-300 font-lights'>OR</p>
        <button className='bg-white text-black w-full p-3 rounded-lg' onClick={() => setLogSig(false)}>SignUp</button>
      </div>
      <div className="text-center flex-col justify-between p-6 hidden sm:flex w-[50%]">
        <div className="">
          <h1 className='font-bold tracking-wide text-white text-xl sm:text-2xl md:text-3xl mb-12'>Welcome Back</h1>
          <p className='text-slate-200 tracking-wider font-light'>Login to get the game and blog access</p>
        </div>
        <hr className='mx-auto h-[5px] w-[80%] bg-red-200 rounded-full' />
        <div className="flex justify-center gap-3 text-slate-200 mb-8 items-center">
          <p className='tracking-wider'>Regiser with </p>
          <Link className='p-3 bg-white/40 rounded-full'><Google /></Link>
        </div>
      </div>

    </div>
  )
}

export default Login