import React from 'react'

const Course = (props) => {
  return (
    <>
      <div className='flex justify-end mb-8'><img src = {props.image} /></div>
      <h2 className='text-lg text-[#ffffff] font-Montserrat-Bold mb-3 lg:text-2xl '>{props.title}</h2>
      <h3 className="text-sm text-[#D23431] font-Montserrat-Medium">120 Jobs available</h3>
    </>
  )
}

export default Course