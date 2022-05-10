import React from 'react'

const Course = (props) => {
  return (
    <div className='bg-[#222222]/40 rounded-3xl'>
      <div><img src = {props.image} /></div>
      <h2 className='text-lg text-[#ffffff] font-Montserrat-Bold'>{props.title}</h2>
      <h3 className="text-sm text-[#D23431] font-Montserrat-Medium">120 Jobs available</h3>
    </div>
  )
}

export default Course