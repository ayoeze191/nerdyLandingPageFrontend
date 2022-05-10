import React from 'react'

const How = (props) => {
  return (
    <div className='w-full text-white max-w-lg mx-auto'>
        <div className="px-10 py-8 bg-[#575757] font-Montserrat-Bold rounded-full w-fit mx-auto text-3xl mb-7 text-[#FFFFFF]">{props.value}</div>
        <h3 className='font-Montserrat-Bold text-base text-center mb-5'>{props.title}</h3>
        <h3 className="font-Montserrat-Medium text-center mx-auto mb-16">{props.text}</h3>
    </div>
  )
}

export default How