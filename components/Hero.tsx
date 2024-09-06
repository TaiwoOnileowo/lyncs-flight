import React from "react";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <div className="relative p-24 w-full h-screen py-32 flex overflow-hidden font-karla bg-[#7852ef]">
      <div className="z-[100] max-w-2xl mt-20">
        <h1 className="text-white/80  text-6xl font-bold">
          Book <span className="font-bold text-white">Flights</span> with{" "}
          <span className="font-bold text-white">Elegant Fashion</span>
        </h1>
        <p className="text-white mt-6 text-xl">Lyncs flight widget appears here</p>
      </div>
      <HeroBackground />
    </div>
  );
};

export default Hero;
