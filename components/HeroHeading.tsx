"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FaPlane } from "react-icons/fa6";
import Image from "next/image";
import slash from "@/assets/icons/slash.svg";
const HeroHeading = () => {
  const firstPlaces = ["LG", "TOR", "PH", "AB", "NY"];
  const secondPlaces = ["AB", "NY", "OG", "PAR", "LG"];
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
      <h1 className="font-ppmori max-xl:text-center max-xl:text-[8vw]  max-sm:text-[12vw] xl:text-8xl leading-[90%] tracking-[-0.04rem] ">
        <span className="relative">
          <div className="mx-auto max-md:absolute  xl:absolute w-full mb-4 max-xl:w-[50%] max-md:w-full inset-0 h-fit -inset-y-8 uppercase flex gap-2  items-center text-[#d1cece] text-sm ">
            <p>{firstPlaces[placeIndex]}</p>

            <div className="relative w-[80%] ml-4 mr-2 h-fit">
              <hr className=" border-t-[#d1cece] border-dotted w-full  border-t-[3px] " />
              <motion.p
                animate={planeControls}
                className="absolute w-full -inset-y-[6px] h-fit"
              >
                <FaPlane />
              </motion.p>
            </div>

            <p>{secondPlaces[placeIndex]}</p>
          </div>
          It&apos;s A Big
        </span>
        <br className="max-xl:hidden max-md:block block" /> World{" "}
        <br className="max-xl:block max-md:hidden hidden" />
        Out There,
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

      <p className="font-ppmorinormal mt-6 text-2xl max-xl:text-center max-md:text-[4vw] max-xl:text-[2.2vw]">
        Book flight tickets in style with Lyncs
      </p>
    </div>
  );
};

export default HeroHeading;
