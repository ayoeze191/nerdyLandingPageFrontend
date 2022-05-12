import React from 'react'

const Testifier = (props) => {
  return (
    <div className='bg-[#222222] px-5 md:px-12 py-5 image w-5/6 max-w-2xl mx-auto md:w-fit cursor-pointer flex flex-col items-center gap-6'>
        <div className="w-14 images"><img src={props.image} className = 'w-full'/></div>
        <h1 className='text-[#D23431] font-Montserrat-Bold text-base name '>{props.name}</h1>
        <h1 className='text-white text-sm text text-center'>{props.text}</h1>
    </div>
  )
}

export default Testifier
