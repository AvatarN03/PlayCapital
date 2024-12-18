import React, { useContext, useState } from 'react'
import { Google } from "@mui/icons-material"
import Input from './Input'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import {  loginInitial } from '../../utls/features'
import { userContext } from '../../context/userContext'
import axios from 'axios'
import { CircularProgress } from '@mui/material'

const Login = ({ setLogSig}) => {
  const [login, setLogin] = useState(loginInitial);
  const data = useContext(userContext)
  const [message, setMessage] = useState("");
  const [process, setProcess] = useState(false);
  const navigate = useNavigate();





  const loginChange = (e) => {
    setLogin(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const loginCatch = async (e)=>{
    e.preventDefault();
    setProcess(true);
    const headers = { 'Content-Type': 'application/json' };
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URI}api/login`, login,{ headers});
    if (response.data.isSuccess) {
      
      setMessage(response.data.msg);
      data.setAuth(response.data)
      localStorage.setItem('Playtoken', response.data.token);
      
      
      
      setTimeout(() => {
        navigate("/")
      }, 1000);

    }
    else {
      setMessage(response.data.msg)
      setTimeout(()=>{
        setLogin(loginInitial)
        setMessage("try again ..")

      },1000)
    }
    setProcess(false);
    } catch (error) {
      
      console.log(error);
      setMessage(error)
      setProcess(false);
      
    }
   
    
    
  }



 



  return (
    <div className='bg-[#4e2de4e8] rounded-md w-full flex h-fit p-2 justify-center '>
      <div className="auth_comp_ui p-4 rounded-md w-full sm:w-[50%] ">
        <form action="" onSubmit={loginCatch}>
          <Input label="Username" value={login.username} name="username" place="Enter the Username ..." onChange={loginChange} />
          <Input label="Password" value={login.password} type='password' name="password" place="Enter the Password " onChange={loginChange} />
          {message && <p className="text-red-500 text-sm text-center">{message}</p>}
          <div className="flex justify-center items-center my-3">{process ? <CircularProgress  sx={{color:"red"}}/> :<Button name="Login" />}</div>
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