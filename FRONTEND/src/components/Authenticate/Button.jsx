import React from 'react'

const Button = ({name}) => {
  return (
    <button className='rounded-xl p-3 bg-[rgb(127,51,189)] w-full block my-3 mt-14 text-slate-200 font-bold text-base sm:text-xl md:text-2xl hover:bg-[#7f33bda9]'>
        {name}
    </button>
  )
}

export default Button