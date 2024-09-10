"use client ";
import { motion, useAnimationControls } from "framer-motion";
import React from "react";

import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
const Button = ({ text, className }: { text: string; className: string }) => {
  const paddingControls = useAnimationControls();
  const onMouseEnter = () => {
    paddingControls.start({
      paddingLeft: "20px",
      transition: { duration: 0.3 },
    });
  };
  const onMouseLeave = () => {
    paddingControls.start({
      paddingLeft: "10px",
      transition: { duration: 0.3 },
    });
  };
  return (
    <motion.button
      className={`${className} flex items-center  bg-black p-3 rounded-md text-black`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {text}
      <motion.span animate={paddingControls}>
        <ArrowRightAltRoundedIcon />
      </motion.span>
    </motion.button>
  );
};

export default Button;
