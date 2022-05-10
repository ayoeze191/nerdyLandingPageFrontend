import React from 'react'
import signature from "./../../Assets/signature.png"
const WhoShouldJoin = () => {
  return (
    <div className='w-full py-10'>
        <img src={signature}  className = 'mx-auto mb-10 md:w-96 md:h-[53px]'/>
        <div className="text-3xl font-Montserrat-Bold text-white mx-auto text-center mb-10 ">WHO SHOULD JOIN THE <span className='text-[#D23431]'>NERDYEYE PIPELINE</span></div>
        <div className='text-white font-Montserrat-Medium text-xs  w-5/6 mx-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis</div>
    </div>
  )
}

export default WhoShouldJoin