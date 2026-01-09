import React from 'react'
import logo from '../assets/svg/Aadrila-logo.svg'
import Button from './Button'
import { Link } from "react-router-dom"


function Navbar() {
  return (
    // Navbar full container
    <div className='w-full px-20 py-5 bg-white/30 backdrop-blur-md flex justify-between items-center fixed top-4 z-30'>
        {/* nav-logo */}
      <div className="logo">
        <img src={logo} alt="Aadrila-logo" className='h-12'/>
      </div>
       {/* nav-links */}
      <div className="nav-links flex gap-[26.2px] ">
        {["Home","Industries","Products","Blog","Contact Us","About Us"].map((item, index) => {
  // HOME
  if (item === "Home") {
    return (
     <Link
        key={index}
        to="/"
        className="className='text-base/8 font-medium font-manrope cursor-pointer text-darker"
      >
        {item}
      </Link>
    )
  }

  // ABOUT
  if (item === "About Us") {
    return (
      <Link
        key={index}
        to="/about"
        className="className='text-base/8 font-medium font-manrope cursor-pointer text-darker"
      >
        {item}
      </Link>
    )
  }

  return (
    <span
      key={index}
      className="className='text-base/8 font-medium font-manrope cursor-pointer text-darker"
    >
      {item}
    </span>
  )
})}
       </div>
       {/* nav-button */}
        <Button className="px-9 py-4 bg-primary text-base text-white">
         Get a Demo
        </Button>
    </div>
  )
}

export default Navbar