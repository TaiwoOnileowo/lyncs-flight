import React from "react";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <div className="relative p-24 w-full h-screen flex items-center overflow-hidden font-karla bg-[#7852ef]">
      <div className="z-[100] max-w-2xl">
        <h1 className="text-white/80  text-7xl">
          Book <span className="font-bold text-white">Flights</span> with{" "}
          <span className="font-bold text-white">Elegant Fashion</span>
        </h1>
      </div>
      <HeroBackground />
    </div>
  );
};

export default Hero;
