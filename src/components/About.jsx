import React from "react";
import AboutComp from "./AboutComp";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useIsSmall } from "@/hooks/utils";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  const isSmall = useIsSmall();
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <div
      className="pt-[20vh] pb-[6vh] md:py-[10%] mobContainer sm:container"
      name="about"
    >
      {/* <div className="hidden md:flex justify-end mb-[3%]">
        <button className="border border-[#85D3FA] px-4 py-2 mr-14 rounded-lg text-[#FFFFFF]">
          Schedule Call
        </button>
      </div> */}
      <div className="flex flex-col items-center">
        <h1 className="text-[22px] sm:text-[28px] font-medium text-[#FFFFFF]">
          About Us
        </h1>
      </div>
      <motion.div
        variants={fadeIn("right", 0.4, isSmall)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col items-center"
      >
        <p className="text-[15px] sm:text-[54px] font-bold mb-10">
          <span className="bg-gradient text-transparent bg-clip-text font-outfit">
            Our team
          </span>{" "}
          <span className="bg-gradient-01 text-transparent bg-clip-text font-outfit">
            is here to help
          </span>
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.4, isSmall)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col items-center mb-[6%]"
      >
        <p className="text-[#FFFFFF] text-[15px] sm:text-[28px] font-regular max-w-[90%] md:max-w-[1200px] text-center px-5 sm:px-0">
          ❝ At Constituents AI & Technology Pvt Ltd, our seasoned team delivers
          tailored solutions to diverse client needs, spanning technology, UX
          design, and business consultancy. We spearhead innovation with
          state-of-the-art technologies like AR/VR and AI, propelling the
          evolution of next-gen solutions for leading AI-based companies. ❞
        </p>
      </motion.div>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:border md:border-[#99b7c4] md:rounded-[32px] md:py-10 md:px-8 md:bg-[#0a1222] gap-[70px] md:gap-[0px] mt-[20%] md:mt-0">
          <AboutComp head="2" bottom="Years of experience" />
          <hr className="hidden md:flex border border-gray-800 w-0 h-[140px]" />
          <AboutComp head="30" bottom="Membered team" />
          <hr className="hidden md:flex border border-gray-800 w-0 h-[140px]" />
          <AboutComp head="5" bottom="Satisfied Clients" />
          <hr className="hidden md:flex border border-gray-800 w-0 h-[140px]" />
          <AboutComp head="2" bottom="International Partners" />
        </div>
      </div>
      <div className="relative">
        <div className="hidden md:flex gradient-02 -z-1" />
      </div>
    </div>
  );
};

export default About;
