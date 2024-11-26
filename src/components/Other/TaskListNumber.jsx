import React from 'react'

const TaskListNumber = ({LoginData}) => {
  return (
    <div className='flex screen mt-10  justify-between gap-5'>
        <div className=' rounded-xl w-[45%] py-10 px-6 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{LoginData.taskNumber.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=' rounded-xl w-[45%] py-10 px-6 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{LoginData.taskNumber.active}</h2>
            <h3 className='text-xl font-medium'>Active Task </h3>
        </div>
        <div className=' rounded-xl w-[45%] py-10 px-6 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{LoginData.taskNumber.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber