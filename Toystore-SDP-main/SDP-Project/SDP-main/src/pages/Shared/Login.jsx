import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { authService } from '@/services/auth'
const Login = () => {
    const navigate = useNavigate()

    const checkRedirect = async () => {
        if (authService.getToken() !== null && authService.isLoggedIn()) {
            const userRole = authService.getUserRole();
            if (userRole !== null) {
                if (userRole === "Admin") {
                    navigate('/admin/dashboard');
                } else if (userRole === "User") {
                    navigate('/shopbycategory');
                } else {
                    toast.error("Something went wrong");
                }
            }
        }
    };

    useEffect(() => {
        checkRedirect();
    }, []);

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await authService.SignIn(emailRef.current.value, passwordRef.current.value)
        if (res.status === 200) {
            authService.setToken(res.data.accessToken)
            toast.success("Welcome")
            console.log(res.data.accessToken)
            console.log(authService.getToken())

            setTimeout(() => {
                checkRedirect();
            }, 3000)

        }
    };
    return (
        <>
        <div className='p-0 m-0 h-[90vh] w-screen flex justify-center items-center flex-col'>
          <form className='flex flex-col gap-5 bg-/80 h-3/6 w-[30%] items-center justify-center rounded-md shadow-md shadow-[#d1c8fe]/60' onSubmit={handleLogin}>
            <input type="email" ref={emailRef} placeholder='Email' className='bg-[#d1c8fe]/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-[#d1c8fe]/80 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' required />
            <input type="password" ref={passwordRef} placeholder='Password' className='bg-[#d1c8fe]/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-[#d1c8fe]/80 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' required />
            <button type="submit" className='w-[80%] bg-gradient-to-tr from-[#d1c8fe] to-[#b8a9fe] text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-[#d1c8fe]/60'>Login</button>
            <p>Don't have an account? <span className='text-[purple] cursor-pointer font-bold' onClick={() => navigate('/register')}> Register! </span></p>
          </form>
        </div>
        <Toaster />
      </>
      
    )
}

export default Login