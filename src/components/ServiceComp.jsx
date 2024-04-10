import React from "react";

const ServiceComp = ({ img, name, desc }) => {
  return (
    <div className="flex flex-col items-center text-[#FFFFFF] max-w-[80%] mx-auto">
      <div className="flex justify-center min-h-[80px]">
        <img src={img} alt={name} className="w-[60px] h-[60px]" />
      </div>
      <div className="flex justify-center md:min-h-[90px] mb-5 md:mb-2">
        <h1 className="font-bold text-[24px] flex justify-center text-center max-w-[180px]">
          {name}
        </h1>
      </div>
      <p className="font-regular text-[16px] flex text-center">{desc}</p>
    </div>
  );
};

export default ServiceComp;
