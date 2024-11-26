import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utiles/Localstorage'
import { AuthContext } from './context/Authprovider'
import { data } from 'autoprefixer'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] =useContext(AuthContext)
  // console.log(auth.employees);
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData?.data); // Use optional chaining
    }
  }, []);
  


  const handleLogin = (email,password)=>{
    if(email === 'admin@me.com' && password == '123'){
   setUser('admin')
   localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
   else if(userData){
    const employee = userData.find((e)=>email == e.email && e.password == password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data: employee}))
    }
    }

    else{
      alert("Invalid Crendtanils")
    }
  }


  
  
  return (
    <>
    {!user ?   <Login handleLogin={handleLogin}/> : ''}
  
   {user == 'admin' ? <AdminDashboard changeUser ={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser ={setUser} LoginData={loggedInUserData} /> : null) }
    </>
  )
}

export default App