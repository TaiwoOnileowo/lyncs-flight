"use client";
import React from "react";

import { motion } from "framer-motion";

import { CardStack } from "./CardStack";

interface StickyScrollProps {
  content: {
    title: string;
    description: string;
    content?: string;
    // icon: string;
  }[];
  activeCard: number;
}
export const StickyScroll = ({ content, activeCard }: StickyScrollProps) => {
  return (
    <motion.div className="h-[30rem]  flex justify-center relative space-x-40 rounded-md p-10">
      <div className="div relative flex items-start px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ y: "100%" }}
          animate={{ y: `-${activeCard * 20}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                //   style={{
                //     opacity: activePage === index ? 1 : 0.3,
                //     scale: activePage === index ? 1 : 0.8,
                //     transition: "all 0.5s ease",
                //   }}
                className="text-2xl font-bold text-slate-100 flex gap-2 items-center"
              >
                {/* <Image src={item.icon} alt="icon" width={20} height={20} /> */}
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </motion.div>
      </div>
      <CardStack activeCard={activeCard} />
    </motion.div>
  );
};
