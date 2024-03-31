import React from "react";
import FounderComp from "./FounderComp";
import whiteFlag from "../assets/white-flg.png";
import fImg from "../assets/f-img.png";

const Founders = () => {
  return (
    <div className="py-[10%] relative w-full">
      <div className="md:flex hidden gradient-05 -z-1" />
      <div className="flex justify-end mb-[5%]">
        <button className="border border-[#85D3FA] px-4 py-2 mr-14 rounded-lg text-[#FFFFFF]">
          Schedule Call
        </button>
      </div>
      <div className="flex flex-col items-center mb-[5%]">
        <h1 className="text-[28px] font-medium text-[#FFFFFF]">Our Leaders</h1>
        <p className="text-[56px] font-bold mb-[10%]">
          <span className="bg-gradient text-transparent bg-clip-text font-outfit">
            Founders{" "}
          </span>
          <span className="bg-gradient-01 text-transparent bg-clip-text font-outfit">
            of ConstituentsAI
          </span>
        </p>
      </div>
      <div className="flex flex-row justify-center gap-[280px]">
        <div className="flex flex-col gap-[130px]">
          <div>
            <FounderComp
              img={whiteFlag}
              name="Shashwat Mehrotra"
              position="Director ConstituentsAI"
            />
          </div>
          <div className="ml-[60px]">
            <FounderComp
              img={whiteFlag}
              name="Shashwat Mehrotra"
              position="Director ConstituentsAI"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[130px]">
          <div>
            <img src={fImg} alt="some-img" className="w-[153px] h-[165px]" />
          </div>
          <div>
            <FounderComp
              img={whiteFlag}
              name="Shashwat Mehrotra"
              position="Director ConstituentsAI"
            />
          </div>
          <div className="ml-[60px]">
            <FounderComp
              img={whiteFlag}
              name="Shashwat Mehrotra"
              position="Director ConstituentsAI"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
