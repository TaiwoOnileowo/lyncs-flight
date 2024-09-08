"use client";
import Image from "next/image";
import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FaPlane } from "react-icons/fa6";
const Nav = () => {
  const planeControls = useAnimationControls();
  const onMouseEnter = () => {
    planeControls.start({
      rotate: -30,
      transition: { duration: 0.3 },
    });
  };
  const onMouseLeave = () => {
    planeControls.start({
      rotate: 0,
      transition: { duration: 0.3 },
    });
  };
  return (
    <div className="flex w-full justify-between">
      <Image
        src="https://www.lyncs.africa/images/logo-light.svg"
        alt="Lyncs Logo"
        width={100}
        height={100}
      />
      <button
        className="rounded-full text-white items-center justify-center w-[150px] from-[#00AFEF] to-blue-500 bg-gradient-to-r flex gap-3 "
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Book Flight{" "}
        <motion.span animate={planeControls} className="">
          <FaPlane />
        </motion.span>
      </button>
    </div>
  );
};

export default Nav;
