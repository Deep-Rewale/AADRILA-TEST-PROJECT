import { footer } from 'framer-motion/client'
import React from 'react'
import Button from './Button'
import mapicon from "../assets/icons/mapicon.png"

function Footer() {
  return (
    <footer className=' relative'>
    {/* contact section */}
     <div className="footer-container flex justify-around max-lg:flex-col-reverse max-lg:items-center max-lg:gap-10 max-lg:mb-10">
        {/* left text */}
        <div className="footer-left">
          <div className="footer-tite">
            <h3 className='font-raleway text-5xl font-semibold text-dark  mb-4'>Contact Us</h3>
          <p className='font-manrope font-normal text-xl inline-block bg-[linear-gradient(110deg,#CD6028_0%,#CD6028_45%,#3E6EB4_130%)]  
       bg-clip-text text-transparent mb-4'>Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry. Lorem Ipsum has been the industry's.</p>
          </div>
          <div className="footer-text">
            <h4 className="font-raleway text-bold text-base underline "><img src={mapicon} alt="" /> U.S. Office</h4>
            <p className='font-manrope font-normal text-sm mt-2 mb-4'>Aadrila Technologies INC,< br />
             8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19901.</p>

             <h4 className="font-raleway text-bold text-base underline"> <img src={mapicon} alt="" /> India Office</h4>
            <p className='font-manrope font-normal text-sm mt-2 mb-4'>Aadrila Technologies Private Limited,< br />
            Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road, Near D.N.Nagar, Andheri West,< br />Mumbai, Maharashtra 400053.</p>
          </div>
        </div>
        {/* right form */}
        <div className="footer-right w-2xl">
           <div className='bg-white rounded-3xl py-20 px-12 text-dark shadow-[0_0_40px_rgba(0,0,0,0.12)]
'>
             <div className="grid grid-cols-2 gap-6 mb-6">
                <input className="input outline-none border-solid border  rounded-md border-[#959595] py-3 px-6 text-[#959595]" placeholder="Full Name" />
                <input className="input outline-none border-solid border rounded-md border-[#959595] py-3 px-6 text-[#959595]" placeholder="Email" />
                <input className="input outline-none border-solid border rounded-md border-[#959595] py-3 px-6 text-[#959595]" placeholder="Phone Number" />
                <input className="input outline-none border-solid border rounded-md border-[#959595] py-3 px-6 text-[#959595]" placeholder="Company Name" />
              </div>
                <input className="input w-full mb-6  outline-none border-solid border border-[#959595] py-3 px-6 text-[#959595] rounded-md" placeholder="Inquiry Type" />
                <textarea className="input w-full h-40 mb-8 resize-none  outline-none border-solid border border-[#959595] py-3 px-6 rounded-md text-[#959595]" placeholder="Message"/>
                <div className="button">
                  <Button className="px-16 w-full py-4 mr-10 bg-primary text-base text-white"> Send Inquiry </Button>
                </div>
           </div>
        </div>
     </div>
     {/* last section */}
       <div className="last-section bg-primary h-50 text-white font-manrope text-sm font-normal p-15 -mt-30 max-lg:mt-0">
        <p className='mb-4'>© 2025 by Aadrila Technologies Private Limited CIN U74999UP2017PTC094688</p>
        <p className='mb-4'>Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow, Lucknow,<br/>
          Uttar Pradesh, India, 226024</p>
       </div>
    </footer>
  )
}

export default Footer