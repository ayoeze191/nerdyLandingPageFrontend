import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const Sectors = (props) => {
  const contRef = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    observer.observe(contRef.current);
  }, []);
  return (
    <motion.div
      ref={contRef}
      className="relative px-0 mb-10 w-full mx-auto flex md:mb-0"
      initial={{ y: 100 }}
      animate={{ y: inView ? 0 : 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full relative ">
        <img src={props.image} className="w-full mx-auto h-full" />
      </div>
      <div className="absolute w-full h-full bottom-0 text-white  z-50 flex flex-col justify-end pb-10 pl-10 md:pl-6 md:pb-6 sectors">
        <h1 className="font-Montserrat-Bold text-base  md:text-2xl mb-4">
          {props.sector}
        </h1>
        <h1 className="text-xs md:text-base">{props.text}</h1>
      </div>
    </motion.div>
  );
};
export default Sectors;
