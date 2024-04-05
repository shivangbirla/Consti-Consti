import React from "react";
import ProjectsComp from "./ProjectsComp";
import projectsImg from "../assets/projects-img.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Projects = () => {
  return (
    <div className="pt-[6%] pb-[10%] w-full">
      <div className="flex flex-col items-center mb-[5%] relative">
        <div className="gradient-04 -z-1" />
        <h1 className="font-medium text-[28px] text-[#FFFFFF]">Our Projects</h1>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <p className="font-bold text-[48px]">
            <span className="bg-gradient text-transparent bg-clip-text font-outfit">
              Our Projects{" "}
            </span>
            <span className="bg-gradient-01 text-transparent bg-clip-text font-outfit">
              showcasing our skills
            </span>
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("top", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-row justify-center gap-[80px]"
      >
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
      </motion.div>
    </div>
  );
};

export default Projects;
