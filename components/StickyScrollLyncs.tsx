"use client";

import { StickyScroll } from "./ui/StickyScroll";
import { LuPlane } from "react-icons/lu";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { travel } from "@/lib/data";
import { motion } from "framer-motion";
import CurvedBorder from "./ui/CurvedBorder";
import { useAppContext } from "@/context";
export function StickyScrollLyncs() {
  const { activeBg, setActiveBg } = useAppContext();
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
  useEffect(() => {
    setActiveBg(backgroundColors[activeCard]);
  }, [activeCard]);
  const backgroundColors = [
    "#6b46c1", // Warm purple
    "#1e40af", // Deep blue
    "#3b82f6", // Bright blue
    // "#4c1d95", // Deep purple
    // "#7c3aed", // Vibrant purple
  ];

  return (
    <motion.div
      className="flex relative flex-col items-center justify-center gap-16 p-14 pb-32 w-full overflow-hidden"
      animate={{
        backgroundColor: activeBg,
      }}
      transition={{ duration: 0.5 }}
      ref={ref}
    >
      <h1 className="flex gap-3 items-center text-2xl font-bold justify-center text-white ">
        <motion.span
          animate={{
            x: isInView ? 60 : 0,
            y: isInView ? -100 : 0,
            opacity: isInView ? 0 : 1,
          }}
          transition={{
            duration: 0.5,
            delay: 1.5,
          }}
          className="flex items-center justify-center"
        >
          <LuPlane className="text-4xl" />
        </motion.span>
        Fly with Lyncs
      </h1>
      <StickyScroll content={travel} activeCard={activeCard} />
      <CurvedBorder
        className="-bottom-2 left-0 absolute rotateY border-none"
        fill="white"
      />
    </motion.div>
  );
}
