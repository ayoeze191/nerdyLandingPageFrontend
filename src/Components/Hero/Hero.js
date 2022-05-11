import React from 'react'
import Lady from './../../Assets/ladyHero.png'
import Ellipse1 from "./../../Assets/Ellipse483 (1).png"
import Ellipse2 from "./../../Assets/Ellipse2.png"
const Hero = () => {
  return (
    <div className='hero mx-auto text-white w-5/6 flex flex-col items-center gap-10 sm:flex-row sm:justify-between overflow-hidden sm:flex-1 sm:container'>
        <div className='flex flex-col gap-8 sm:items-start px-8 items-center '>
        <h1 className='font-Montserrat-Bold text-2xl text-center sm:text-left md:text-4xl'>GET MATCHED & LET YOUR JOB FIND YOU</h1>
        <h3 className='text-center text-xs font-Montserrat-Medium sm:text-sm md:text-base sm:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum lectus placerat id in vehicula felis</h3>
        <button className='bg-[#D23432] border-0 rounded-md px-4 text-base font-Montserrat-Bold py-4 md:px-6'>For Talents</button>
        <div className='flex w-full justify-center gap-10 sm:justify-start'>
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
        <div className='overflow-visible relative mt-10'>
            <div className='mx-auto w-3/5 h-4/5  md:w-96 relative z-50 sm:w-5/6 sm:h-5/6'><img src={Lady} className = 'w-full'/></div>
            <div className='relative top-0 w-full h-full flex flex-col justify-between gap-10'>
            <div className='w-48 h-48 relative right-0 '><img src={Ellipse1} className = 'w-full h-full'/></div>
            <div className='w-48 h-48'><img src={Ellipse2} className = 'w-full h-full'/></div>
            </div>
        </div>
    </div>
  )
}

export default Hero