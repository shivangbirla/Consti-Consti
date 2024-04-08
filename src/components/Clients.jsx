import React from "react";
import ClientsComp from "./ClientsComp";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useIsSmall } from "@/hooks/utils";

const Clients = () => {
  const isSmall = useIsSmall();
  return (
    <div className="py-[10%] relative" name="clients">
      <div className="md:flex hidden gradient-06 -z-1" />
      <div className="flex flex-col items-center mb-[8%] sm:mb-[4%]">
        <h1 className="text-[#FFFFFF] text-[22px] sm:text-[28px] font-medium">
          Our Clients
        </h1>
        <motion.p
          variants={fadeIn("down", 0.2, isSmall)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[15px] sm:text-[54px] font-bold"
        >
          <span className="bg-gradient text-transparent bg-clip-text font-outfit">
            Clients{" "}
          </span>
          <span className="bg-gradient-01 text-transparent bg-clip-text font-outfit">
            we’ve worked with
          </span>
        </motion.p>
      </div>
      <div className="flex flex-col gap-[80px] items-center">
        <ClientsComp
          logo={p1}
          desc="Lorem ipsum is the text, which we will write for zencore solutions, how we solved their problem and simplied whole process."
          imgTitle="Nutrichimp Website Shots"
          isReverse={false}
        />
        <ClientsComp
          logo={p2}
          desc="Lorem ipsum is the text, which we will write for zencore solutions, how we solved their problem and simplied whole process."
          imgTitle="School VR Shots"
          isReverse={true}
        />
        <ClientsComp
          logo={p3}
          desc="Lorem ipsum is the text, which we will write for zencore solutions, how we solved their problem and simplied whole process."
          imgTitle="Project Narwhal Shots"
          isReverse={false}
        />
      </div>
      <div className="relative">
        <div className="md:flex hidden gradient-02 -z-1" />
      </div>
    </div>
  );
};

export default Clients;
