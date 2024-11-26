import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Authprovider'

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assginTO, setAssginTO] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState([])

  const SubmitHandler = (e)=>{
e.preventDefault()

setNewTask({taskDate,taskDescription,taskTitle,category,active:false,newTask:true,completed:false})


const data = userData




data.forEach(function(elem){
if(assginTO == elem.firstName){
  elem.tasks.push(newTask)
  elem.taskNumber.newTask = elem.taskNumber.newTask+1
  // console.log(elem);
}
})

setUserData(data)
console.log(data);



setTaskDate('')
setAssginTO('')
setCategory('')
setTaskDescription('')
setTaskTitle('')

  }



  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form 
    onSubmit={(e)=>{
      SubmitHandler(e)
    }}
    className='flex flex-wrap w-full  items-start justify-between' >
   <div className='w-1/2'>
       <div>
       <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
       <input 
       value={taskTitle}
       onChange={(e)=>{
   setTaskTitle(e.target.value)
       }}
       className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border border-red-50' type="text" placeholder='Your Name' />
       </div>

       <div>
         <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
       <input
        value={taskDate}
        onChange={(e)=>{
    setTaskDate(e.target.value)
        }}
        className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border border-red-50' type="date" />
       </div>

      <div>
      <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
      <input 
       value={assginTO}
       onChange={(e)=>{
   setAssginTO(e.target.value)
       }}
      className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border border-red-50' type="text" placeholder='Employee Name' />
      </div>

      <div>
      <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
      <input 
      value={category}
      onChange={(e)=>{
  setCategory(e.target.value)
      }}
      className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border border-red-50' type="text " placeholder='Design,Dev' />
      </div>
 </div>

   

  <div className='w-1/2'>
  <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
  <textarea
       value={taskDescription}
       onChange={(e)=>{
   setTaskDescription(e.target.value)
       }}
   className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-red-50' name="" id=""></textarea>
  <button className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-sm mt-4 w-full '>Ceate Task</button>
  </div>
       

     
    </form>
</div>
  )
}

export default CreateTask