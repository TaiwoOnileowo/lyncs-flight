"use client"
import { motion } from "framer-motion";
const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipText = ({ children }: { children: string }) => {
  const animationVariants = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
    },
    exit: {
      y: "-100%",
    },
  };

  return (
    <motion.p className="relative block overflow-hidden whitespace-nowrap font-ppmori max-md:text-xl max-lg:text-[25px] text-3xl ">
      {children.split("").map((l, i) => (
        <motion.span
          key={i}
          variants={animationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER * i,
          }}
          className="inline-block"
        >
          {l === " " ? "\u00A0"  : l}
        </motion.span>
      ))}
    </motion.p>
  );
};
