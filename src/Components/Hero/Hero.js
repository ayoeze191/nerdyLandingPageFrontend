import React, { useEffect, useState } from "react";
import Lady from "./../../Assets/ladyHero.png";
import Ellipse1 from "./../../Assets/Ellipse483 (1).png";
import Ellipse2 from "./../../Assets/Ellipse2.png";
import Loading from "../Ui/Loading";
// import { useState, useEffect } from "react";
const Hero = () => {
  // note we are using usestate because the states we are managing is local to the components
  const [loading, setIsloading] = useState(true);

  const runfuction = () => {
    // assuming there is an api we would have axios installed and make the api request here which will now enable use make our setloading false
    setIsloading(false);
  };

  //   <div className="mx-auto w-4/5  relative z-50 lg:w-[initial] max-w-xl md:max-w-none my-auto">
  //             <img src={Lady} className="w-full md:h-[27rem] lg:h-[27rem]" />
  //           </div>

  let body = null;
  if (loading) {
    body = <Loading />;
  } else {
    body = (
      <div className="mx-auto mt-[100px] md:mt-0">
        {" "}
        <div className="flex flex-col md:flex-row mx-auto gap-16 ">
          <div className="flex flex-col gap-8 md:items-start mx-auto px-4 md:px-0 items-center  w-[90%] md:container text-left md:w-fit max-w-7xl ">
            <AnimatedText />
            <h3 className="text-center text-xs font-Montserrat-Medium md:text-sm md:text-base md:text-left w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum lectus placerat id in vehicula felis
            </h3>
            <button className="bg-[#D23432] border-0 rounded-md px-4 text-base font-Montserrat-Bold py-4 md:px-6 mx-auto md:ml-0">
              For Talents
            </button>
            <div className="flex w-full justify-center gap-20 md:justify-start">
              <div className="flex flex-col">
                <div className="flex font-Montserrat-Bold text-3xl md:text-5xl">
                  120<span className="text-[#D23432]">+</span>
                </div>
                <div>Recruiters</div>
              </div>

              <div>
                <div className="flex font-Montserrat-Bold text-3xl md:text-5xl">
                  200<span className="text-[#D23432]">+</span>
                </div>
                <div>Talents</div>
              </div>
            </div>
          </div>{" "}
          <div className="mx-auto w-4/5 md:w-full relative  lg:w-[initial] my-auto">
            <img src={Lady} className="w-full md:h-[27rem] lg:h-[27rem]" />
          </div>
        </div>
        {/* <div className="overflow-visible absolute  w-full mb-10 md:mb-0 lg:justify-center h-full"> */}
        <div className="w-48 absolute h-48 top-0  lg:w-64 lg:h-64 ml-[75%] -mb-32 lg:mt-10 lg:ml-[65%] z-50 ">
          <img src={Ellipse2} className="w-full h-full" />
        </div>
        <div className="w-48 absolute h-48 lg:w-64 lg:h-64  right-[36rem] bottom-0 z-40 -mt-20 -ml-10 lg:-ml-0">
          <img src={Ellipse2} className="w-full h-full" />
        </div>
        {/* </div> */}
      </div>
    );
  }

  useEffect(() => {
    setTimeout(runfuction, 1000);
  }, []);

  return (
    <div className="hero   mx-auto  text-white w-full flex flex-col justify-center items-center gap-10 md:gap-0 md:flex-row md:justify-between overflow-hidden flex-1 lg:pl-16 md:pl-8 ">
      {body}
    </div>
  );
};

export default Hero;
//  MATCHED & LET YOUR JOB FIND YOU
const AnimatedText = () => {
  const text = "GET MATCHED & LET YOUR JOB FIND YOU";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      setDisplayedText(text.slice(0, idx));

      // reset index once we've shown the whole string
      if (idx > text.length) idx = 0;
    }, 100); // adjust typing speed here

    // cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-Montserrat-Bold text-2xl text-center md:text-left md:text-3xl lg:text-4xl w-full max-w-xl md:max-w-none mx-auto">
      {displayedText}
    </h1>
  );
};
//   export default AnimatedText;
