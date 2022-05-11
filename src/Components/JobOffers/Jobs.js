import React from 'react'

const Jobs = (props) => {
  return (
    <div className={props.mobile?'text-white  flex-col gap-7 bg-[#222222] w-full  rounded-3xl py-7 box-border hidden lg:flex ml-0 max-w-[17.5rem]':'max-w-[17.5rem] text-white flex w-full  flex-col gap-7 bg-[#222222]  rounded-3xl py-7 box-border ml-0'}>
      <div className='flex items-center gap-8 px-8'><div><img src={props.image} className = 'md:w-7'/> </div><h3>{props.title}</h3></div>
      <div className="font-Montserrat-Bold px-8 ">{props.text}</div>
      <div className='flex gap-4 items-center px-8 '><h3 className='flex gap-1'><span><img src={props.locmage} /></span><>{props.location}</></h3><h3 className='text-[#D23431]'>{props.mode}</h3></div>
      <div className=' border-solid border-t-[#D9D9D9] border-t flex justify-between items-center px-8 pt-7'><h3>{props.companyName}</h3><h3> <img src={props.companyLogo} /></h3></div>
    </div>
  )
}
 
export default Jobs