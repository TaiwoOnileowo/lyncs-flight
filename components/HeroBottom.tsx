"use client";
import React from "react";
import Flips from "./Flips";
import { motion, useAnimationControls } from "framer-motion";
import { FaPlane } from "react-icons/fa6";
const HeroBottom = () => {
  const paddingControls = useAnimationControls();

  const onMouseEnter = () => {
    paddingControls.start({
      paddingLeft: "60px",
      transition: { duration: 0.6 },
    });
  };

  const onMouseLeave = () => {
    paddingControls.start({
      paddingLeft: "16px",
      transition: { duration: 0.6 },
    });
  };
  return (
    <div className="w-full flex max-md:flex-col items-center justify-center max-xl:h-[13%]  max-md:h-[30%] h-[20%] gap-4 ">
      <Flips />
      <div
        className="max-md:w-full max-xl:w-[40%] xl:w-[30%] h-full  text-white from-[#00AFEF] to-blue-500 bg-gradient-to-r  rounded-2xl flex items-center justify-center"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <button className=" flex justify-center w-full font-ppmori max-md:text-2xl max-lg:text-3xl text-4xl   items-center gap-4">
          Book Flight
          <motion.span
            className="bg-white text-blue-500  max-md:text-3xl max-lg:text-4xl  text-5xl gap-3  justify-between rounded-full inline-flex items-center p-4"
            animate={paddingControls}
          >
            <motion.span className="before:content-none after:content-none">
              <FaPlane />
            </motion.span>
          </motion.span>
        </button>
      </div>
    </div>
  );
};

export default HeroBottom;
