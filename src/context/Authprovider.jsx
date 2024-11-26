import React, { createContext, useContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utiles/Localstorage'
export const AuthContext = createContext()

const Authprovider = ({children}) => {
  // localStorage.clear()
    const [userData, setUserData] = useState(null)
  
   useEffect(() => {
    setLocalStorage()
    const {employees} = getLocalStorage()
    setUserData(employees)
   }, [])
   
  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default Authprovider