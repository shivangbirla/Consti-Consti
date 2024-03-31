import React from "react";
import ProjectsComp from "./ProjectsComp";
import projectsImg from "../assets/projects-img.png";

const Projects = () => {
  return (
    <div className="pt-[6%] pb-[10%] w-full">
      <div className="flex flex-col items-center mb-[5%] relative">
        <div className="gradient-04 -z-1" />
        <h1 className="font-medium text-[28px] text-[#FFFFFF]">Our Projects</h1>
        <p className="font-bold text-[48px]">
          <span className="bg-gradient text-transparent bg-clip-text font-outfit">
            Our Projects{" "}
          </span>
          <span className="bg-gradient-01 text-transparent bg-clip-text font-outfit">
            showcasing our skills
          </span>
        </p>
      </div>
      <div className="flex flex-row justify-center gap-[80px]">
        <ProjectsComp
          img={projectsImg}
          name="Project Name-1"
          link="www.google.com"
        />
        <ProjectsComp
          img={projectsImg}
          name="Project Name-1"
          link="www.google.com"
        />
        <ProjectsComp
          img={projectsImg}
          name="Project Name-1"
          link="www.google.com"
        />
      </div>
    </div>
  );
};

export default Projects;
