import React from "react";
import contactUsImg from "../assets/contactus-img.png";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useIsSmall } from "@/hooks/utils";

const Contact = () => {
  const isSmall = useIsSmall();
  return (
    <div
      className="relative pt-[16%] sm:pt-[25vh] pb-[2%] parent mobContainer sm:container"
      name="contact"
    >
      <img
        src={contactUsImg}
        alt="Say-Prove-Do"
        className="absolute -z-1 w-[1006px] h-[180px] left-[-80px] top-0 hidden sm:flex"
      />
      <div className="flex md:hidden gradientM-05 -z-1" />
      <div className="flex flex-col sm:flex-row justify-center px-7 sm:px-0 sm:gap-[75px] mb-5 md:mb-0">
        <motion.div
          variants={fadeIn("top", 0.2, isSmall)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="min-w-[35%]"
        >
          <p className="font-bold text-[32px] sm:text-[54px]">
            <span className="bg-gradient-01 text-transparent bg-clip-text font-outfit">
              Have a{" "}
            </span>
            <span className="bg-gradient text-transparent bg-clip-text font-outfit">
              project?
            </span>
          </p>
          <p className="font-bold text-[32px] sm:text-[54px] bg-gradient-01 text-transparent bg-clip-text font-outfit mb-4">
            Let's discuss
          </p>
          <p className="text-[15px] sm:text-[24px] font-regular text-[#FFFFFF]">
            Thank you for getting in touch!
          </p>
          <p className="text-[15px] sm:text-[24px] font-regular text-[#FFFFFF]">
            Kindly, Fill the form, have a great day!
          </p>
        </motion.div>
        <div className="z-50 min-w-[40%] mt-12 mb-4 sm:mt-0">
          <ContactForm />
        </div>
      </div>
      <div className="flex justify-end mt-[6%] mr-8">
        <p className="text-[10px] md:text-[16px] font-regular text-[#FFFFFF]">
          2024 ConstituentsAI & Technology
        </p>
      </div>
      <div className="absolute bottom-[1%] md:bottom-[-5%] left-[10%] overflow-y-hidden parent">
        <h1 className="text-[16px] md:text-[64px] text-[#FFFFFF] font-medium">
          ConstituentsAI
        </h1>
      </div>
    </div>
  );
};

export default Contact;
