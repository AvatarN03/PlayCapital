import React, { useContext, useEffect, useState } from 'react'
import { Button, styled, TextField, Tooltip } from "@mui/material"
import Logo from "../Logo/Logo"
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { userContext } from '../../context/userContext';
import {AddReaction} from '@mui/icons-material';


const Input = styled(TextField)`
margin: 20px 0;
font-size: 54px;

`
const loginInitial = {
  username: '',
  password: ''
}
const signInitial = {
  username: '', 
  email: '',
  password: '',
  avatar:null
}


const Authorization = () => {
  const [logsig, setLogSig] = useState(true);
  const [login, setLogin] = useState(loginInitial);
  const [signup, setSignUp] = useState(signInitial);
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState('');
  const data = useContext(userContext)

  const handleLayout = () => {
    setLogSig(prev => !prev);
  }

  const handleFile =(e)=>{
    setSignUp((prev)=>({
      ...prev,
      avatar: e.target.files[0]
    }))
  }




  const SignUpChange = (e) => {
    setSignUp(prev => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(signup);


  }
  const LoginChange = (e) => {
    setLogin(prev => ({ ...prev, [e.target.name]: e.target.value }));


  }

  const loginCatch = async (e) => {
    e.preventDefault();
    console.log(login);

    const response = await axios.post(`${import.meta.env.VITE_API_URI}api/login`, login);
    if (response.data.isSuccess) {
      setError("");
      setMessage('Login successful!');
      
      console.log(response.data);
      console.log(response.data.user);
      data.setAuth(response.data)
      console.log(data.setAuth);
      localStorage.setItem('Playtoken', response.data.token);
      
      
      setTimeout(() => {
        setRedirect(true);
      }, 2000);

    }
    else {
      setError(response.data.error)
      setTimeout(()=>{
        setLogin(loginInitial)
        setError("")

      },1000)
    }




  }
  const signUpCatch = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', signup.username);
    formData.append('password', signup.password);
    formData.append('email', signup.email);
    if(signup.avatar){
      formData.append('avatar', signup.avatar);
    }
    try {
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      
        const response = await axios.post(`${import.meta.env.VITE_API_URI}api/signup`, formData,{
          headers: {
            'Content-Type':'multipart/form-data'  
          },
        });
        console.log(response);
        
        if (response.data.isSuccess) {
            setError(""); 
            setMessage('Signup successful!');
            setLogSig("true"); 
            
            
        } else {
            setError(response.data.error); // Ensure this is a string
            setTimeout(()=>{
              setError("")
            }, 2000)
            
        }
        setSignUp(signInitial);
    } catch (error) {
        setError(error.message || 'An error occurred');
        setTimeout(()=>{
          setError("")
        },2000) // Extract the message or provide a fallback
    }
}


  if (redirect) {
    return <Navigate to="/" />; // Redirect to homepage
  }






  return (
    <section className=' bg-center bg-cover h-fit sm:h-screen'   style={{ backgroundImage: "url('/assets/bg-3.jpg')" }}> 
      <h1 className='text-slate-300 px-3 py-5 text-3xl sm:text-5xl md:text-6xl'>{!logsig?"Hi, Register YourSelf" : "Hi, Welcome Back !!"}</h1>

          {error ?
            <div className="text-red-900 w-full my-3 sm:w-1/2 mx-auto text-center p-2 rounded  text-3xl  bg-white">{error}</div> : <div className="text-green-900 w-full sm:w-1/2 mx-auto text-center  rounded  text-3xl h-fit bg-white">{message}</div>
          }
      <div className="max-w-7xl mx-auto h-screen sm:h-fit  gap-5  grid grid-cols-9">
        <div className=" w-[70%] shadow-xl sm:p-12 my-5  mx-auto place-content-center   col-span-full  md:col-span-6 ">
          {logsig ?
            <div className=" bg-rose-300 rounded-xl p-3  shadow-primary text-black ">
              <h1 className='text-center my-3 text-3xl border-b-2 border-red-600 pb-4'>The Login Section</h1>
              
                <form action="" className='flex flex-col h-full' onSubmit={loginCatch}>

                  <Input id="standard-basic$1" label="Username"  variant="standard" name='username' onChange={(e) => LoginChange(e)} value={login.username}/>

                  <Input id="standard-basic$1" label="Password" name='password'  variant="standard" onChange={(e) => LoginChange(e)}  value={login.password}/>

                  <button className='w-full bg-blue-400 p-4 rounded-md my-3'>Login</button>

                </form>
              
              <p className='text-center my-4 '>OR <span className='text-sm underline'>Haven't Registered Yet?</span></p>

              <button className='w-full bg-slate-300 border-blue-500 rounded-md p-4' onClick={handleLayout} >Signup</button>

            </div>
            :
            <div className='flex flex-col  bg-rose-300 rounded-xl p-3  shadow-primary'>
          
          <h1 className='text-center my-3 text-3xl border-b-2 border-red-600 pb-4'>The SignUp Section</h1>
              <form action="" onSubmit={signUpCatch} className='flex flex-col'>
                <div className="flex justify-center items-center bg-rose-200 rounded-full p-4 ">
                  <label htmlFor="avatar" className='w-full h-full text-center cursor-pointer'>Add Avatar
                    <AddReaction />
                    <input type="file" name="avatar" id="avatar" className='hidden' onChange={handleFile}/>

                  </label>
                </div>
                <Input id="standard-basic$1" label="Username" variant="standard"   
                   name="username" value={signup.username} onChange={(e) => SignUpChange(e)} />

                <Input id="standard-basic$1" label="Email" type="email" value={signup.email} variant="standard"  name='email' onChange={(e) => SignUpChange(e)} />

                <Input id="standard-basic$1" type="password" label="Password" value={signup.password} variant="standard"  name="password" onChange={(e) => SignUpChange(e)} />

                <button className='w-full bg-slate-300 border-blue-500 rounded-md p-4 my-3'>Signup</button>
              </form>

              <p className='text-center my-4'>OR <span className='text-sm underline'>Already Have an Account?</span></p>

              <button className='w-full bg-blue-400 p-4 rounded-md' onClick={handleLayout}>Login</button>

            </div>
          }
        </div>
        <div className="hidden overflow-hidden md:block  md:col-span-3 min-h-1.5 my-auto sm:h-fit" >
          <img src="/assets/login.png" alt="" className='md:w-full md:h-full h-fit' />
        </div>

      </div>
    </section>
  )
}

export default Authorization
