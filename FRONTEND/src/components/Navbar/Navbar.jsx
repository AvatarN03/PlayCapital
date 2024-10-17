import React, { useContext, useState } from 'react'
import { Menu, Close } from '@mui/icons-material';
import Logo from '../Logo/Logo';
import { Link, NavLink } from 'react-router-dom';
import { userContext } from '../../context/userContext';
import { Avatar } from '@mui/material';
import { navItems } from '../../utls/features';



function Navbar() {

  const [menu, setMenu] = useState(false);
  const { auth, setAuth } = useContext(userContext);
  const [profile, setProfile] = useState(false);
  const handleMenu = () => {
    setMenu(prev => !prev)
  }

  return (
    <header className='sticky sm:static flex justify-between items-center nav px-3 py-5 lg:h-28 md:h-24 sm:h-20 h-14  z-30'>
      <Logo />
      <div className="flex justify-between items-center ">

        <nav className="hidden sm:block">
          <ul className='flex sm:gap-4 md:gap-12  justify-between items-center'>
            {navItems.map((nav) => (
              <li key={nav.title} className=' group transform'>
                <NavLink to={nav.url} className='flex p-2  text-sm justify-center  items-center '>
                  <p className='transition-all duration-300 ease-in-out relative py-1 sm:text-base md:text-lg  text-slate-300 group-hover:text-slate-50 0 after:absolute after:left-0 after:bottom-0 after:h-[1.8px] after:w-0 after:bg-rose-300 after:transition-all after:duration-300 after:ease group-hover:after:w-full group-hover:scale-110'>
                    {nav.title}
                  </p>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='flex justify-center items-center'>
        <Link to={'/about'} className='text-xs sm:text-base mx-2 block bg-neutral-100 px-2 py-[5px] sm:px-3 md:px-5 rounded-lg'>
          About
        </Link> 

        {Object.keys(auth).length ? (
          <div className='mx-8 border-white border-2 rounded-full relative cursor-pointer drop-shadow-lg ' onClick={() => setProfile(prev => !prev)}>
            <Avatar alt="User Avatar" src={auth ? auth.user.avatar : "https:400x600.in"} />

            <div className={` ${profile ? "opacity-100 block" : "opacity-0 hidden"} absolute top-10 right-0 w-[200px] bg-slate-400 p-5 rounded-md shadow-xl transition-all duration-150 ease-in-out`}>
              <div className="flex gap-4 flex-col">
                <img src={auth ? auth.user.avatar : "https:400x600.in"} alt="" className="w-10 h-10 rounded-full" />
                <p>{auth ? auth.user.username : 'User'}</p>
                <p>{auth ? auth.user.email : 'User'}</p>
                {/* <p>{auth? auth.score : 'Score: 950'}</p> */}
                <p>Score: 950</p>
                <Link to="/logout" className="text-rose-900 text-sm bg-rose-100 p-1 px-3 cursor-pointer">Logout</Link>
              </div>
            </div>


          </div>
        ) : (

          <Link to={'/authorization'} className='text-xs  mx-2 block bg-neutral-100 px-2 py-[5px] sm:px-3 md:px-5 rounded-lg'>
            <p className=' flex flex-col text-fourth '>
              <span className='font-semibold text-inherit'>Login/</span>
              <span className='underline font-medium'>SignUp</span>
            </p>
          </Link>

        )}



        <div className="relative">
          {/* Menu Button */}
          <div className="w-8 h-8 flex items-center cursor-pointer sm:hidden" onClick={handleMenu}>
            {menu ? (
              <Close style={{ color: "#eee" }} className="transition-transform duration-200 ease-in-out" />
            ) : (
              <Menu style={{ color: "#eee" }} className="transition-transform duration-200 ease-in-out" />
            )}
          </div>
        </div>

        {/* Menu */}
        <div
          className={`absolute top-full left-0 w-full  sm:hidden  backdrop-blur-3xl text-rose-300 bg-[#BF4C8B] bg-opacity-70 transition-all duration-300 ease-in z-[200px] 
      ${menu ? 'h-fit opacity-100 overflow-auto' : 'h-0 overflow-hidden opacity-0'}
    `}
        >
          <ul className=' w-full my-2 flex justify-between py-5 items-center '>
            {
              navItems.map((nav) => (
                <li key={nav.title} className=' mx-auto'>
                  <Link to={nav.url} className=' w-full h-fit  text-white'>

                    {nav.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>




    </header>
  )
}

export default Navbar