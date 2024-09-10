"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { FaMinus, FaPlus } from "react-icons/fa6";

const PassengerSelect = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    setShowDropdown(false);
  });

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const values = [
    {
      title: "Adults",
      range: "12+ years",
      default: 1,
    },
    {
      title: "Children",
      range: "2-12 years",
      default: 0,
    },
    {
      title: "Infants",
      range: "0-2 years",
      default: 0,
    },
  ];

  type PassengerType = "adults" | "children" | "infants";

  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const handleIncrease = (key: PassengerType) => {
    setPassengers({
      ...passengers,
      [key]: passengers[key] + 1,
    });
  };

  const handleDecrease = (key: PassengerType, limit: number) => {
    setPassengers((prev) => {
      if (prev[key] > limit) {
        return {
          ...prev,
          [key]: prev[key] - 1,
        };
      }
      return prev;
    });
  };

  const passengerNo =
    passengers.adults + passengers.children + passengers.infants;

  return (
    <div className="!cursor-pointer w-[200px] gap-3 rounded py-3 px-7 relative flex items-center justify-between">
      <div className="flex gap-3 items-center" onClick={handleDropdown}>
        <p>
          {passengerNo} Passenger{passengerNo > 1 ? "s" : ""}
        </p>
        <FaCaretDown />
      </div>
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1 }}
            className="divide-y divide-gray-300 bg-white shadow rounded absolute top-16 w-[270px] md:w-full md:left-0 left-0 z-10"
            style={{
              transform: "none",
            }}
            ref={ref}
          >
            {values.map((value) => {
              const passengerValue = value.title.toLowerCase() as PassengerType;
              return (
                <div
                  className="text-black flex items-center gap-2 text-sm p-3 cursor-pointer relative"
                  key={value.title}
                >
                  <div className="w-[120px]">
                    <p>{value.title}</p>
                    <p className="text-gray-500 text-xs">{value.range}</p>
                  </div>
                  <div className="flex gap-3 text-sm items-center">
                    <div
                      className="bg-gray-200 select-none items-center flex justify-center cursor-pointer rounded-md w-8 h-8"
                      onClick={() =>
                        handleDecrease(passengerValue, value.default)
                      }
                    >
                      <FaMinus />
                    </div>
                    <p>{passengers[passengerValue]}</p>
                    <div
                      className="bg-gray-200 select-none items-center flex justify-center cursor-pointer rounded-md w-8 h-8"
                      onClick={() => handleIncrease(passengerValue)}
                    >
                      <FaPlus />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PassengerSelect;
