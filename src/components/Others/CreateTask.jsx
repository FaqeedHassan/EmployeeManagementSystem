import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData,setUserData]= useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')



  const submitHandler=(e)=>{
       e.preventDefault()

       const createdTask = {
        taskTitle,
        taskDescription,
        taskDate,
        category,
        active: false,
        newTask: true,
        failed: false,
        completed: false
      }
    
      const updatedUserData = userData.map(user => {
        if (assignTo === user.firstName) {
          return {
            ...user,
            tasks: [...user.tasks, createdTask],
            taskNumbers: {
              ...user.taskNumbers,
              newTask: user.taskNumbers.newTask + 1
            }
          }
        }
        return user
      })
    
      setUserData(updatedUserData)
      localStorage.setItem('userData', JSON.stringify(updatedUserData)) // Save to localStorage
    
      console.log(updatedUserData)

      setAssignTo('')
      setCategory('')
      setTaskDate('')
      setTaskDescription('')
      setTaskTitle('')

  }

  return (
    <div>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} action="" className=" flex flex-wrap w-full mt-7 rounded bg-[#1c1c1c] items-start justify-between">
          <div className=" w-1/2 p-4" >
            <div>
              <h3>Task Title</h3>
              <input
               value={taskTitle}
               onChange={(e)=>{
                setTaskTitle(e.target.value)
               }}
               type="text" placeholder="Make a UI design" className="border-[1px] border-gray-400 outline-none w-150 h-9 rounded p-3 mt-1"/>
            </div>
            <div className=" mt-3">
              <h3>Date</h3>
              <input
              value={taskDate}
              onChange={(e)=>{
               setTaskDate(e.target.value)
              }}
               type="date" className="border-[1px] border-gray-400 w-150 h-9 rounded p-3 mt-1" />
            </div>
            <div className=" mt-3">
              <h3>Assign to</h3>
              <input
               value={assignTo}
               onChange={(e)=>{
                setAssignTo(e.target.value)
               }}
               type="text" placeholder="employee name" className="border-[1px] border-gray-400 outline-none w-150 h-9 rounded p-3 mt-1" />
            </div>
            <div className=" mt-3">
              <h3>Category</h3>
              <input
               value={category}
               onChange={(e)=>{
                setCategory(e.target.value)
               }}
               type="text" placeholder="design, dev, etc" className="border-[1px] border-gray-400 outline-none w-150 h-9 rounded p-3 mt-1" />
            </div>
            
          </div>

          <div className=" w-1/2 p-4">
            <h3>Description</h3>
            <textarea
             value={taskDescription}
             onChange={(e)=>{
              setTaskDescription(e.target.value)
             }}
             name="" id="" cols="30" rows="10" className=" rounded w-full border-[1px] border-gray-400 outline-none p-2"></textarea><br />
            <button className=" mt-7 bg-emerald-600 w-full h-10 rounded hover:bg-emerald-700">Create Task</button>
          </div>
        
        </form>
      </div>
  )
}

export default CreateTask
