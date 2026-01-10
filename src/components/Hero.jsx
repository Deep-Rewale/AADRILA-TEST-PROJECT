import React from 'react'
import heroBg from "../assets/images/hero-bg.jpg";
import Button from './Button';
import DocumentCarousel from './DocumentCarousel';

function Hero() {
  return (
    // Hero section
    <div className='relative w-full h-screen bg-cover bg-center max-lg:h-auto' style={{backgroundImage:`url(${heroBg})`}}>
    {/* background soft theme */}
    <div className="absolute inset-0 bg-white/45 z-10" />
    {/* hero content */}
    <div className="hero-content relative py-66 px-20 z-20 flex justify-around max-lg:flex-col-reverse max-lg:py-40 max-lg:gap-20 max-md:gap-12 max-lg:px-8 ">
    {/* left texts */}
     <div className="textStructure  w-3xl max-md:w-full">
       <h1 className='font-raleway font-bold text-5xl/[68.25px] inline-block bg-[linear-gradient(110deg,#CD6028_0%,#CD6028_45%,#3E6EB4_130%)]  
       bg-clip-text text-transparent max-md:text-4xl max-sm:text-3xl'>AI-Powered</h1>
       <h1 className='font-raleway font-bold text-5xl/[68.25px] text-dark max-md:text-4xl max-sm:text-3xl'>Document
       Automation</h1> 
       <h1 className='font-raleway font-bold text-5xl/[68.25px] text-dark max-md:text-4xl max-sm:text-3xl'>& Fraud Detection</h1>
      <p className='max-w-120 mt-5 font-manrope text-xl/8 font-medium max-md:text-lg max-sm:text-base'>Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless document processing and fraud prevention.</p>
      <div className="buttons mt-6">
         <Button className="px-19 py-4 mr-10 bg-primary text-base text-white max-md:px-14 max-md:py-3 max-sm:px-5 max-sm:py-4 max-sm:mr-4 ">
         Get a Demo
        </Button>
        <Button className="px-13 py-4 bg-primary text-base text-white max-md:px-14 max-md:py-3 max-sm:px-5 max-sm:py-4">
        Explore Solutions
        </Button>
      </div>
    </div>
    {/* right image */}
    <div className="right-images w-1/2 flex justify-center max-lg:w-full">
       <DocumentCarousel />
    </div>
    </div>
    </div>


  )
}

export default Hero