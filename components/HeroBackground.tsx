"use client";
import React from "react";
import Image from "next/image";
import city from "@/assets/images/city.jpg";
import plane from "@/assets/images/plane.png";
import cloud from "@/assets/images/cloud.jpg";
import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <>
      {/* Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute z-[10] inset-0 bg-gradient-to-br from-[#ffffff] via-[#00afef] to-[#3b82f6] w-[80%] h-[100%] -top-[20%] -left-[20%] rounded-full gradient-blur "
      ></motion.div>

      {/* Background Overlay for the City */}
      <div className="absolute inset-0 z-[5] bg-[#3b82f6] opacity-80"></div>

      {/* City Background with Cloud Effect */}
      <div className="absolute z-[4] inset-0">
        <Image
          src={city}
          alt="city"
          className="w-full h-full object-cover opacity-70"
          priority
        />
        {/* Cloud Effect Overlay */}
        <div className="absolute inset-0 bg-white opacity-50 blur-lg"></div>
      </div>

      {/* Circular Plane Background */}
      <div className="rounded-full border-[80px] absolute -right-[40%] z-[10] -top-[50%] border-[#00afef] h-[1200px] w-[1200px]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 rounded-full"></div>
        <Image
          src={city}
          alt="city"
          className="w-full h-full rounded-full object-cover opacity-50"
          priority
        />
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            y: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="absolute bottom-[5%] left-[10%] w-[500px] h-[500px] rounded-full z-[8] gradient-blur1 flex items-end"
        >
          <Image src={cloud} alt="cloud" priority className="w-full h-full opacity-50" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0.5,
            scale: 0.5,
            x: 50,
            y: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="absolute top-[45%] -left-[20%] z-[10] w-[800px]"
        >
          <Image src={plane} alt="plane" priority />
        </motion.div>
      </div>
    </>
  );
};

export default HeroBackground;
