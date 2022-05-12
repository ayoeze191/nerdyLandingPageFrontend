import React from 'react'
import { useState } from 'react'
import react from './../../Assets/react.png'
import Graphics from './../../Assets/Graphics.png'
import Developer from './../../Assets/Developer.png'
import UIUX from './../../Assets/UIUX.png'
import Course from './Course';
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom, EffectCoverflow } from 'swiper';
import 'swiper/css/pagination';
import LEFTARROW from "./../../Assets/LEFTARROW.png"
import RIGHTARROW from "./../../Assets/RIGHTARROW.png"


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])


const Courses = () => {
    const [lis, setLis] = useState([
        {image: UIUX, title: 'UIUX'},
        {image: react, title: 'React Developer'},
        {image: Graphics, title: 'Graphic Design'},
        {image: Developer, title: 'Developer'},
      ])

    const prevRef = useRef(null)
    const nextRef = useRef(null)
    
  return (
    <div className="courses flex gap-4 items-center">
         <div className='prevNav text-white cursor-pointer mb-10' ref={prevRef}> <img src={LEFTARROW} className = "w-28" /></div>
        <Swiper
       
        loop = {true}
        speed={600}
      spaceBetween={50}
      modules={[Pagination]}
      autoplay = {{"delay": 5000}}
      pagination = {{clickable: true}}
      navigation = {{
          prevEl: prevRef.current?prevRef.current:undefined,
          nextEl: nextRef.current?nextRef.current:undefined
      }}
      onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update()
      }}

   
      slidesPerView={'auto'}
      breakpoints={{320: {
        slidesPerView: 1,
        spaceBetween: 40,
        
      },640: {
        slidesPerView: 2,
        spaceBetween: 40
      },  900: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40
      }}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoHeight = {true}
     
      className = 'w-full'
      >
       
        {lis.map((a) => <SwiperSlide> 
          <Course {...a}/>
          </SwiperSlide>)}
  
        </Swiper>
        <div className='nextNav text-white cursor-pointer mb-10' ref={nextRef}><img src={RIGHTARROW} className = "w-28"/> </div>
    </div>
  )
}

export default Courses