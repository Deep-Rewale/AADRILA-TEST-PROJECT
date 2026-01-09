import React from "react"
import AboutImg1 from "../assets/icons/about-frame.png"
import Team from "./team"


function About() {
  return (
    <>
    <section className="relative w-full min-h-screen bg-white overflow-hidden">

      {/* TOP SPACE FOR FIXED NAVBAR */}
      <div className="pt-40" />

      {/* ABOUT HEADER CARD */}
      <div className="relative z-10 flex justify-center">
        <div className="bg-white rounded-3xl px-20 py-10
          shadow-[0_0_40px_rgba(0,0,0,0.12)] text-center">
          <h1 className="font-raleway text-5xl font-semibold mb-4">
            About Us
          </h1>
          <p className="font-manrope text-lg bg-[linear-gradient(110deg,#CD6028_0%,#CD6028_45%,#3E6EB4_130%)]
            bg-clip-text text-transparent">
            Meet the Minds Shaping Document Automation.
          </p>
        </div>
      </div>

       {/* cards sections  */}
        <div className="card-box flex w-240 py-4 rounded-r-full px-5  gap-5 items-center  shadow-[0_0_40px_rgba(0,0,0,0.12)] mt-20 mr-auto">
            <p className="ml-10 text-right font-manrope text-base font-medium text-[#696969]">To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.</p>
            <span className="h-20 w-1 bg-[#CD6028] rounded-full"></span>
            <h3 className="font-raleway font-bold text-dark text-2xl">Our <br/> Vision</h3>
            <img src={AboutImg1} alt="About frame image" />
        </div>
      {/* card 2 */}
         <div className="card-box flex w-240 py-4 rounded-l-full px-5  gap-5 items-center flex-row-reverse content-end  shadow-[0_0_40px_rgba(0,0,0,0.12)] mt-20 ml-auto ">
            <p className="mr-10 text-left font-manrope text-base font-medium text-[#696969]">To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.</p>
            <span className="h-20 w-1 bg-[#CD6028] rounded-full"></span>
            <h3 className="font-raleway font-bold text-dark text-2xl">Our <br/> Mission</h3>
            <img src={AboutImg1} alt="About frame image" />
        </div>
    </section>
    <Team />
    </>
  )
}

export default About
