// InputComponent.js
import React from 'react';

const Input = ({ label, name, value, type = "text", onChange, place="Enter Some Thing" }) => {
  return (
    <div className="rounded-lg text-slate-200 flex flex-col my-6">
      <label className='font-light mb-3'  htmlFor={name}>{label}</label>
      <input 
      required
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={place}
        className="bg-[#9575D6] text-base sm:text-xl md:text-2xl focus:bg-neutral-200 rounded-lg p-4 outline-none border-none "
      />
    </div>
  );
};

export default Input;
