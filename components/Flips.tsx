"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FlipText } from "./FlipText";
const Flips = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [firstSquareTexts, setFirstSquareTexts] = useState([
    "Best Rates",
    "Safe Travel",
    "Go Explore",
    "Book Now",
  ]);
  const [secondSquareTexts, setSecondSquareTexts] = useState([
    "Peaceful Travel",
    "You Deserve Rest",
    "Best rates",
    "Book Now",
  ]);
  const [thirdSquareTexts, setThirdSquareTexts] = useState([
    "Travel with Style",
    "Travel with Lyncs",
    "Comfortable Seats",
    "Book Now",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="max-md:w-full w-[70%] text-white max-md:border-white/80 border-white border-2 h-full rounded-2xl grid max-md:grid-cols-2 grid-cols-3">
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
      <div className="max-md:hidden flex h-full items-center justify-center ">
        <FlipText key={thirdSquareTexts[activeIndex]}>
          {thirdSquareTexts[activeIndex]}
        </FlipText>
      </div>
    </div>
  );
};

export default Flips;
