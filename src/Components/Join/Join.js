import React from 'react'
import shake from "./../../Assets/shake.png"
import shakeCircle from "./../../Assets/shakeCircle.png"
import signature from "./../../Assets/signature.png"

const Join = () => {
  return (
      <div className='mx-auto w-5/6 flex flex-col items-center'>
       <img src={signature}  className = 'mx-auto mb-10 md:w-96 md:h-[53px] mt-20'/>
    <div className='flex flex-col md:flex-row w-full'>
            <div className='hidden md:flex  relative  px-10 py-10 w-full items-center justify-center'>
                <div className='h-96 '>
                <img src={shake} className = "w-full h-full relative md:right-3 md:top-0 lg:top-2 lg:right-2"/>
                </div>
                <div className='absolute h-[410px]'>
                <img src={shakeCircle} className = "h-full w-full"/>
                </div>
            </div>
        <div className='w-full'>
            <h1 className='text-3xl font-Montserrat-Bold text-white mx-auto text-center mb-10 md:text-4xl w-full '>JOIN THE NERDYEYE <span className='text-[#D23431]'>NETWORK</span></h1>
            <p className=' font-medium text-center px-8 mb-10 text-white'>Thank you for showing interest in the Nerdy Eye’s Recruitment program. Please fill the form below and we will connect you with your ideal employers as soon as possible.</p>
            <div className='flex flex-col w-full px-10'>
                <div className='w-full flex flex-col gap-4 font-Montserrat-Bold mb-8'>
                    <p className='text-[#575757]'>Role <span className='text-[#D23431]'>*</span> </p><input type='text' className='bg-[#222222] rounded-md text-white py-5'/>
                </div>
                <div className='w-full flex flex-col gap-4 font-Montserrat-Bold mb-8'>
                    <p className='text-[#575757]'>Year of Experience <span className='text-[#D23431]'>*</span> </p><input type='text' className='bg-[#222222] rounded-md text-white py-5' />
                </div>
                <div className='w-full flex flex-col gap-4 font-Montserrat-Bold mb-8'>
                    <p className='text-[#575757] font-Montserrat-Bold '>Work type<span className='text-[#D23431]'>*</span> </p><input type='text' className='bg-[#222222] rounded-md text-white py-5' />
                </div>
                <button className='text-white font-Montserrat-normal bg-[#D23432] w-fit px-6 rounded-md py-4 mt-4'>Submit</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Join