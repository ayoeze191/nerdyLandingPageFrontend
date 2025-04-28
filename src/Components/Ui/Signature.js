import React, { useEffect, useState } from "react";
import signature from "./../../Assets/signature.png";
const Signature = ({ contRef }) => {
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
    <img
      src={signature}
      className={`${
        inView == true ? "mx-auto mb-20 md:w-96 md:h-[53px]" : "w-0"
      } transition-all duration-700`}
    />
  );
};

export default Signature;
