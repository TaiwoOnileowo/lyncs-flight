import React, { useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { motion } from "framer-motion";
const DropDown = ({
  values,
  showTick = true,
  handleClick,
  selectedValue,
  callbackFn,
}: {
  values: string[];
  showTick?: boolean;
  handleClick: (value: string) => void;
  selectedValue?: string;
  callbackFn: () => void;
}) => {
  const ref = useRef(null);

  useOutsideClick(ref, callbackFn);
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.1 }}
      className="divide-y divide-gray-300 bg-white shadow rounded absolute top-16 min-w-[250px] md:w-full md:left-0 left-0 z-10"
      style={{
        transform: "none",
      }}
      ref={ref}
    >
      {values.map((value, index) => (
        <p
          className="text-black flex items-center gap-2  text-sm p-3 cursor-pointer relative"
          key={value}
          onClick={() => handleClick(value)}
        >
          {showTick && (
            <span className="w-6">
              {selectedValue === value && <FaCheck className="text-blue-500" />}
            </span>
          )}

          <span>{value}</span>
        </p>
      ))}
    </motion.div>
  );
};

export default DropDown;
