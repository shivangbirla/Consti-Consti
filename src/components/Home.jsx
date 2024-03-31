import React from "react";

const Home = () => {
  return (
    <div
      className="mt-[8%] pb-[8%] flex flex-col gap-[20px] sm:gap-[120px]"
      name="home"
    >
      <div className="flex flex-col sm:items-center p-8 sm:p-0">
        <h1 className="text-[15px] sm:text-[22px] font-medium text-[#FFFFFF] sm:mb-0 mb-5">
          Welcome to Constituents AI & Technologies
        </h1>
        <p className="text-[21px] sm:text-[56px] text-[#FFFFFF] font-bold">
          We make Everything Look
        </p>
        <p className="text-[21px] sm:text-[56px] font-bold mb-5 sm:mb-10">
          <span className="text-gray-400">As </span>
          <span className="bg-gradient text-transparent bg-clip-text font-outfit">
            good and simplified{" "}
          </span>
          <span className="text-gray-400">as you want</span>
        </p>
        <p className="text-[#FFFFFF] text-[12px] sm:text-[20px] font-regular sm:max-w-[70%] flex sm:text-center">
          Empowering clients through modernized technology and workflows via
          automation, UX consulting, and technology assessments, with a
          collaborative, project-based approach.
        </p>
      </div>
      <div className="md:hidden relative flex text-[#FFFFFF] px-8">
        <button className="border-[1.5px] border-[#85D3FA] px-5 py-2 rounded-[50px]">
          Schedule Call
        </button>
        <div className="gradientM-02 -z-1" />
      </div>
      <div className="md:flex hidden justify-center relative">
        <button className="bg-[#FFFFFF] text-slate-800 text-[20px] font-medium py-4 px-6 rounded-[50px]">
          Our Services
        </button>
        <div className="gradient-02 -z-1" />
      </div>
    </div>
  );
};

export default Home;
