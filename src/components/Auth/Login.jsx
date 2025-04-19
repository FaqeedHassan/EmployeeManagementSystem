import React, { useState } from 'react'


const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submithandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)

        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex items-center h-screen w-screen justify-center'>
        <div className=' rounded-xl border-2 border-emerald-600 p-20 transition duration-300 ease-in-out hover:shadow-[0_0_10px_#059669,0_0_20px_#059669,0_0_40px_#059669]'>
            <form onSubmit={(e)=>{
                submithandler(e)
            }} action="" className=' flex flex-col items-center justify-center '>
                <input value={email}
                 onChange={(e)=>{
                    setEmail(e.target.value)

                }} required className=' outline-none border-2 border-emerald-600 text-xl py-3 px-5 rounded-full bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input value={password}
                 onChange={(e)=>{
                    setPassword(e.target.value)

                }} className=' outline-none border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className=' mt-5 bg-emerald-600 border-none outline-none hover:bg-emerald-700 font-semibold text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Login</button>
            </form>

        </div>
      
    </div>
  )
}

export default Login
