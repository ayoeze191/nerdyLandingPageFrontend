import React from 'react'

const Jobs = (props) => {
  return (
    <div className={props.mobile?'text-white  flex-col bg-[#222222]  rounded-3xl box-border hidden lg:flex ml-0 py-4 w-5/6 max-w-[50px] lg:max-w-none lg:w-auto mb-8 lg:mb-0':' text-white flex  flex-col bg-[#222222]  rounded-3xl box-border ml-0 mb-8 lg:mb-0'}>
      <div className='flex items-center gap-8 mb-6 pt-6 xl:gap-6 xl:mb-6 xl:pt-6 md:gap-6 md:mb-4 md:pt-3'><div><img src={props.image} className = 'md:w-14 pl-4'/> </div><h3 className='text-xl lg:text-base'>{props.title}</h3></div>
      <div className="font-Montserrat-Bold mb-6 pl-6 xl:pl-6 xl:mb-6  md:pl-4 md:mb-4">{props.text}</div>
      <div className='flex gap-8 items-center pl-4 mb-4 xl:pl-4 xl:mb-4 md:pl-4 md:mb-3'><h3 className='flex gap-1'><span className='w-5'><img src={props.locmage} className = 'w-full'/></span><>{props.location}</></h3><h3 className='text-[#D23431]'>{props.mode}</h3></div>
      <div className=' border-solid border-t-[#D9D9D9] border-t flex justify-between items-center px-8 py-7 lg:pb-0 xl:px-8 xl:pt-7 md:px-4 md:pt-4 '><h3>{props.companyName}</h3><h3> <img src={props.companyLogo} /></h3></div>
    </div>
  )
}
 
export default Jobs