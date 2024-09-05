"use client";

import { StickyScroll } from "./ui/StickyScroll";
import { LuPlane } from "react-icons/lu";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { travel } from "@/lib/data";
import { motion } from "framer-motion";

export function StickyScrollLyncs() {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  let interval: any;
  useEffect(() => {
    if (!isInView) {
      setActiveCard(0);
      return;
    }
    interval = setInterval(() => {
      setActiveCard((prevCards: number) => {
        return (prevCards + 1) % travel.length;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);
  const backgroundColors = [
    "#6b46c1", // Warm purple
    "#1e40af", // Deep blue
    "#3b82f6", // Bright blue
    // "#4c1d95", // Deep purple
    // "#7c3aed", // Vibrant purple
  ];
  const activeBackgroundColor =
    backgroundColors[activeCard % backgroundColors.length];
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-16 p-14  w-full"
      animate={{
        backgroundColor: activeBackgroundColor,
      }}
      ref={ref}
    >
      <h1 className="flex gap-2 items-center text-2xl font-bold justify-center text-white ">
        <LuPlane />
        Fly with Lyncs
      </h1>
      <StickyScroll content={travel} activeCard={activeCard} />
    </motion.div>
  );
}
