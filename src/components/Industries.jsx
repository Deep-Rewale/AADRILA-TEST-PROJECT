import React from 'react'
import bgCircle from "../assets/images/Circle1.png"
import InsuranceIcon from "../assets/icons/Insurance_Icon.png"
import HealthIcon from "../assets/icons/Healthcare_Icon.png"
import LendingIcon from "../assets/icons/Lending_Icon.png"
import dotBig from "../assets/icons/dot-big.png"
import dotSmall from "../assets/icons/dot-small.png"



function Industries() {
  return (
    <div className="relative py-32 px-20 overflow-hidden max-lg:px-10 max-md:px-6">
    {/* Main Grid */}
    <div className="grid grid-cols-2 gap-20 max-lg:grid-cols-1">
    {/* left content  */}
     <div className="left-text   z-4">
        <p className='font-manrope font-bold text-3xl/[68.25px] inline-block bg-[linear-gradient(110deg,#CD6028_0%,#CD6028_45%,#3E6EB4_130%)]  
       bg-clip-text text-transparent'>AI-driven innovation for growth.</p>
        <h2 className='font-raleway font-semibold text-5xl '>Industries We Empower</h2>
     </div>
     {/* Right content */}
     <div className="right-content w-full h-180 max-lg:h-auto ">
     {/* Background image */}
      <div className="background-bg absolute top-20 left-0 ">
        <img className='w-200' src={bgCircle} alt="background circle" />
      </div>

     {/* Dot background */}
       <div className="dot-bg absolute right-140 top-40">
        <img className='w-50' src={dotBig} alt="Dot Background" />
       </div>

       <div className="dot-sm absolute right-0 top-180">
        <img className='w-90' src={dotSmall} alt="Dot Background" />
       </div>


      <div className=" grid-card
  max-lg:grid max-lg:grid-cols-2
  max-lg:gap-10 max-md:gap-8
  max-lg:place-items-center
  max-lg:justify-items-center
  max-lg:relative max-lg:z-10">
      {/* Card 1 Insurance */}
       <div className="card1 absolute left-70 bottom-35 w-90 rounded-2xl py-20 px-13 shadow-2xl bg-white max-lg:static max-lg:mx-auto max-lg:w-[22rem] max-md:w-full">
          <div className='flex flex-col items-center text-center gap-4'>
            <img className='w-15' src={InsuranceIcon} alt="Health Care Icon" />
            <h3 className='font-raleway font-bold text-dark text-2xl'>Insurance</h3>
            <p className='font-manrope text-[#696969] text-base font-medium'>Automate claims processing with accurate document validation.</p>
          </div>
       </div>
   
        {/* Card 2 Lending */}
       <div className="card2 absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-90 rounded-2xl py-20 px-13 shadow-2xl bg-white max-lg:static max-lg:translate-x-0 max-lg:translate-y-0 max-lg:mx-auto max-lg:w-[22rem] max-md:w-full">
          <div className='flex flex-col items-center text-center gap-4'>
            <img className='w-15' src={LendingIcon} alt="Lending Care Icon" />
            <h3 className='font-raleway font-bold text-dark text-2xl'>Lending</h3>
            <p className='font-manrope text-[#696969] text-base font-medium'>Ensure faster loan approvals with fraud detection and instant verification.</p>
          </div>
       </div>

        {/* Card 3  */}
       <div className="card1 absolute right-70 top-35 w-90 rounded-2xl py-20 px-13 shadow-2xl bg-white max-lg:static max-lg:mx-auto max-lg:col-span-2 max-md:col-span-1 max-lg:w-[22rem] max-md:w-full">
          <div className='flex flex-col items-center text-center gap-4'>
            <img className='w-15' src={HealthIcon} alt="Health Care Icon" />
            <h3 className='font-raleway font-bold text-dark text-2xl'>Insurance</h3>
            <p className='font-manrope text-[#696969] text-base font-medium'>Automate claims processing with accurate document validation.</p>
          </div>
          </div>
       </div>
     </div>
  </div>
    </div>
  )
}

export default Industries