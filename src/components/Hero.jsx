import React from 'react'
import heroBg from "../assets/images/hero-bg.jpg";
import Button from './Button';
import DocumentCarousel from './DocumentCarousel';

function Hero() {
  return (
    // Hero section
    <div className='relative w-full h-screen bg-cover bg-center' style={{backgroundImage:`url(${heroBg})`}}>
    {/* background soft theme */}
    <div className="absolute inset-0 bg-white/45 z-10" />
    {/* hero content */}
    <div className="hero-content relative py-66 px-20 z-20 flex justify-around">
    {/* left texts */}
     <div className="textStructure  max-w-3xl">
       <h1 className='font-raleway font-bold text-5xl/[68.25px] inline-block bg-[linear-gradient(110deg,#CD6028_0%,#CD6028_45%,#3E6EB4_130%)]  
       bg-clip-text text-transparent'>AI-Powered</h1>
       <h1 className='font-raleway font-bold text-5xl/[68.25px] text-dark'>Document
       Automation</h1> 
       <h1 className='font-raleway font-bold text-5xl/[68.25px] text-dark'>& Fraud Detection</h1>
      <p className='max-w-120 mt-5 font-manrope text-xl/8 font-medium'>Enhance security, accuracy, and efficiency with our cutting-edge AI solutions for seamless document processing and fraud prevention.</p>
      <div className="buttons mt-6">
         <Button className="px-19 py-4 mr-10 bg-primary text-base text-white">
         Get a Demo
        </Button>
        <Button className="px-13 py-4 bg-primary text-base text-white">
        Explore Solutions
        </Button>
      </div>
    </div>
    {/* right image */}
    <div className="right-images w-1/2 flex justify-center ">
       <DocumentCarousel />
    </div>
    </div>
    </div>


  )
}

export default Hero