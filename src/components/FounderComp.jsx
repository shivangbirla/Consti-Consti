import React from "react";

const FounderComp = ({ img, name, position }) => {
  return (
    <div className="relative">
      <img src={img} alt="founder-img" className="w-[329px] h-[409px] z-0" />
      <div className="flex flex-col absolute bottom-[-25px] right-[0px] bg-[#282A36] w-[314px] h-[86px] p-3 pr-6">
        <h1 className="text-[24px] font-medium text-[#FFFFFF]">{name}</h1>
        <p className="text-[16px] font-regular text-[#FFFFFF]">{position}</p>
      </div>
    </div>
  );
};

export default FounderComp;
