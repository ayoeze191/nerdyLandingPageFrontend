import React from 'react'
import Logo from "./../../Assets/logo2.png"
import cart from "./../../Assets/cart.png"
import hamburger from "./../../Assets/hamburger.png"
import Authbutton from "./../../Assets/AuthButton.png"
import angleDown from "./../../Assets/angleDown.png"




const Header = () => {
  return (
    <div className='mx-auto flex justify-between items-center text-white w-5/6   sm:container p-4'>
    <div className='w-16 sm:w-20'>
        <img src={Logo} className = 'w-full'/>
    </div>
    <div className=' hidden md:block'>
        <ul className='flex justify-between w-full gap-4'>
            <li>Services</li>
            <li>Academy</li>
            <li>Community</li>
            <li>WorkForce</li>
            <li>Store</li>
            <li>Affliate</li>
        </ul>
    </div>
    <div className='flex  justify-end gap-6'>
       <div className=''><img src={cart} /></div> 
       <div className='flex gap-3'>
       <div className='hidden md:block'><img src={Authbutton} /></div> 
       <div className='hidden md:block '>My Account</div> 
       <div className=' hidden md:block'><img src={angleDown} /></div> 
       <div className='md:hidden h-8'><img src={hamburger} className = 'w-full h-full'/></div>
       </div>
    </div>
    </div>
  )
}

export default Header