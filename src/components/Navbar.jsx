import React from "react";
import consti_logo from "../assets/consti-logo.svg";
import { Link } from "react-scroll";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <nav className="z-30 fixed backnavdrop top-0  w-screen  shadow-2xl">
      <div className="w-full flex flex-row justify-between text-[#FFFFFF] sm:pt-8 sm:pb-6 py-6 px-6 sm:px-14">
        <div className="flex-row items-center gap-2 md:flex hidden">
          <img src={consti_logo} alt="consti-logo" />
          <span className="text-[20px] ">ConstituentsAI</span>
        </div>
        <div className="hidden md:flex">
          <ul className="flex flex-row items-center gap-10">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onSetActive={handleSetActive}
              className="cursor-pointer"
            >
              <li>Home</li>
            </Link>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
              className="cursor-pointer"
            >
              <li>Services</li>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
              onSetActive={handleSetActive}
              className="cursor-pointer"
            >
              <li>About</li>
            </Link>
            <Link
              activeClass="active"
              to="clients"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
              onSetActive={handleSetActive}
              className="cursor-pointer"
            >
              <li>Clients</li>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              onSetActive={handleSetActive}
              className="cursor-pointer"
            >
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="md:hidden w-full flex flex-row justify-between items-center">
          <div>
            <img src={consti_logo} alt="consti-logo" />
          </div>
          <div className="z-40">
            <MobileNav />
          </div>
        </div>
        <div className="md:flex hidden gradient-01 -z-1" />
        <div className="md:hidden flex gradientM-01 -z-1" />
        <div>
          <button
            onClick={() => {
              alert("hello");
            }}
            className="border border-[#85D3FA] px-4 py-2 rounded-lg hidden md:flex"
          >
            Schedule Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
