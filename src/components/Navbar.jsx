import React, { useState } from 'react'
import logo from '../assets/svg/Aadrila-logo.svg'
import Button from './Button'
import { Link } from "react-router-dom"
import Hamburger from 'hamburger-react'
import { motion, AnimatePresence } from "framer-motion"


function Navbar() {
  const [isOpen,setOpen] = useState(false)
  return (
    // Navbar full container
    <>
    <div className='w-full px-20 py-5 bg-white/30 backdrop-blur-md flex justify-between items-center fixed top-4 z-30 max-lg:px-8'>
        {/* nav-logo */}
      <div className="logo">
        <img src={logo} alt="Aadrila-logo" className='h-12 max-lg:h-10'/>
      </div>
       {/* nav-links */}
      <div className="nav-links flex gap-[26.2px] hidden lg:flex">
        {["Home","Industries","Products","Blog","Contact Us","About Us"].map((item, index) => {
  // HOME
  if (item === "Home") {
    return (
     <Link
        key={index}
        to="/"
        className="text-base/8 font-medium font-manrope cursor-pointer text-darker"
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
        className="text-base/8 font-medium font-manrope cursor-pointer text-darker"
      >
        {item}
      </Link>
    )
  }

  return (
    <span
      key={index}
      className="text-base/8 font-medium font-manrope cursor-pointer text-darker"
    >
      {item}
    </span>
  )
})}
       </div>
       {/* nav-button */}
        <Button className="px-9 py-4 bg-primary text-base text-white hidden lg:block ">
         Get a Demo
        </Button> 
        <div className="mobile-btn lg:hidden">
         <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
    </div>
    {/* for mobile screen  */}
     <AnimatePresence>
  {isOpen && (
    <motion.div
         initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden fixed top-24 left-0 w-full bg-primary px-10 py-6 flex flex-col gap-6 z-40"
    >
      {["Home","Industries","Products","Blog","Contact Us","About Us"].map((item, index) => {

        if (item === "Home") {
          return (
            <Link
              key={index}
              to="/"
              className="text-base/8 font-medium font-manrope text-white"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          )
        }

        if (item === "About Us") {
          return (
            <Link
              key={index}
              to="/about"
              className="text-base/8 font-medium font-manrope text-white"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          )
        }

        return (
          <span
            key={index}
            className="text-base/8 font-medium font-manrope text-white"
          >
            {item}
          </span>
        )
      })}
    </motion.div>
  )}
</AnimatePresence>

    </>
    
  )
}

export default Navbar