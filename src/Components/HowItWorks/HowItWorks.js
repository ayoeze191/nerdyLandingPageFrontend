import React, { useEffect, useState } from 'react'
import How from './How'


const HowItWorks = () => {
    const [lis, setlis] = useState([
        ])

      const runfunction = () =>{ 
        // An api call will  be made here to set the state
        const apiValue = [{value: '1', title: 'Title goes here', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis'},
        {value: '2', title: 'Title goes here', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis'},
        {value: '3', title: 'Title goes here', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis'},
      ]
      setlis(apiValue)
    }

    useEffect(() => {
      runfunction()
    }, [])




  return (
    <div className='block w-full mx-auto bg-[#222222]/40 p-10 text-white'>
        <h3 className='text-white font-Montserrat-Bold text-3xl text-center mb-10'>HOW IT WORKS</h3>
        <div className='md:flex sm:gap-10 md:gap-12  w-full sm:container mx-auto '>
        {lis.map((a) =>  <How {...a} />)}
        </div>
    </div>
  )
}

export default HowItWorks