import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'

const TaskList = ({LoginData}) => {

  return (
    <div id='tasklist' className='h-[48%] overflow-x-auto py-5 w-full flex items-center justify-start gap-5 flex-nowrap  '>
  
  {LoginData.tasks.map((elem,index)=>{
if(elem.active){
   return<AcceptTask key={index} LoginData={elem}/>
}
if(elem.newTask){
   return<NewTask key={index} LoginData={elem}/>
}
if(elem.completed){
   return<CompleteTask key={index} LoginData={elem}/>
}

  })}
    </div>
  )
}

export default TaskList