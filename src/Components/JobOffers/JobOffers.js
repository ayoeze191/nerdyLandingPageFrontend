import React, { useState } from 'react'
import signature from "./../../Assets/signature.png"
import reactjobs from './../../Assets/reactjobs.png'
import meta from './../../Assets/meta.png'
import devjobs from './../../Assets/devjobs.png'
import UIUXjobs from './../../Assets/UIUXjobs.png'
import apple from './../../Assets/apple.png'
import amazon from './../../Assets/amazon.png'
import location from './../../Assets/location.png'
import Jobs from './Jobs'


const JobOffers = () => {
  const [lis1, setLis1] = useState([
    {image: UIUXjobs, text: 'UI Designer', location: 'Lagos', mode: 'Full time', companyName:'Apple', companyLogo: apple, locmage: location, title: 'Design'},
    {image: devjobs, text: 'Frontend Developer', location: 'Lagos', mode: 'Full time', companyName:'Amazon', companyLogo: amazon, locmage: location, title: 'Web Development'},
    {image: reactjobs, text: 'React Js Developer', location: 'Lagos', mode: 'Full time', companyName:'Amazon', companyLogo: meta, locmage: location, title: 'Software Development'}
  ])
  const [lis2, setlis2] = useState([
    
  ])
  return (
    <div>
         <img src={signature}  className = 'mx-auto mb-10 md:w-96 md:h-[53px]'/>
         <div className='text-white font-Montserrat-Bold text-center mb-8'>JOB OFFERS</div>
         <div>
         <div className='flex w-full justify-center mb-10'>
            <div className='flex flex-col border-r border-white border-solid pr-5'>
                <div className='flex font-Montserrat-Bold text-3xl md:text-5xl text-white'>
                500<span className='text-[#D23432]'>+</span></div>
                <div className='text-white font-Montserrat-Medium'>Job Offers</div>
            </div>
        
     
            <div className='pl-5'>
                <div className='flex font-Montserrat-Bold text-3xl md:text-5xl text-white'>100<span className='text-[#D23432]'>+</span></div>
                <div className='text-white font-Montserrat-Medium'>Start Ups</div>
            </div>
        </div>

        <div>
            <div className='flex flex-col gap-8'>
              {lis1.map((a) => <Jobs {...a} />)}
            </div>
            <div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default JobOffers