import React from 'react'
import Lady from './../../Assets/ladyHero.png'
import Ellipse1 from "./../../Assets/Ellipse483 (1).png"
import Ellipse2 from "./../../Assets/Ellipse2.png"
const Hero = () => {
  return (
    <div className='hero  text-white w-full flex flex-col items-center gap-10 md:flex-row sm:justify-between overflow-hidden sm:flex-1 lg:pl-16 md:pl-8'>
        <div className='flex flex-col gap-8 sm:items-start px-4 md:px-0 items-center  w-[90%] sm:container text-left md:w-full'>
        <h1 className='font-Montserrat-Bold text-2xl text-center md:text-left sm:text-3xl lg:text-4xl w-full max-w-xl md:max-w-none mx-auto'>GET MATCHED & LET YOUR JOB FIND YOU</h1>
        <h3 className='text-center text-xs font-Montserrat-Medium sm:text-sm lg:text-base lg:text-left w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum lectus placerat id in vehicula felis</h3>
        <button className='bg-[#D23432] border-0 rounded-md px-4 text-base font-Montserrat-Bold py-4 md:px-6 mx-auto md:ml-0'>For Talents</button>
        <div className='flex w-full justify-center gap-20 md:justify-start'>
            <div className='flex flex-col'>
                <div className='flex font-Montserrat-Bold text-3xl md:text-5xl'>
                120<span className='text-[#D23432]'>+</span></div>
                <div>Recruiters</div>
            </div>
        
     
            <div>
                <div className='flex font-Montserrat-Bold text-3xl md:text-5xl'>200<span className='text-[#D23432]'>+</span></div>
                <div>Talents</div>
            </div>
        </div>
        </div>
        <div className='overflow-visible relative w-full mb-10 lg:mb-0 flex flex-col justify-center'>
        <div className='w-48 h-48 lg:w-64 lg:h-64 relative ml-[75%] -mb-32 lg:mt-10 lg:ml-[65%] z-50 '><img src={Ellipse2} className = 'w-full h-full'/></div>
            <div className='mx-auto w-4/5  relative z-50 lg:w-[initial] max-w-xl lg:max-w-none'><img src={Lady} className = 'w-full md:h-[30rem]'/></div>
            <div className='w-48 h-48 lg:w-64 lg:h-64 relative -mt-20 -ml-10 lg:-ml-0'><img src={Ellipse2} className = 'w-full h-full'/></div>
        </div>
    </div>
  )
}

export default Hero