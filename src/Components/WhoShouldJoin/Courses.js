import React from 'react'
import { useState } from 'react'
import react from './../../Assets/react.png'
import Graphics from './../../Assets/Graphics.png'
import Developer from './../../Assets/Developer.png'
import UIUX from './../../Assets/UIUX.png'
import Course from './Course';
import swiper from "swiper/css/bundle"
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle'
import 'swiper/css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])


const Courses = () => {
    const [lis, setLis] = useState([
        {image: UIUX, title: 'UIUX'},
        {image: react, title: 'React Developer'},
        {image: Graphics, title: 'Graphic Design'},
        {image: Developer, title: 'Developer'},
      ])
    
  return (
    <div className=''>
 
        <Swiper
        loop = {true}
        speed={600}
      spaceBetween={50}
      autoplay = {{"delay": 5000}}
      pagination = {{clickable: true}}
      navigation = {true}
      // scrollbar={{ draggable: true }}
      slidesPerView='auto'
      breakpoints={{320: {
        slidesPerView: 1,
        spaceBetween: 40,
        
      },640: {
        slidesPerView: 2,
        spaceBetween: 40
      },  800: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 40
      }}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoHeight = {true}
      
      >
        {lis.map((a) => <SwiperSlide> 
          <Course {...a}/>
          </SwiperSlide>)}
        </Swiper>

    </div>
  )
}

export default Courses