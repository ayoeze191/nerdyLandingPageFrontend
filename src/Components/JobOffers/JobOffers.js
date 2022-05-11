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
    <div className='lg:px-14 w-5/6 sm:container mx-auto'>
         <img src={signature}  className = 'mx-auto mb-10 lg:mb-14 lg:w-96 lg:h-[53px]'/>
         <div className='text-white font-Montserrat-Bold text-center mb-8 sm:text-xl lg:text-[32px]'>JOB OFFERS</div>
         <div className='w-full hidden lg:flex h-full'>
        <div className='w-[50%] h-96'></div>
        <div className='hidden lg:block  right-0 xl:w-1/2 lg:w-[45%]'>
          <img src={Devs} className = 'w-full'/>
        </div>
        </div>
         <div className='lg:overflow-visible lg:flex flex-col w-full justify-between relative mx-auto pl-12 lg:-mt-[27rem] xl:-mt-[35rem]'>
         <div className='flex  justify-start mb-10 w-1/2 py-20 h-fit'>
            <div className='flex flex-col border-r border-white border-solid pr-5 '>
                <div className='flex font-Montserrat-Bold text-3xl md:text-5xl text-white'>
                500<span className='text-[#D23432]'>+</span></div>
                <div className='text-white font-Montserrat-Medium'>Job Offers</div>
            </div>
        
     
            <div className='pl-5 w-1/2'>
                <div className='flex font-Montserrat-Bold text-3xl lg:text-5xl text-white'>100<span className='text-[#D23432]'>+</span></div>
                <div className='text-white font-Montserrat-Medium'>Start Ups</div>
            </div>
        </div>
        <div className='flex flex-col gap-8 lg:relative z-50 items-center w-full lg:w-fit '>
            <div className='flex flex-col gap-8 lg:grid lg:grid-cols-3 items-center w-full lg:gap-8'>
              {lis1.map((a) => <Jobs {...a} />)}
            </div>
            <div className='flex flex-col gap-8 lg:grid lg:grid-cols-3  items-center w-full lg:gap-8'>
            {lis2.map((a) => <Jobs {...a} />)}
            </div>
        </div>
       
        </div>
        <img src={signature}  className = 'mx-auto mb-10 lg:mb-14 lg:w-96 lg:h-[53px] mt-10'/>
    </div>
  )
}

export default JobOffers