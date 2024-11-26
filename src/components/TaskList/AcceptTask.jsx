import React from 'react'

const AcceptTask = ({LoginData}) => {
  // console.log(LoginData);
  
  return (
    <div className='h-full  flex-shrink-0 w-[300px] px-5 bg-red-400 rounded-xl'>
    <div className='flex justify-between items-center mt-1'>
       <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{LoginData.category}</h3>
       <h4 className='text-sm'>{LoginData.date}</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold'>{LoginData.title}</h2>
    <p className='text-sm mt-2'>{LoginData.description}</p>

    <div className='flex justify-between mt-4'>
        <button className='bg-green-500 px-1 py-2 text-sm'>Mark as Accept</button>
        <button className='bg-red-500 px-1 py-2 text-sm'>Mark as Faild</button>
    </div>
    </div>
  )
}

export default AcceptTask