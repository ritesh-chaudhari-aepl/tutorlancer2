/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import Nav from "../navbar/Navbar";
import MobileNav from "../navbar/Mobilenav";
import logo from '../../assets/capLogo.png'
function Header({ myRef }) {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 70 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive
          ? "top-0 z-30 sm:top-0 sm:py-10 bg-primaryWhite shadow-2xl overflow-hidden"
          : "top-0 sm:top-0 py-10"
      } py-4 sm:py-8 fixed w-full transition-all z-10 bg-primaryWhite`}
    >
      <div className="mx-auto max-w-screen-2xl lg:max-w-screen-xl px-4 pt-3 sm:px-6 flex justify-between items-center">
        {/* logo */}
        <a href="#">
          <span className="font-Inter font-bold tracking-[10px] text-2xl uppercase sm:text-[30px]">
             <img className="w-20 pt-3" src={logo} alt='not found'/> 
          </span>
        </a>
        {/* nav - initially hidden - show on desktop mode */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Nav ref={myRef} />
        </div>
        <div className="hidden lg:block">
          <a
            href="#"
            className="inline-block rounded-full bg-transparent px-3 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
          >
            Sign in
          </a>
          <a
            href="#"
            className="inline-block rounded-full bg-blue-main px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            Sign Up
          </a>
        </div>
        {/* cta button - initially hidden - show on desktop mode */}
        {/* mobile nav trigger btn - hidden on desktop */}
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-primary" />
          ) : (
            <AiOutlineMenu className="text-3xl text-secondary" />
          )}
        </button>
        {/* mobile nav - hidden on desktop */}
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          }  fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
