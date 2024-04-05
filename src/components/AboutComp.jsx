import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutComp = ({ head, bottom }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <div className="flex flex-col items-center mx-[70px]" ref={ref}>
      <h1 className="font-bold text-[59px] bg-gradient-01 text-transparent bg-clip-text font-outfit">
        {inView ? <CountUp start={0} end={head} duration={2} /> : null}+
      </h1>
      <p className="text-[18px] text-[#FFFFFF] font-regular">{bottom}</p>
    </div>
  );
};

export default AboutComp;
