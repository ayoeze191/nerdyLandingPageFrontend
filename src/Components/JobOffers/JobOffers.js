import React, { useState } from 'react'
import signature from "./../../Assets/signature.png"
import reactjobs from './../../Assets/reactjobs.png'
import meta from './../../Assets/meta.png'
import devjobs from './../../Assets/devjobs.png'
import UIUXjobs from './../../Assets/UIUXjobs.png'
import apple from './../../Assets/apple.png'
import amazon from './../../Assets/amazon.png'
import location from './../../Assets/location.png'
import Devs from "./../../Assets/Devs.png"
import Jobs from './Jobs'


const JobOffers = () => {
  const [lis1, setLis1] = useState([
    {image: UIUXjobs, text: 'UI Designer', location: 'Lagos', mode: 'Full time', companyName:'Apple', companyLogo: apple, locmage: location, title: 'Design'},
    {image: devjobs, text: 'Frontend Developer', location: 'Lagos', mode: 'Full time', companyName:'Amazon', companyLogo: amazon, locmage: location, title: 'Web Development'},
  ])
  const [lis2, setlis2] = useState([
    {image: UIUXjobs, text: 'UX Researcher', location: 'Lagos', mode: 'Full time', companyName:'Meta', companyLogo: meta, locmage: location, title: 'Design', mobile: false},
    {image: devjobs, text: 'Frontend Developer', location: 'Lagos', mode: 'Full time', companyName:'Amazon', companyLogo: amazon, locmage: location, title: 'Web Development', mobile: true},
    {image: reactjobs, text: 'React Js Developer', location: 'Lagos', mode: 'Full time', companyName:'Amazon', companyLogo: meta, locmage: location, title: 'Software Development', mobile: true},
  ])
  return (
    <div className=' md:px-20 pb-10'>
         <img src={signature}  className = 'mx-auto mb-24 lg:w-96 lg:h-[53px]'/>
         <div className='text-white font-Montserrat-Bold text-center mb-20 sm:text-xl lg:text-[32px]'>JOB OFFERS</div>
         
         <div className='lg:flex mx-auto w-full'>
           <div className='flex-1 lg:h-96 xl:h-[30rem] p-10 lg:bg-[#222222]/40'>
         <div className='flex justify-center lg:justify-start h-fit  '>
            <div className='flex flex-col border-r border-white border-solid pr-5 items-center'>
                <div className='flex font-Montserrat-Bold text-3xl md:text-5xl text-white'>
                500<span className='text-[#D23432]'>+</span></div>
                <div className='text-white font-Montserrat-Medium'>Job Offers</div>
            </div>
     
            <div className='pl-5 items-center'>
                <div className='flex font-Montserrat-Bold text-3xl md:text-5xl text-white'>100<span className='text-[#D23432]'>+</span></div>
                <div className='text-white font-Montserrat-Medium'>Start Ups</div>
            </div>
        </div>
        </div>
        <div className='hidden lg:flex w-fit h-fit'>
        <div className='lg:w-[30rem] lg:h-30rem xl:w-[35rem]'>
          <img src={Devs} className = 'w-full h-full'/>
        </div>
        </div>
       
        </div>
        <div className='flex flex-col mx-auto p-10 w-full relative lg:-mt-72 xl:-mt-96 max-w-lg lg:max-w-none'>
            <div className='flex flex-col gap-8 lg:grid md:grid-cols-3 lg:gap-4 mb-4 xl:gap-8'>
              {lis1.map((a) => <Jobs {...a} />)}
            </div>
            <div className='flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:gap-4 xl:gap-8'>
            {lis2.map((a) => <Jobs {...a} />)}
            </div>
        </div>
        <img src={signature}  className = 'mx-auto mb-10 lg:mb-14 lg:w-96 lg:h-[53px] mt-20'/>
    </div>
  )
}

export default JobOffers