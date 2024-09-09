"use client"
import React from "react";
import Nav from "./Nav";
import VideoRecord from "./VideoRecord";
import HeroHeading from "./HeroHeading";
import HeroBottom from "./HeroBottom";
const Hero2 = () => {
  return (
    <div className="h-screen bg-black w-full p-3 md:p-6 max-md:py-4">
      <div className=" h-[5%]">
        <Nav />
      </div>
      <div className=" h-[95%] gap-5 flex flex-col">
        <div className="bg-white h-[60%] md:h-[80%] rounded-2xl  mt-6 p-3 px-12 flex items-center max-md:justify-center justify-between">
          <HeroHeading />
          <VideoRecord />
        </div>
        <HeroBottom />
      </div>
    </div>
  );
};

export default Hero2;
