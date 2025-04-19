import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData]= useContext(AuthContext)
    
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-68 ' id='alltask'>
        <div className=' bg-red-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className=' w-1/5 '>Employee Name</h2>
            <h3 className=' w-1/5 '>
                New Task
            </h3>
            <h5 className=' w-1/5 '>Active</h5>
            <h5 className=' w-1/5 '>Completed</h5>
            <h5 className=' w-1/5 '>Failed</h5>
        </div>
        <div className=' h-[80%] overflow-auto' id='altask'>
        {userData.map(function(e,idx){
            return  <div key={idx} className=' bg-gray-800 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className=' w-1/4 text-black '>{e.firstName}</h2>
            <h3 className=' w-1/5 text-blue-500'>
                {e.taskNumbers.newTask} 
            </h3>
            <h5 className=' w-1/4 text-yellow-600'>{e.taskNumbers.active} </h5>
            <h5 className=' w-1/6 text-green-600'>{e.taskNumbers.completed}</h5>
            <h5 className=' w-1/6 text-red-600'>{e.taskNumbers.failed}</h5>
        </div>
        })}
        </div>
       
        
      
    </div>
  )
}

export default AllTask
