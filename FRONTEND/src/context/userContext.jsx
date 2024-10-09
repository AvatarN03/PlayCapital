import { createContext, useEffect, useState } from "react";


export const userContext = createContext();


export default function userContextProvider({children}){

    const [auth, setAuth] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('Playtoken');
        if (token) {
          // Fetch user from backend to validate token
          const fetchUser = async () => {
            try {
              const response = await fetch(`${import.meta.env.VITE_API_URI}/api/user`, {
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
    
              console.log("dada", response);
              const data = await response.json();
              console.log("hi0");
              console.log(data);
              
              
              console.log("hi1");
              if (data.user) {
                setAuth(data);
              }
              console.log("hi2");
              
            } catch (error) {
              console.error('Failed to fetch user', error);
            }
          };
          fetchUser();
        }
      }, []);
    

    return <userContext.Provider value={{auth, setAuth}}>
        {children}
    </userContext.Provider>
}