
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
      <div className=" h-[95%] max-md:gap-2 gap-5 flex flex-col">
        <div className="bg-white max-sm:h-[60%] xl:h-[80%] max-xl:h-[87%]  rounded-2xl  mt-4 p-3 md:px-12 flex max-xl:flex-col gap-6 items-center max-xl:justify-center justify-between">
          <HeroHeading />
          <div className=" xl:h-full max-md:hidden h-[45%]">
            <VideoRecord />
          </div>
        </div>
        <HeroBottom />
      </div>
    </div>
  );
};

export default Hero2;
