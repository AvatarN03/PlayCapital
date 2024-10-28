import { createContext, useContext, useEffect, useState } from "react";


export const userContext = createContext();


export default function userContextProvider({children}){

    const [auth, setAuth] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('Playtoken');
        if (token) {
          // Fetch user from backend to validate token
          const fetchUser = async () => {
            try {
              const response = await fetch(`${import.meta.env.VITE_API_URI}api/user`, {
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              const data = await response.json();
              if (data.user) {
                setAuth(data);
              }              
              
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

