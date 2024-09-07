"use client";
import React, { useEffect, useRef } from "react";
import { InfiniteMovingCards } from "./ui/Moving Cards";
import { testimonials } from "@/lib/data";
import { motion, useInView } from "framer-motion";
const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  console.log(isInView, "testimonials");
  return (
    <div
      className="p-20 relative px-8 flex items-center w-full gap-12 justify-center h-[70vh]"
      id="testimonials"
    >
      <div
        className="w-[45%] flex justify-center flex-col px-12 h-full"
        ref={ref}
      >
        <motion.h1
          className="text-5xl font-bold"
          initial={{
            opacity: 0,
            x: 500,
          }}
          animate={{
            opacity: isInView ? 1 : undefined,
            x: isInView ? 0 : undefined,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            type: "spring",

            bounce: 0.2,
          }}
        >
          Hear from <span className="text-purple">other travelers</span>
        </motion.h1>
        <p className="text-wrap text-lg mt-5 w-[80%]">
          Book your flight with us and get maximum value for your money.
        </p>
        <motion.button
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: isInView ? 1 : undefined,
          }}
          transition={{
            duration: 0.5,
            delay: 0.8,
          }}
          className="mt-8 bg-gray-800 w-[150px] rounded-xl text-white py-3 "
        >
          Book Now
        </motion.button>
      </div>
      <div className="flex flex-col items-center justify-center lg:mt-10 w-[55%] overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Clients;
