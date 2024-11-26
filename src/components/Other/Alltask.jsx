import React, { useContext } from 'react'
import { AuthContext } from '../../context/Authprovider'

const Alltask = () => {

    const [userData,setUserData] = useContext(AuthContext)
    // console.log(authData.employees);
    

  return (
    <div className='bg-[#1c1c1c] px-5 mt-5 h-55'>
<div className=' bg-red-400 py-2 px-4 flex  mb-2 justify-between rounded'>
            <h2 className='w-1/5 '>Employee Name</h2>
            <h3 className='w-1/5 '>New Task</h3>
            <h5 className='w-1/5 '>Active Task</h5>
            <h5 className='w-1/5 '>Completed Task</h5>
        </div>

      <div className=' overflow-auto'>
      {userData.map(function(elem,index){

return    <div key={index} className=' bg-transparent border border-green-600 py-2 px-4 flex  mb-2 justify-between rounded'>
<h2 className='w-1/5 text-yellow-600'>{elem.firstName}</h2>
<h3 className='w-1/5 text-red-600'>{elem.taskNumber.newTask}</h3>
<h5 className='w-1/5 text-green-600'>{elem.taskNumber.active}</h5>
<h5 className='w-1/5 text-blue-600'>{elem.taskNumber.completed}</h5>
</div>
})}
      </div>
     
    </div>
  )
}

export default Alltask