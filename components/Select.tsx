"use client";
import { AnimatePresence } from "framer-motion";
import React, { useState, useRef } from "react";

import { FaCaretDown } from "react-icons/fa";
import DropDown from "./DropDown";

const Select = ({ values }: { values: string[] }) => {
  const [selectedValue, setSelectedValue] = useState(values[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setShowDropdown(false);
  };

  return (
    <div className="!cursor-pointer   w-[200px] gap-3 rounded py-3 px-7  relative flex items-center justify-between">
      <div className="flex gap-3 items-center" onClick={handleDropdown}>
        <p>{selectedValue}</p>
        <FaCaretDown />
      </div>
      <AnimatePresence>
        {showDropdown && (
          <DropDown
            values={values}
            handleClick={handleSelect}
            selectedValue={selectedValue}
            callbackFn={() => setShowDropdown(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Select;
