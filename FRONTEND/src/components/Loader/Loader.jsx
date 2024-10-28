import React from 'react'
import './loader.css';
import { Circle } from '@mui/icons-material';

const Loader = () => {
  return (
    <div className="w-full gap-5 min-h-screen fixed top-0 right-0 bg-transparent left-0 bottom-0 flex justify-center items-center">
      Loading 
      <Circle/>
      <Circle/>
      <Circle/>
    </div>
  )
}

export default Loader