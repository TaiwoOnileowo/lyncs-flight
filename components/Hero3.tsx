"use client";
import React from "react";
import Button from "./Button";
import slash from "@/assets/icons/slash.svg";
import Image from "next/image";
import Nav from "./Nav";
import FlightWidget from "./FlightWidget";
const Hero3 = () => {
  return (
    <div>
      <div className="relative h-[80vh] p-6 px-16">
        {/* Background image */}
        <div
          className="h-[80vh] w-full absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/travel.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>

        {/* Dark overlay */}
        <div className="bg-slate-800 absolute inset-0 opacity-70 z-10"></div>

        {/* Text content */}
        <div className="relative z-20  h-full ">
          <Nav />
          <div className="mt-20 max-w-[40vw]">
            <h1 className="text-white text-5xl font-bold font-satoshiMedium">
              It&apos;s A Big World Out There,
              <br />{" "}
              <span className="relative z-[1]">
                <span className="z-[3] relative">Go Explore! </span>
                <Image
                  src={slash}
                  alt="slash"
                  className="absolute w-full -bottom-4 z-[2] right-[50%] transform translate-x-[50%]"
                />
              </span>
            </h1>
            <p className="text-slate-300 md:text-[17px] text-[16px] mt-2 py-5  w-full break-words">
              Book flights both local and internationally at the best rates &
              filter by a bunch of factors
            </p>
            <button className=" px-7 hover:text-white flex items-center  bg-white p-3 rounded-md hover:bg-transparent hover:border hover:border-white mt-3 border-b-blue-400 text-black">
              Book a trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
