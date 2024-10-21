import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { Google, Person } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { signInitial } from '../../utls/features'

const Signup = ({setLogSig}) => {
  const [signup, setSignUp] = useState(signInitial);





  const signUpChange = (e)=>{
    setSignUp(prev=> ({...prev, [e.target.name]:e.target.value}))
  }

  const handleFile =(e)=>{
    setSignUp((prev)=>({
      ...prev,
      avatar: e.target.files[0]
    }))
  }

  const signupCatch = ()=>{

  }





  return (
    <div className='bg-[#4e2de4e8] rounded-md min-w-[90%] flex h-fit p-2 justify-center '>
        <div className="auth_comp_ui p-6 rounded-md w-full sm:w-[50%] ">
          
            <form action="" onSubmit={signupCatch}>
              <div className="flex justify-center items-center gap-4">
                <h3 className='text-slate-200 tracking-wide font-light '>Upload your Avatar</h3>
                <label htmlFor="avatar" className='bg-[#9575D6] cursor-pointer rounded-xl p-4 px-8 flex justify-center items-center'>
                  <Person/>
                  <input type="file" name='avatar' id='avatar' className='hidden' onChange={handleFile}/>
                </label>
              </div>
            <Input label="Username" value={signup.username} name="username" place="Enter the Username ..."  onChange={signUpChange} />
            <Input label="Email" value={signup.email} type='email' name="email" place="Enter the Email.. " onChange={signUpChange}   />
            <Input label="Password" value={signup.password} type='password' name="password" place="Enter the Password "  onChange={signUpChange}  />
           <Button name="Signup" />
            </form>
            <p className='text-center text-slate-300 font-lights'>OR</p>
            <button className='bg-white text-black w-full p-3 rounded-lg' onClick={()=> setLogSig(true)}>Login</button>
        </div>
        <div className="text-center flex-col justify-between p-6 hidden sm:flex w-[50%]">
            <div className="">
            <h1 className='font-bold tracking-wide text-white text-xl sm:text-2xl md:text-3xl mb-12'>Sign Up - Register Here</h1>
            <p className='text-slate-200 tracking-wider font-light'>Enter your details below to create an account and get started</p>
            </div>
            <hr className='mx-auto h-[5px] w-[80%] bg-red-200 rounded-full'/>
            <div className="flex justify-center gap-3 text-slate-200 mb-8 items-center">
                <p className='tracking-wider'>Regiser with </p>
                <Link className='p-3 bg-white/40 rounded-full'><Google/></Link>
            </div>
        </div>

    </div>
  )
}

export default Signup