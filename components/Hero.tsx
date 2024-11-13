"use client";
import React from "react";
import HeroBackground from "./HeroBackground";
import { motion } from "framer-motion";
import Nav from "./Nav";
const Hero = () => {
  return (
    <div className="relative">
      <div className="z-[1000] absolute top-0 left-0 w-full h-full p-6 px-10">
        <Nav />
      </div>
      <div className="p-24 w-full h-screen py-32 flex overflow-hidden font-karla ">
        <div className="z-[100] max-w-2xl mt-20">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80  text-6xl font-bold"
          >
            Book <span className="font-bold text-white">Flights</span> with{" "}
            <span className="font-bold text-white">Elegant Fashion</span>
          </motion.h1>
          <p className="text-white mt-6 text-xl">
            Lyncs flight widget appears here
          </p>
        </div>
        <HeroBackground />
      </div>
    </div>
  );
};

export default Hero;
