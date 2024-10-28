import { ArrowUpward, Mail, Phone } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const screenTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};
export function Footer() {
  return (
    <footer className="w-full bg-[#5827B7] h-fit pt-2 rounded-sm relative">
      <div className="absolute bottom-4 right-4 rounded-3xl p-4 bg-rose-300 cursor-pointer" onClick={screenTop}><ArrowUpward/></div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0">         
        <h1 className="ml-4 text-2xl md:text-3xl  font-semibold tracking-wider heading text-red-300">PlayCaptial</h1>      
          
          <button
            type="button"
            className="rounded-md bg-slate-800 p-3 text-base font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" >
            <Link to="/features" className='tracking-wider' onClick={screenTop}>Explore</Link>
          </button>
        
      </div>
      <hr className="my-8 w-[88%] h-[5px] bg-[#BF4C8B] mx-auto" />

      {/* footer second part  */}
      <div className="mx-auto flex max-w-6xl justify-between  items-start sm:items-center px-2">
  {/* Address Section */}
  <div className=" pl-3 flex flex-col justify-around h-full  text-slate-300 md:leading-10">
    <p className=" text-base sm:text-lg font-semibold text-slate-200 mb-6 leading-6">Address:</p>
    <div className="text-sm sm:text-base font-extralight text-slate-300 md:leading-10 md:tracking-wider">
      <p>New BhediPada,</p>
      <p>Ambernath-West</p>
      <p>Thane, Maharashtra</p>
    </div>
    <phone className="text-sm sm:text-base">Phone: <Phone/> +91 9548412643354</phone>
    <mail  className="text-sm sm:text-base">mail: <Mail/> ternaplaycapital23@org.in</mail>
  </div>

  {/* Quick Links Section */}
  <div className="text-center">
    <p className=" text-base sm:text-lg font-semibold text-slate-100">Quick Links</p>
    <ul className="flex flex-col space-y-4 text-slate-300  py-3 px-1 sm:px-6 ">
      <li className='font-bold text-base sm:text-lg  rounded-sm border-2 px-2 hover:bg-slate-500 border-slate-500'>
        <Link onClick={screenTop} to={"/"}>Home</Link>
      </li>
      <li className='font-bold text-base sm:text-lg  rounded-sm border-2 px-2 hover:bg-slate-500 border-slate-500'>
        <Link onClick={screenTop} to={"/features"}>Features</Link>
      </li>
      <li className='font-bold text-base sm:text-lg  rounded-sm border-2 px-2 hover:bg-slate-500 border-slate-500'>
        <Link onClick={screenTop} to={"/blog"}>Blog</Link>
      </li>
      <li className='font-bold text-base sm:text-lg  rounded-sm border-2 px-2 hover:bg-slate-500 border-slate-500'>
        <Link onClick={screenTop} to={"/about"}>About</Link>
      </li>
      <li className='font-bold text-base sm:text-lg  rounded-sm border-2 px-2 hover:bg-slate-500 border-slate-500'>
        <Link>FAQ</Link>
      </li>
    </ul>
  </div>
  
</div>

      <p className='text-center text-white text-sm border-t-2 tracking-widest border-[#BF4C8B] pt-3'> &copy; CopyRights @ 2024 by PlayCapital | All Rights Reserved</p>
    </footer>
  )
}
