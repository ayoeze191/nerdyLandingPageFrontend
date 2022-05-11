import React from 'react'

const Sectors = (props) => {
  return (
    <div className='relative  px-0 mb-10 w-4/5 mx-auto flex  md:mb-0'>
        <div className='w-full relative '>
            <img src={props.image} className = 'w-full mx-auto h-full' />
        </div>
        <div className='absolute w-full h-full bottom-0 text-white  z-50 flex flex-col justify-end pb-10 pl-10 md:pl-6 md:pb-6 sectors'>
            <h1 className='font-Montserrat-Bold text-2xl mb-4'>{props.sector}</h1>
            <h1>{props.text}</h1>
        </div>

    </div>
  )
}
export default Sectors