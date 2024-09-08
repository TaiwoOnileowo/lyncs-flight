"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Image from "next/image";
import Lamp from "./ui/lamp1";

const Hero1 = () => {
  return (
    <div className="relative isolate h-screen w-full bg-cover bg-top  overflow-hidden z-[1] bg-plane bg-opacity-50">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[100] bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-90"></div>
      <div className="absolute inset-0 z-[100] bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-90"></div>
      <div className="absolute inset-0 z-[100] bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-90"></div>
      {/* <div className="absolute inset-0  bg-gradient-to-b from-slate-950 via-transparent z-[30] to-slate-950 "></div> */}
      {/* <div className="absolute inset-0  bg-gradient-to-b from-slate-950 via-transparent z-[100] to-slate-950 "></div> */}
      {/* <div className="absolute inset-0  bg-gradient-to-b from-slate-950 via-transparent z-[100] to-slate-950 "></div> */}
      
      {/* Dark Side Panels */}
      {/* <div className="absolute left-0 top-0 h-full w-[400px] bg-slate-950 z-[3]"></div> */}
      {/* <div className="absolute right-0 top-0 h-full w-[400px] bg-slate-950 z-[3]"></div> */}

      {/* Centered Content with the Lamp */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative z-[1000] mt-8  py-4 text-white text-center text-4xl font-medium tracking-tight  md:text-7xl"
        >
         Fly with <br /> Lyncs
        </motion.h1>
      </LampContainer>

      {/* Lamp light effect */}
      {/* <Lamp /> */}
    </div>
  );
};

export default Hero1;
