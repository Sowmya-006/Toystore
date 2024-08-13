import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillHome, AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai'

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/",
      icon: <AiFillHome />
    },
    {
      title: "Login",
      path: "/login",
      icon: <AiOutlineLogin />
    },
    {
      title: "Register",
      path: "/register",
      icon: <AiOutlineUserAdd />
    }
  ]
  
  return (
    <div className="w-full h-[10vh] flex flex-row justify-center items-center shadow-sm shadow-black/50" style={{ backgroundColor: '#d1c8fe' }}>
      <div className="w-1/4 h-full text-primary font-baloo flex justify-start items-center text-lg">
        <div className="flex-shrink-0">
          <img className="block lg:hidden h-8 w-auto" src="https://c.tenor.com/mCu12JwV8YEAAAAC/toys-r-us.gif" alt="Logo" />
          <img className="hidden lg:block h-12" src="https://c.tenor.com/mCu12JwV8YEAAAAC/toys-r-us.gif" alt="Logo" />
        </div>
      </div>
      
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path} className="flex items-center gap-2">
                {links.icon}
                {links.title}
              </NavLink>
            </li>
          ))
        }
      </div>
    </div>
  )
}

export default Navbar
