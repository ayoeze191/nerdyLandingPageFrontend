import React from 'react'

const Testifier = (props) => {
  return (
    <div className='bg-[#222222] px-5 md:px-12 py-12 image w-4/5 mx-auto md:w-fit cursor-pointer flex flex-col items-center gap-6'>
        <div className="w-20 images"><img src={props.image} className = 'w-full'/></div>
        <h1 className='text-[#D23431] font-Montserrat-Bold text-lg name '>{props.name}</h1>
        <h1 className='text-white text-base text text-center'>{props.text}</h1>
    </div>
  )
}

export default Testifier
