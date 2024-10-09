import React, { useContext, useEffect } from 'react'
import { userContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

const { setAuth, auth } = useContext(userContext); // Destructure the setter from context
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
   
    localStorage.removeItem('Playtoken');
    
    
    setAuth({  });
    console.log(auth);
    
    
    
    navigate('/'); 
  }, [setAuth, navigate]);



  return (
    <section>
        <h1 className="text-4xl text-center">Logout is in Process ....</h1>
    </section>
  )
}

export default Logout