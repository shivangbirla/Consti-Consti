import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div
      className="mt-[8%] pb-[8%] flex flex-col gap-[20px] sm:gap-[120px]"
      name="home"
    >
      <div className="flex flex-col sm:items-center p-8 sm:p-0">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[15px] sm:text-[22px] font-medium text-[#FFFFFF] sm:mb-0 mb-5"
        >
          Welcome to Constituents AI & Technologies
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[21px] sm:text-[56px] text-[#FFFFFF] font-bold"
        >
          We make Everything Look
        </motion.p>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[21px] sm:text-[56px] font-bold mb-5 sm:mb-10"
        >
          <span className="bg-gradient-01 text-transparent bg-clip-text font-outfit">
            As{" "}
          </span>
          <span className="bg-gradient text-transparent bg-clip-text font-outfit">
            good and simplified{" "}
          </span>
          <span className="bg-gradient-01 text-transparent bg-clip-text font-outfit">
            as you want
          </span>
        </motion.p>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[#FFFFFF] text-[12px] sm:text-[20px] font-regular sm:max-w-[70%] flex sm:text-center"
        >
          Empowering clients through modernized technology and workflows via
          automation, UX consulting, and technology assessments, with a
          collaborative, project-based approach.
        </motion.p>
      </div>
      <div className="md:hidden relative flex text-[#FFFFFF] px-8">
        <motion.button
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="border-[1.5px] border-[#85D3FA] px-5 py-2 rounded-[50px]"
        >
          Schedule Call
        </motion.button>
        <div className="gradientM-02 -z-1" />
      </div>
      <div className="md:flex hidden justify-center relative">
        <motion.button
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="bg-[#FFFFFF] text-slate-800 text-[20px] font-medium py-4 px-6 rounded-[50px]"
        >
          Our Services
        </motion.button>
        <div className="gradient-02 -z-1" />
      </div>
    </div>
  );
};

export default Home;
