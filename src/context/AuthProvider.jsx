import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext= createContext()

const AuthProvider = ({children}) => {
  
  // localStorage.clear()

   const [userData, setUserData] = useState(null)

   useEffect(() => {
    const localData = getLocalStorage();
    
    // Only set default data if nothing is in localStorage
    if (!localData || !localData.employees) {
      setLocalStorage(); // set default employee data
    }
  
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);
  
   

  return (
    <div>
       <AuthContext.Provider value={[userData,setUserData]}>
       {children}
       </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
