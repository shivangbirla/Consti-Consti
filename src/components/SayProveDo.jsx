import React from "react";
import sayProveDo from "../assets/sayprovedo.png";
import spdImg from "../assets/spd-img.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useIsSmall } from "@/hooks/utils";

const SayProveDo = () => {
  const isSmall = useIsSmall();
  return (
    <div className="py-[25%]  flex-col justify-center items-center sm:py-[10%]">
      {/* <div className="hidden md:flex justify-end mb-[3%]">
        <button className="border border-[#85D3FA] px-4 py-2 mr-14 rounded-lg text-[#FFFFFF]">
          Schedule Call
        </button>
      </div> */}
      <div className="flex justify-center mb-5 relative">
        <h1 className="font-medium text-[28px] text-[#FFFFFF]">Our Approach</h1>
        <div className="flex md:hidden gradientM-04 -z-1" />
      </div>
      <div className="flex justify-center mx-auto relative">
        <div className="flex flex-row gap-12 sm:gap-[250px] w-full md:mx-auto  text-center justify-start sm:justify-center ml-8  sm:items-center relative">
          <motion.div
            variants={fadeIn("right", 0.4, isSmall)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[55px] text-right leading-[65px]  sm:leading-[85px] my-8 sm:my-3	opacity-100 sm:text-[92px] font-bold text-[#FFFFFF]"
          >
            <p className="">Say</p>
            <p className="">Prove</p>
            <p className="">Do</p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4, isSmall)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden sm:flex items-center "
          >
            <img
              src={spdImg}
              alt="hero-img"
              className="w-[60px] h-[60px] md:w-[154px] md:h-[165px]"
            />
          </motion.div>
        </div>
        <img
          src={sayProveDo}
          alt="Say-Prove-Do"
          className="absolute -z-1 sm:w-[492px] sm:h-[554px] h-[266px] w-[236px] sm:left-[30%] sm:top-[-12%]"
        />
      </div>
      <motion.div
        variants={fadeIn("top", 0.6, isSmall)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center mt-12 sm:mt-5"
      >
        <p className="text-[#FFFFFF] font-regular text-[14px] px-5 sm:px-0 sm:text-[22px] max-w-[1100px] flex  sm:text-center">
          "At Constituents AI & Technology Pvt Ltd, we embody 'Say, prove, do.'
          By integrating cutting-edge technologies like AR/VR and AI into
          tailored solutions, we demonstrate our commitment to innovation.
          Spearheading next-gen solutions for leading AI-based companies, we
          deliver tangible results that showcase our expertise and value to"
          clients.
        </p>
      </motion.div>
    </div>
  );
};

export default SayProveDo;
