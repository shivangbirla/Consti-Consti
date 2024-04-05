import React from "react";
import ServiceComp from "./ServiceComp";
import service1 from "../assets/service-1.svg";
import service2 from "../assets/service-2.svg";
import service3 from "../assets/service-3.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <div
      className="snap-center pt-[10vh] min-h-[80vh] snap-y md:py-[6%]"
      name="services"
      ref={ref}
    >
      <div className="hidden md:flex justify-end mb-[5%]">
        <button className="border border-[#85D3FA] px-4 py-2 mr-14 rounded-lg text-[#FFFFFF]">
          Schedule Call
        </button>
      </div>
      <div className="flex w-full">
        <h1 className="mx-auto text-[22px] sm:text-[28px] font-medium text-[#FFFFFF]">
          Our Services
        </h1>
      </div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col items-center"
      >
        <p className="text-[15px] sm:text-[56px] font-bold mb-[10%]">
          <span className="bg-gradient-01 text-transparent bg-clip-text font-outfit">
            Taking your business to{" "}
          </span>
          <span className="bg-gradient text-transparent bg-clip-text font-outfit">
            Next Level!
          </span>
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col items-center md:flex-row justify-center gap-[60px] md:gap-[45px] relative"
      >
        <ServiceComp
          img={service1}
          name="Consultancy Services"
          desc="We provide consultancy services to help you improve your business processes, optimize your workflows, and increase your employee satisfaction."
        />
        {/* Horizontal ruler */}
        <hr className="md:flex hidden border border-gray-900 w-0 h-[300px] mx-4" />
        <ServiceComp
          img={service2}
          name="Technology Assessments"
          desc="Our technology assessments help you identify outdated tech and provide recommendations for tech upgrades and optimizations."
        />
        {/* Horizontal ruler */}
        <hr className="md:flex hidden border border-gray-900 w-0 h-[300px] mx-4" />
        <ServiceComp
          img={service3}
          name="UX Consulting"
          desc="Modernize workflows, enhance UX, empower growth; collaborate closely for client alignment and satisfaction."
        />
        <div className="flex md:hidden gradientM-03 -z-1" />
      </motion.div>
      <div className="relative">
        <div className="md:flex hidden gradient-03 -z-1" />
      </div>
    </div>
  );
};

export default Services;
