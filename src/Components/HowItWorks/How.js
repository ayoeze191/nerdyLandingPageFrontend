import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { delay } from "motion";
const How = (props, i) => {
  const contRef = useRef(null);
  const [inView, setInView] = useState(false);
  console.log(i);
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
      className="w-full text-white max-w-xl mx-auto"
      initial={{ y: 100 }}
      animate={{ y: inView ? 0 : 100 }}
      transition={{ delay: i * 100 }}
    >
      <div className="px-10 py-8 bg-[#575757] font-Montserrat-Bold rounded-full w-fit mx-auto text-3xl mb-7 text-[#FFFFFF]">
        {props.value}
      </div>
      <h3 className="font-Montserrat-Bold text-base text-center mb-5">
        {props.title}
      </h3>
      <h3 className="font-Montserrat-Medium text-center mx-auto mb-16">
        {props.text}
      </h3>
    </motion.div>
  );
};

export default How;
