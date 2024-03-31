import React from "react";
import projectLogo from "../assets/arrow-outward.svg";

const ProjectsComp = ({ img, name, link }) => {
  return (
    <div className="flex flex-col border border-[#99b7c4] rounded-[32px] p-2 bg-[#0a1222] max-w-[300px]">
      <img
        src={img}
        alt={name}
        className="w-full h-[70%] rounded-[20px] object-cover"
      />
      <h1 className="text-[18px] font-regular text-[#FFFFFF] ml-2 mt-1">
        {name}
      </h1>
      <div className="flex justify-end mt-2">
        <div className="w-[28px] h-[28px] flex justify-center items-center rounded-[50%] bg-[#191B28] mr-4">
          <a href={link}>
            <img
              src={projectLogo}
              alt="Link-logo"
              className="w-[12.5px] h-[12.5px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComp;
