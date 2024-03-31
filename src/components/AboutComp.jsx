import React from "react";

const AboutComp = ({ head, bottom }) => {
  return (
    <div className="flex flex-col items-center mx-[70px]">
      <h1 className="font-bold text-[59px] bg-gradient-01 text-transparent bg-clip-text font-outfit">
        {head}
      </h1>
      <p className="text-[18px] text-[#FFFFFF] font-regular">{bottom}</p>
    </div>
  );
};

export default AboutComp;
