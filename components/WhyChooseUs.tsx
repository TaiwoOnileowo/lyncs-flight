"use client";
import React, { useRef } from "react";
import flight from "@/assets/images/flight.png";
import { motion } from "framer-motion";
import luggage from "@/assets/images/luggage.png";
import Image from "next/image";
import ok from "@/assets/images/ok.png";
import { useInView } from "framer-motion";
const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const choose = [
    {
      title: "Find the Perfect Flight",
      icon: <Image src={ok} alt="ok" width={70} height={70} />,
      description:
        "Searching for and comparing flight prices has never been easier with Lyncs’ powerful search engine. Simply enter your destinations, and instantly compare options to find the best deals available.",
    },
    {
      title: "Book Anytime, Anywhere",
      icon: <Image src={flight} alt="flight" width={70} height={70} />,
      description:
        "Whether you’re at home or on the go, booking a cheap flight with Lyncs is quick and easy. We save your itinerary for added convenience and offer special discounts, so you're always ready for your next adventure",
    },
    {
      title: "Get the Best Flight Deals",
      icon: <Image src={luggage} alt="luggage" width={70} height={70} />,
      description:
        "Take advantage of exclusive fares for Lyncs customers and unbeatable prices on flights to destinations around the world. We offer some of the most competitive rates you’ll find—so book now and secure your spot before prices go up!",
    },
  ];
  return (
    <div
      className="bg-sky-image w-full p-10 text-black mt-24 flex flex-col items-center justify-center bg-cover bg-top bg-no-repeat"
      ref={ref}
    >
      <div className="flex items-center justify-center gap-16 w-full">
        <motion.hr
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: isInView ? 1 : undefined,
            x: isInView ? 0 : undefined,
          }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="border-white/50 w-[300px] h-0.5"
        />
        <motion.h1
          className="text-3xl  text-white"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: isInView ? 1 : undefined,
            y: isInView ? 0 : undefined,
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Book your flight with Lyncs
        </motion.h1>
        <motion.hr
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: isInView ? 1 : undefined,
            x: isInView ? 0 : undefined,
          }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="border-white/50 w-[300px] h-0.5"
        />
      </div>
      <div className="flex gap-14 mt-20 items-center justify-center">
        {choose.map(({ title, description, icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center  w-[400px]"
          >
            <motion.span
              className="text-white text-5xl"
              animate={{
                scale: isInView && index === 0 ? [ 1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 0.5,
                delay: 1.5,
              }}
            >
              {icon}
            </motion.span>

            <h1 className="text-2xl font-bold text-white mt-3">{title}</h1>
            <p className="text-white mt-6 text-sm text-center font-semibold">
              {description}
            </p>
          </div>
        ))}
      </div>
      <button className="mt-8 bg-gray-800 w-[150px] rounded-xl text-white py-3">
        Book Now
      </button>
    </div>
  );
};

export default WhyChooseUs;
