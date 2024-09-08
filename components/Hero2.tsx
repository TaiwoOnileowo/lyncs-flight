"use client";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import slash from "@/assets/icons/slash.svg";
import Image from "next/image";
import { FaPlane } from "react-icons/fa6";
import { useAnimationControls, motion, AnimatePresence } from "framer-motion";
import { FlipText } from "./FlipText";
const Hero2 = () => {
  const paddingControls = useAnimationControls();
  const planeControls = useAnimationControls();
  const [activeIndex, setActiveIndex] = useState(0);
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
  const [firstSquareTexts, setFirstSquareTexts] = useState([
    "Best Rates",
    "Safe Travel",
    "Comfortable Seats",
    "Book Now",
  ]);
  const [secondSquareTexts, setSecondSquareTexts] = useState([
    "Peaceful Travel",
    "You Deserve Rest",
    "Go Explore",
    "Book Now",
  ]);
  const [thirdSquareTexts, setThirdSquareTexts] = useState([
    "Travel with Style",
    "Travel with Lyncs",
    "Best rates",
    "Book Now",
  ]);
  const onMouseEnter = () => {
    paddingControls.start({
      paddingLeft: "60px",
      transition: { duration: 0.6 },
    });
  };

  useEffect(() => {
    const startPlaneAnimation = async () => {
      // Start the plane animation
      await planeControls.start({
        x: ["0%", 300], // Plane travels 300px
        transition: {
          duration: 4,
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

  const onMouseLeave = () => {
    paddingControls.start({
      paddingLeft: "16px",
      transition: { duration: 0.6 },
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-screen bg-black w-full p-6">
      <div className="h-[5%]">
        <Nav />
      </div>
      <div className=" h-[95%] gap-5 flex flex-col">
        <div className="bg-white h-[80%] rounded-2xl  mt-6 p-3 px-12 flex items-center justify-between">
          <div>
            <h1 className="font-ppmori text-8xl leading-[90%] tracking-[-0.04rem] ">
              <span className="relative">
                {" "}
                <div className="absolute text-[#d1cece] text-sm -inset-y-9 inset-0 justify-center ">
                  <div className="uppercase flex gap-2 justify-center items-center">
                    <p>{firstPlaces[placeIndex]}</p>
                    <div className="ml-8 mr-2 border-t-[3px] relative border-t-[#d1cece] border-dotted w-[400px] border-black">
                      <motion.span
                        animate={planeControls}
                        className="absolute  rounded-full bg-white w-6 h-6 -top-[14px] -left-7 flex items-center justify-center"
                      >
                        <FaPlane />
                      </motion.span>
                    </div>
                    <p>{secondPlaces[placeIndex]}</p>
                  </div>
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

            <p className="font-ppmorinormal mt-6 text-2xl">
              Book flight tickets in style with Lyncs
            </p>
          </div>
          <div className="relative z-[1] h-full rounded-full overflow-hidden w-fit border-[5px] border-gray-200">
            <div className="absolute bottom-0 -right-4 z-[3]">
              <video
                autoPlay
                loop
                muted
                className="w-[300px] h-full object-cover "
              >
                <source src="/record.mp4" type="video/mp4" />
              </video>
            </div>
            <video
              autoPlay
              loop
              muted
              className="w-[300px] h-full object-cover rounded-full z-[2]"
            >
              <source src="/sky.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="w-full flex items-center justify-center  h-[20%] gap-4 ">
          <div className="w-[70%] text-white border-white border-2 h-full rounded-2xl grid grid-cols-3">
            <div className="flex items-center justify-center border-r border-gray-200/50">
              <AnimatePresence mode="wait" initial={false}>
                <FlipText key={firstSquareTexts[activeIndex]}>
                  {firstSquareTexts[activeIndex]}
                </FlipText>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-center border-r border-gray-200/50">
              <FlipText key={secondSquareTexts[activeIndex]}>
                {secondSquareTexts[activeIndex]}
              </FlipText>
            </div>
            <div className="flex h-full items-center justify-center ">
              <FlipText key={thirdSquareTexts[activeIndex]}>
                {thirdSquareTexts[activeIndex]}
              </FlipText>
            </div>
          </div>{" "}
          <div
            className="w-[30%] h-full  text-white from-[#00AFEF] to-blue-500 bg-gradient-to-r  rounded-2xl flex items-center justify-center"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <button className=" flex justify-center w-full font-ppmori text-4xl   items-center gap-4">
              Book Flight
              <motion.span
                className="bg-white text-blue-500  text-5xl gap-3 h-20 justify-between rounded-full inline-flex items-center p-4"
                animate={paddingControls}
              >
                <motion.span className="before:content-none after:content-none">
                  <FaPlane />
                </motion.span>
              </motion.span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
