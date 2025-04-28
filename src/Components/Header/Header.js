import React, { useEffect, useRef, useState } from "react";
import Logo from "./../../Assets/logo2.png";
import cart from "./../../Assets/cart.png";
import hamburger from "./../../Assets/hamburger.png";
import Authbutton from "./../../Assets/AuthButton.png";
import angleDown from "./../../Assets/angleDown.png";

const Header = () => {
  const headerRef = useRef(null);
  const [scroll, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const spaceAbove = window.scrollY;
        if (spaceAbove > headerHeight) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`mx-auto  w-full h-[80px]  flex justify-between fixed items-center transition-all duration-300 ease-in-out ${
        scroll ? "fixed z-[9999] w-full rounded-lg top-4" : "top-0"
      }`}
    >
      <div
        ref={headerRef}
        className={`mx-auto max-w-7xl w-4/5 flex justify-between items-center text-white py-4 lg:px-16 sm:w-full transition-all duration-300 ease-in-out ${
          scroll
            ? "bg-white text-black rounded-lg px-4 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="w-16 sm:w-20">
          <img src={Logo} className="w-full" alt="Logo" />
        </div>
        <div
          className={`hidden md:block ${scroll ? "text-black" : "text-white"} `}
        >
          <ul className="flex justify-between w-full gap-6 text-sm font-medium">
            <li className="hover:text-gray-500 cursor-pointer">Services</li>
            <li className="hover:text-gray-500 cursor-pointer">Academy</li>
            <li className="hover:text-gray-500 cursor-pointer">Community</li>
            <li className="hover:text-gray-500 cursor-pointer">WorkForce</li>
            <li className="hover:text-gray-500 cursor-pointer">Store</li>
            <li className="hover:text-gray-500 cursor-pointer">Affiliate</li>
          </ul>
        </div>
        <div
          className={`flex justify-end gap-6 items-center ${
            scroll ? "text-black" : "text-white"
          }`}
        >
          <div className="cursor-pointer">
            <img src={cart} alt="Cart" />
          </div>
          <div className="flex gap-3 items-center">
            <div className="hidden md:block cursor-pointer">
              <img src={Authbutton} alt="Auth Button" />
            </div>
            <div className="hidden md:block cursor-pointer">My Account</div>
            <div className="hidden md:block cursor-pointer">
              <img src={angleDown} alt="Dropdown Icon" />
            </div>
            <div className="md:hidden h-8 cursor-pointer">
              <img src={hamburger} className="w-full h-full" alt="Menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
