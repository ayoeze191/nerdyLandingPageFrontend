import React, { useState } from 'react'
import How from './How'


const HowItWorks = () => {
    const [lis, setlis] = useState([
        {value: '1', title: 'Title goes here', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis'},
        {value: '2', title: 'Title goes here', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis'},
        {value: '3', title: 'Title goes here', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis'},
    ])

  return (
    <div className='block md:w-full px-8 mx-auto bg-[#222222]/40  py-14 text-white'>
        <h3 className='text-white font-Montserrat-Bold text-3xl text-center mb-10'>HOW IT WORKS</h3>
        <div className='sm:flex sm:gap-10  2xl:container'>
        {lis.map((a) =>  <How {...a} />)}
        </div>
    </div>
  )
}

export default HowItWorks