import React, { useState } from 'react'
import Fintech from "./../../Assets/Fintech.png"
import Ecommerce from "./../../Assets/Ecommerce.png"
import HealthCare from "./../../Assets/HealthCare.png"
import Hospitality from "./../../Assets/Hospitality.png"
import Logistics from "./../../Assets/Logistics.png"
import Media from "./../../Assets/Media.png"
import Sectors from './Sectors'



const Browse = () => {
    const [lis, setlis] = useState(
        [
            {image: Logistics,sector: 'Logistics & Transportation',  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis', },
            {image: Fintech,sector: 'Fintech',text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis',},
            {image: Ecommerce,sector: 'Ecommerce',text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis',},
            {image: Media,sector: 'Media',text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis',},
            {image: Hospitality,sector: 'Hospitality', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis',},
            {image: HealthCare,  sector: 'Healthcare', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis',},
            
        ]
    )

  return (
    <div className='bg-[#222222]/40 py-20'>
        <h1 className='text-3xl font-Montserrat-Bold text-white mx-auto text-center mb-5 hidden md:block'>BROWSE BY <span className='text-[#D23431]'>INDUSTRIES</span></h1>
        <h1 className='text-3xl font-Montserrat-Bold text-white mx-auto text-center mb-5 md:hidden'>INDUSTRIES WE <span className='text-[#D23431]'>HIRE</span> FOR</h1>
        <h1 className='text-white font-Montserrat-Medium text-xs  w-[80%] md:w-[50%] mx-auto text-center mb-20 sm:text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis</h1>
        <div className='md:grid grid-cols-3 md:gap-8 w-5/6 sm:container mx-auto'>
           {lis.map((a) => <Sectors {...a}/>)}
        </div>
    </div>
  )
}

export default Browse