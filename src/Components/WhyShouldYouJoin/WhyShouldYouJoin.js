import React from 'react'
import Pupil from "./../../Assets/Pupil.png";
import Get from "./../../Assets/Get.png"
const WhyShouldYouJoin = () => {
  return (
    <div className='md:flex w-5/6 mx-auto mt-20 sm:px-10 max-w-[1650px]'>
        <div className='hidden md:block w-full'>
            <img src={Pupil} className = 'h-full w-full'/>
        </div>

        <div className='bg-[#222222]/40 flex flex-col items-center justify-center px-10  rounded-2xl py-10 w-full'>
        <h1 className='text-3xl font-Montserrat-Bold text-white mx-auto text-center mb-7 block'>WHY JOIN THE <span className='text-[#D23431] '>NERDYEYE TALENT PIPELINE</span></h1>

        <div className='text-[#ffffff] flex flex-col gap-5 font-Montserrat-Medium md:w-full'>
            <div className='flex gap-5 items-center justify-center md:justify-start md:px-5 md:bg-[#222222] w-full rounded-xl py-2 box-border'><div className='img'><img src={Get}/></div> <h1>Long-term placements</h1></div>
            <div className='flex gap-5 items-center justify-center md:justify-start md:px-5 md:bg-[#222222] w-full rounded-xl py-2 box-border'><div className='img'><img src={Get}/></div> <h1>Long-term placements</h1></div>
            <div className='flex gap-5 items-center justify-center md:justify-start md:px-5 md:bg-[#222222] w-full rounded-xl py-2 box-border'><div className='img'><img src={Get}/></div> <h1>Long-term placements</h1></div>
            <div className='flex gap-5 items-center justify-center md:justify-start md:px-5 md:bg-[#222222] w-full rounded-xl py-2 box-border'><div className='img'><img src={Get}/></div> <h1>Long-term placements</h1></div>
            <div className='flex gap-5 items-center justify-center md:justify-start md:px-5 md:bg-[#222222] w-full rounded-xl py-2 box-border'><div className='img'><img src={Get}/></div> <h1>Long-term placements</h1></div>
        </div>
        </div>
    </div>
  )
}

export default WhyShouldYouJoin