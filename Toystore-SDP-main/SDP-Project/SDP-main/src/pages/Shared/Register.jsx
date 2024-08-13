import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignUp } from '../../services/api'
import { toast, Toaster } from 'react-hot-toast'
const Register = () => {

    const navigate = useNavigate()
    const [registerdata, setRegisterdata] = useState({
        name: '',
        phone: '',
        address: '',
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setRegisterdata({ ...registerdata, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(registerdata);
        const res = await SignUp(registerdata.name, registerdata.email, registerdata.phone, registerdata.address, registerdata.password);

        if (res.data==="User registered successfully.") {

            toast.success("Signup Success")
            setTimeout(() => {
                navigate('/login')
            }, 5000)
        }
        else {
            toast.error(res.data)
            // console.log(res.data)
        }

    }
    return (
        <>
        <div className='p-0 m-0 h-[120vh] w-screen flex justify-center items-center flex-col'>
          <form className='flex flex-col gap-5 bg-[]/80 h-5/6 w-[30%] items-center justify-center rounded-md shadow-md shadow-[#d1c8fe]/60' onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder='Name' className='bg-[#d1c8fe]/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-[#d1c8fe]/80 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' onChange={handleChange} required />
            <input type="text" id="phone" placeholder='Phone' className='bg-[#d1c8fe]/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-[#d1c8fe]/80 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' onChange={handleChange} required />
            <input type="text" id="address" placeholder='Address' className='bg-[#d1c8fe]/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-[#d1c8fe]/80 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' onChange={handleChange} required />
            <input type="email" id="email" placeholder='Email' className='bg-[#d1c8fe]/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-[#d1c8fe]/80 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' onChange={handleChange} required />
            <input type="password" id="password" placeholder='Password' className='bg-[#d1c8fe]/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-[#d1c8fe]/80 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' onChange={handleChange} required />
            <button type="submit" className='w-[80%] bg-gradient-to-tr from-[#d1c8fe] to-[#b8a9fe] text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-[#d1c8fe]/60'>Register</button>
            <p>Already have an account? <span className='text-[purple] cursor-pointer font-bold' onClick={() => navigate('/login')}> Login! </span></p>
          </form>
        </div>
        <Toaster />
      </>
      
    )
}

export default Register