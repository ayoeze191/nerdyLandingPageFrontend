import React, { useEffect, useRef, useState } from "react";
import signature from "./../../Assets/signature.png";
import swiper from "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import "swiper/css";
import react from "./../../Assets/react.png";
import Graphics from "./../../Assets/Graphics.png";
import Developer from "./../../Assets/Developer.png";
import UIUX from "./../../Assets/UIUX.png";
import Courses from "./Courses";
import Signature from "../Ui/Signature";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const WhoShouldJoin = () => {
  const contRef = useRef(null);
  const [inView, setIsInView] = useState(false);
  useEffect(() => {
    console.log(contRef.current.inView);
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting will be true when the element
        // is at least partially visible in the viewport
        setIsInView(entry.isIntersecting);
      },
      {
        root: null, // null = viewport
        rootMargin: "0px", // margin around root
        threshold: 0.1, // fire callback when 10% is visible
      }
    );
    observer.observe(contRef.current);
  }, []);

  return (
    <div className="mx-auto  w-full max-w-7xl" ref={contRef}>
      <div className="w-full py-24 px-5">
        {/* <img
          src={signature}
          className={`${
            inView == true ? "mx-auto mb-20 md:w-96 md:h-[53px]" : "w-0"
          } transition-all duration-700`}
        /> */}
        <Signature contRef={contRef} />
        <div className="text-3xl font-Montserrat-Bold text-white mx-auto text-center mb-5 ">
          WHO SHOULD JOIN THE{" "}
          <span className="text-[#D23431]">NERDYEYE PIPELINE</span>
        </div>
        <div className="text-white font-Montserrat-Medium text-xs  w-5/6 mx-auto text-center mb-20 sm:text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet
          in lacus, duis sagittis. Eget elementum duis
        </div>
        <Courses />
      </div>
    </div>
  );
};

export default WhoShouldJoin;
