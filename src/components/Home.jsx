import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Home = () => {
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <div
      className="z-50  pt-[22vh] min-h-[80vh] snap-center flex flex-col justify-center gap-[20px] sm:gap-[90px]"
      name="home"
    >
      <div className="flex flex-col sm:items-center p-8 sm:p-0">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[15px] font-satoshi sm:text-[22px] font-medium text-[#FFFFFF] sm:mb-0 mb-5"
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
          className="text-[21px] sm:text-[56px] font-bold mb-5 sm:mb-8"
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
          className="text-[#FFFFFF] text-[12px] sm:text-[20px] font-regular sm:max-w-[50%] flex sm:text-center"
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
          <motion.button
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="bg-[#FFFFFF] text-slate-800 text-[20px] font-medium py-4 px-6 rounded-[50px]"
          >
            Our Services
          </motion.button>
        </Link>
        <div className="gradient-02 -z-1" />
      </div>
    </div>
  );
};

export default Home;
