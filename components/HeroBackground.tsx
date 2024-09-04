import React from "react";
import Image from "next/image";
import city from "@/assets/images/city.jpg";
import plane from "@/assets/images/plane.png";
import cloud from "@/assets/images/cloud.jpg";
const HeroBackground = () => {
  return (
    <>
      {/* Gradient Background */}
      <div className="absolute z-[10] inset-0 bg-gradient-to-br from-[#ffffff] via-[#a5bbfc] to-[#8166f1] w-[80%] h-[100%] -top-[20%] -left-[20%] rounded-full gradient-blur opacity-75"></div>

      {/* Background Overlay for the City */}
      <div className="absolute inset-0 z-[5] bg-[#7852ef] opacity-80"></div>

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
      <div className="rounded-full border-[80px]  absolute -right-[40%] z-[10] -top-[50%] border-[#7e68e8] h-[1200px] w-[1200px]">
        <Image
          src={city}
          alt="city"
          className="w-full h-full rounded-full object-cover opacity-70"
          priority
        />
        <Image
          src={cloud}
          alt="cloud"
          className="absolute bottom-[0%] left-[10%] w-[500px] h-[500px] opacity-60 rounded-full z-[8] gradient-blur1"
        />
        <Image
          src={plane}
          alt="plane"
          className="absolute top-[40%] -left-[20%] z-[10] w-[800px]"
          priority
        />
      </div>
    </>
  );
};

export default HeroBackground;
