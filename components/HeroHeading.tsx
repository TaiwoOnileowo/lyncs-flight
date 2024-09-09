"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FaPlane } from "react-icons/fa6";
import Image from "next/image";
import slash from "@/assets/icons/slash.svg";
const HeroHeading = () => {
  const [firstPlaces, setFirstPlaces] = useState([
    "LG",
    "TOR",
    "PH",
    "AB",
    "NY",
  ]);
  const [secondPlaces, setSecondPlaces] = useState([
    "AB",
    "NY",
    "OG",
    "PAR",
    "LG",
  ]);
  const [placeIndex, setPlaceIndex] = useState(0);
  const planeControls = useAnimationControls();
  useEffect(() => {
    const startPlaneAnimation = async () => {
      // Start the plane animation
      await planeControls.start({
        x: ["0%", "100%"], // Plane travels 300px
        transition: {
          duration: 9,
          ease: "linear",
        },
      });

      // Update the places index after the plane animation completes
      setPlaceIndex((prevIndex) => (prevIndex + 1) % 4);

      // Restart the plane animation after updating the place index
      await planeControls.start({
        x: "0%", // Reset position back to start
        transition: {
          duration: 0, // Instantly reset
        },
      });

      // Continue the animation loop
      startPlaneAnimation();
    };

    startPlaneAnimation(); // Initiate the plane animation
  }, [planeControls]);

  return (
    <div>
      <h1 className="font-ppmori max-md:text-center text-[12vw] md:text-8xl leading-[90%] tracking-[-0.04rem] ">
        <span className="w-fit">
          <div className="uppercase flex gap-2  items-center text-[#d1cece] text-sm ">
            <p>{firstPlaces[placeIndex]}</p>
            <div className="ml-8 mr-2 border-t-[3px] relative border-t-[#d1cece] border-dotted w-[80%] border-black">
              <motion.span
                animate={planeControls}
                className="absolute  rounded-full bg-white w-6 h-6 -top-[14px] -left-7 flex items-center justify-center"
              >
                <FaPlane />
              </motion.span>
            </div>
            <p>{secondPlaces[placeIndex]}</p>
          </div>
          It&apos;s A Big
        </span>
        <br /> World Out There,
        <br />{" "}
        <span className="relative z-[1]">
          <span className="z-[3] relative">Go Explore! </span>
          <Image
            src={slash}
            alt="slash"
            className="absolute w-full -bottom-4 z-[2]"
          />
        </span>
      </h1>

      <p className="font-ppmorinormal mt-6 text-2xl max-md:text-center max-md:text-[4vw]">
        Book flight tickets in style with Lyncs
      </p>
    </div>
  );
};

export default HeroHeading;
