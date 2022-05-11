import React, { startTransition, useState } from "react";
import DavidMArk from "./../../Assets/DavidMArk.png";
import Ellenwills from "./../../Assets/Ellenwills.png";

import JoeDoe from "./../../Assets/JoeDoe.png";
import signature from "./../../Assets/signature.png";

import swiper from "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Zoom,
  EffectCoverflow,
} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import "swiper/css";
import Testifier from "./Testifier";
const SuccesStory = () => {
  const [lis, setlis] = useState([
    {
      image: DavidMArk,
      name: "Dave Mark",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse id enim auctor ultricies vulputate nisl sit lacus proin. Viverra nisl morbi commodo bibendum imperdiet. Vulputate in sed amet, malesuada vel vel. Diam, massa libero vestibulum, interdum enim eu nec. Sociis condimentum molestie sed vulputate turpis maecenas felis duis. In posuere sit malesuada non orci sagittis sit.",
    },
    {
      image: JoeDoe,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse id enim auctor ultricies vulputate nisl sit lacus proin. Viverra nisl morbi commodo bibendum imperdiet. Vulputate in sed amet, malesuada vel vel. Diam, massa libero vestibulum, interdum enim eu nec. Sociis condimentum molestie sed vulputate turpis maecenas felis duis. In posuere sit malesuada non orci sagittis sit.",
    },
    {
      image: Ellenwills,
      name: "Helen Wills",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse id enim auctor ultricies vulputate nisl sit lacus proin. Viverra nisl morbi commodo bibendum imperdiet. Vulputate in sed amet, malesuada vel vel. Diam, massa libero vestibulum, interdum enim eu nec. Sociis condimentum molestie sed vulputate turpis maecenas felis duis. In posuere sit malesuada non orci sagittis sit.",
    },
  ]);
  return (
    <div className="mt-20">
      <img
        src={signature}
        className="mx-auto mb-14 lg:mb-14 lg:w-96 lg:h-[53px]"
      />
      <h1 className="text-[#ffffff] font-Montserrat-Bold  text-3xl text-center mb-10">
        SUCCESS STORIES
      </h1>
      <h1 className="text-[#ffffff] font-Montserrat-Medium text-center mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
        lectus placerat id in vehicula facilisi. Fusce tellus fringill
      </h1>
      <div className="testifiers w-[]90%] mx-auto max-w-[1950px]">
        <Swiper
          onInit={(swiper) => {
            swiper.activeIndex = 1;
            swiper.params.slideActiveClass = "activ";
          }}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            // slideShadows: true,
            transformEl: ".image",
          }}
          centeredSlides={true}
          speed={600}
          spaceBetween={110}
          modules={[EffectCoverflow, Pagination]}
          //   autoplay = {{"delay": 5000}}
          pagination={{ clickable: true }}
          navigation={true}
          //   loop = {true}
          // scrollbar={{ draggable: true }}

          slidesPerView={"auto"}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoHeight={true}
          slideToClickedSlide={true}
        >
          {lis.map((a) => (
            <SwiperSlide>
              <Testifier {...a} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SuccesStory;
