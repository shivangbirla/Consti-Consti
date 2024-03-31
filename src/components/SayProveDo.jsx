import React from "react";
import sayProveDo from "../assets/sayprovedo.png";
import spdImg from "../assets/spd-img.png";

const SayProveDo = () => {
  return (
    <div className="py-[25%] sm:py-[10%]">
      <div className="hidden md:flex justify-end mb-[3%]">
        <button className="border border-[#85D3FA] px-4 py-2 mr-14 rounded-lg text-[#FFFFFF]">
          Schedule Call
        </button>
      </div>
      <div className="flex justify-center mb-5 relative">
        <h1 className="font-medium text-[28px] text-[#FFFFFF]">Our Approach</h1>
        <div className="flex md:hidden gradientM-04 -z-1" />
      </div>
      <div className="flex justify-center relative">
        <div className="flex flex-row gap-0 sm:gap-[250px] w-full sm:w-1/2 ml-12 text-center justify-start sm:items-center relative">
          <div className="text-[55px] sm:text-[92px] font-bold text-[#FFFFFF]">
            <p className="">Say</p>
            <p className="">Prove</p>
            <p className="">Do</p>
          </div>
          <div>
            <img
              src={spdImg}
              alt="hero-img"
              className="sm:flex hidden w-[154px] h-[165px]"
            />
          </div>
        </div>
        <img
          src={sayProveDo}
          alt="Say-Prove-Do"
          className="absolute -z-1 sm:w-[492px] sm:h-[554px] h-[266px] w-[236px] sm:left-[30%] sm:top-[-12%]"
        />
      </div>
      <div className="flex justify-center mt-12 sm:mt-5">
        <p className="text-[#FFFFFF] font-regular text-[14px] px-5 sm:px-0 sm:text-[22px] max-w-[1100px] flex  sm:text-center">
          "At Constituents AI & Technology Pvt Ltd, we embody 'Say, prove, do.'
          By integrating cutting-edge technologies like AR/VR and AI into
          tailored solutions, we demonstrate our commitment to innovation.
          Spearheading next-gen solutions for leading AI-based companies, we
          deliver tangible results that showcase our expertise and value to
          clients."
        </p>
      </div>
    </div>
  );
};

export default SayProveDo;