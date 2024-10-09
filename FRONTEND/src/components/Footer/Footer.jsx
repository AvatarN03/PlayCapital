import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="w-full bg-primary h-1/2 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0">
        <div className="inline-flex items-center">
          <svg
            width="40"
            height="46"
            viewBox="0 0 50 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
              fill="black"
            />
          </svg>
          <span className="ml-4 text-2xl font-bold heading">PlayCaptial</span>
        </div>
        <div className="hidden items-center md:inline-flex">
          <span className="text-xl font-medium text-black">Explore the Features</span>
          <button
            type="button"
            className="ml-2 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link to="/features"><img src="/assets/arrow-up.png" alt="" /></Link>
          </button>
        </div>
      </div>
      <hr className="my-8" />
      <div className="mx-auto flex max-w-6xl justify-between items-start">
  {/* Address Section */}
  <div className="flex-1 px-4 lg:px-0">
    <p className="max-w-sm text-base sm:text-lg font-bold">Address:</p>
    <div className="text-sm sm:text-base">
      <p>New BhediPada,</p>
      <p>Ambernath-West</p>
      <p>Thane, Maharashtra</p>
    </div>
  </div>

  {/* Quick Links Section */}
  <div className="flex-1 mb-8 lg:mb-0 px-4 text-center">
    <p className="mb-6 text-base sm:text-lg font-bold text-fourth">Quick Links</p>
    <ul className="flex flex-col space-y-4 text-[14px] text-third">
      <li className='font-bold text-lg'>
        <Link to={"/"}>Home</Link>
      </li>
      <li className='font-bold text-lg'>
        <Link to={"/about"}>About</Link>
      </li>
      <li className='font-bold text-lg'>
        <Link to={"/#services"}>Services</Link>
      </li>
      <li className='font-bold text-lg'>
        <Link to={"/#contact"}>Contact</Link>
      </li>
      <li className='font-bold text-lg'>
        <Link>FAQ</Link>
      </li>
    </ul>
  </div>

  {/* Social Links Section */}
  <div className="flex-1 mb-8 lg:mb-0 px-4 text-center ">
    <p className="mb-6 text-base sm:text-lg font-extrabold text-third">Social</p>
    <ul className="flex flex-col gap-3 items-center ">
      <li className='text-base sm:text-lg font-black text-fourth bg-third w-fit h-fit py-1 px-2 rounded'><Link>Instagram</Link></li>
      <li className='text-base sm:text-lg font-black text-fourth bg-third w-fit h-fit py-1 px-2 rounded'><Link>Facebook</Link></li>
      <li className='text-base sm:text-lg font-black text-fourth bg-third w-fit h-fit py-1 px-2 rounded'><Link>Twitter</Link></li>
      <li className='text-base sm:text-lg font-black text-fourth bg-third w-fit h-fit py-1 px-2 rounded'><Link>LinkedIn</Link></li>
      <li className='text-base sm:text-lg font-black text-fourth bg-third w-fit h-fit py-1 px-2 rounded'><Link>YouTube</Link></li>
    </ul>
  </div>
</div>

      <p className='text-center text-fourth text-sm border-t-2 border-fourth pt-3'> &copy; CopyRights @ 2024 by PlayCapital | All Rights Reserved</p>
    </footer>
  )
}
