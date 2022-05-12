import React from 'react'
import logo2 from "./../../Assets/logo2.png"

import logofooter from  "./../../Assets/logofooter.png"
import location from "./../../Assets/location.png"
import email from "./../../Assets/email.png"
import phone from "./../../Assets/phone.png"

const Footer = () => {
  return (
    <div className='px-6 sm:px-10 md:px-14 lg:px-16 py-14 bg-[#222222] md:bg-inherit'>
      <div className='mb-10 '>
        <img src={logo2} className = 'hidden md:block'/>
        <img src={logofooter}  className = ' md:hidden'/>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-20'>
        <div className='text-[#7E7777] md:text-white flex flex-col text-sm md:text-base'>
          <h1 className=' text-white md:text-[#222222] text-lg font-Montserrat-Bold mb-5 font-bold'>Contact</h1>
          <p className='mb-4 font-Montserrat-Medium'>We build and we teach tech and digital solutions</p>
          <div className='flex gap-4 mb-4 items-center'><img src={location} className = ''/><p>4 Ishola Alagomeji, Off Herbert Macaulay, Yaba, Lagos</p></div>
          <div className='flex gap-4 mb-4 items-center'><img src={email} /><p>info@nerdyeye.com</p></div>
          <div className='flex gap-4 mb-4 items-center'><img src={phone} /><p>+234 812 724 4042</p></div>
        </div>

        <div className='text-[#7E7777] md:text-white flex flex-col text-sm md:text-base'>
          <h1 className='text-white md:text-[#222222] text-lg font-Montserrat-Bold mb-5 font-bold'>Services</h1>
          <p className='mb-4 font-Montserrat-Medium'>Website Design/Development</p>
          <div className='flex mb-4'><p>Mobile App Development</p></div>
          <div className='flex gap-4 mb-4'><p>Digital Marketting  Campaign Management</p></div>
          
        </div>
        <div className='text-[#7E7777] md:text-white flex flex-col text-sm md:text-base'>
          <h1 className='text-white md:text-[#222222] text-lg font-Montserrat-Bold mb-5 font-bold'>Courses</h1>
          <p className='mb-4 font-Montserrat-Medium'>Digital Marketing Training</p>
          <div className='flex mb-4'><p>Graphics Design Training</p></div>
          <div className='flex gap-4 mb-4'><p>UI/UX Design Training</p></div>
          <div className='flex gap-4 mb-4'><p>Frontend Web Development</p></div>
          <div className='flex gap-4 mb-4'><p>Full-stack Web And Mobile App Development</p></div>
        </div>
        <div className='text-[#7E7777] md:text-white flex flex-col text-sm md:text-base'>
          <h1 className='text-white md:text-[#222222] text-lg font-Montserrat-Bold mb-5 font-bold'>Company</h1>
          <p className='mb-4 font-Montserrat-Medium'>About</p>
          <div className='flex mb-4'><p>Workforce</p></div>
          <div className='flex gap-4 mb-4'><p>Contact</p></div>
          
        </div>
        <div className='text-[#7E7777] md:text-white flex flex-col text-sm md:text-base'>
          <h1 className='text-white md:text-[#222222] text-lg font-Montserrat-Bold mb-5 font-bold'>Other Links</h1>
          <p className='mb-4 font-Montserrat-Medium'>Careers</p>
          <div className='flex mb-4'><p>Site Map </p></div>
          <div className='flex gap-4 mb-4'><p>Privacy Terms</p></div>
          
        </div>
        <div className='text-[#7E7777] md:text-white flex flex-col text-sm md:text-base'>
          <h1 className='text-white md:text-[#222222] text-lg font-Montserrat-Bold mb-5 font-bold'>Social Media</h1>
         
          
        </div>
      </div>
    </div>
  )
}

export default Footer