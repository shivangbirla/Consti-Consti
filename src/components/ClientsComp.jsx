import React from "react";
import cImg from "../assets/c-img.png";

const ClientsComp = ({ logo, desc, imgTitle, isReverse }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`flex ${
          isReverse ? "sm:flex-row-reverse md:gap-[140px]" : "sm:flex-row"
        } max-w-[80%] justify-around flex-col-reverse`}
      >
        <div className="min-w-[80%] sm:min-w-[46%] flex justify-center">
          <div className="flex flex-row">
            <div className="min-w-[50px] mr-4">
              <img
                src={cImg}
                alt="c-logo"
                className="w-[42px] h-[42px] mt-10"
              />
            </div>
            <div>
              <div className="flex flex-row items-center sm:min-h-[120px] w-full">
                <img
                  src={logo}
                  alt="clients-logo"
                  className="sm:w-[226px] sm:h-full w-[142px] h-full sm:mt-0 mt-10 sm:mb-0 mb-5"
                />
              </div>
              <p className="text-[#FFFFFF] text-[15px] sm:text-[20px] font-medium max-w-[80%]">
                {desc}
              </p>
            </div>
          </div>
        </div>
        <div className="sm:min-w-[46%] flex justify-center">
          <div className="sm:w-[372px] sm:h-[227px] w-full h-[195px] border border-[#99b7c4] bg-[#0a1222] rounded-[24px] flex justify-start items-end p-4">
            <div className="text-[#87B0F1] font-medium text-[20px] max-w-[200px]">
              {imgTitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsComp;
