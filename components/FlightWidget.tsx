"use client";
import React, { useState } from "react";
import Select from "./Select";
import PassengerSelect from "./PassengerSelect";
import DropDown from "./DropDown";
import { DatePickerWithPresets } from "./ui/DatePicker";
import Button from "./Button";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
const FlightWidget = () => {
  const [flightInputs, setFlightInputs] = useState({
    tripType: "Round Trip",
    passengers: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    class: "Economy",
    from: "",
    to: "",
    departureDate: "",
  });
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [searchValues, setSearchValues] = useState<string[]>([]);

  const fromValues = [
    "Abuja, Nigeria (ABV)",
    "Benin City, Nigeria (BNI)",
    "Enugu, Nigeria (ENU)",
    "Kaduna, Nigeria (KAD)",
    "Kano, Nigeria (KAN)    ",

    "Jos, Nigeria (JOS)",
  ];
  const toValues = [
    "Abuja, Nigeria (ABV)",
    "Benin City, Nigeria (BNI)",
    "Enugu, Nigeria (ENU)",
    "Kaduna, Nigeria (KAD)",
    "Kano, Nigeria (KAN)    ",
  ];
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    values: string[]
  ) => {
    const name = event.target.name;
    setFlightInputs({
      ...flightInputs,
      [name]: event.target.value,
    });
    const searchResults = values.filter((value) =>
      value.toLowerCase().includes(event.target.value.toLowerCase())
    );
    if (searchResults.length > 0) {
      setSearchValues(searchResults);
    } else {
      setSearchValues(["Place not found"]);
    }
  };
  const tripTypes = ["Round Trip", "One Way Trip"];
  const classes = ["Economy", "Business", "First Class"];

  const handleSelectFrom = (value: string) => {
    if (value === "Place not found") return;
    setFlightInputs({
      ...flightInputs,
      from: value,
    });
    setShowFromDropdown(false);
  };
  const handleSelectTo = (value: string) => {
    if (value === "Place not found") return;
    setFlightInputs({
      ...flightInputs,
      to: value,
    });
    setShowToDropdown(false);
  };
  return (
    <div className="flex relative items-center text-black h-[35vh] w-full justify-center -mt-24  z-50 ">
      <div className="bg-white relative w-[75vw] rounded-lg h-full shadow-lg p-6">
        <div className="flex gap-4 items-center relative">
          <Select values={tripTypes} />
          <PassengerSelect />
          <Select values={classes} />
        </div>
        <div className="mt-6 flex gap-4 items-center">
          <div className="flex gap-6 items-center w-fit">
            <div className="border border-gray-300 shadow w-[350px] rounded-md p-6 py-4">
              <p className="uppercase text-sm text-gray-600 font-semibold mb-2">
                FROM
              </p>
              <div className="relative w-full h-fit">
                <input
                  placeholder="City or airport"
                  className="placeholder-gray-600 placeholder:font-normal py-0  w-full text-small font-medium text-black bg-transparent border-none px-0 focus:outline-none"
                  value={flightInputs.from}
                  name="from"
                  onChange={(e) => handleChange(e, fromValues)}
                  onClick={() => setShowFromDropdown(true)}
                ></input>
                {showFromDropdown && (
                  <DropDown
                    values={searchValues.length > 0 ? searchValues : fromValues}
                    handleClick={handleSelectFrom}
                    callbackFn={() => setShowFromDropdown(false)}
                    showTick={false}
                  />
                )}
              </div>
            </div>
            <div className="bg-blue-500 rounded-full w-12 h-12 -translate-x-[50%] absolute right-[62%] flex items-center justify-center text-white z-52">
              <HiOutlineSwitchHorizontal className="text-3xl" />
            </div>
            <div className="border border-gray-300 shadow w-[350px] rounded-md p-6 py-4">
              <p className="uppercase text-sm text-gray-600 font-semibold mb-2">
                TO
              </p>
              <div className="relative w-full h-fit">
                <input
                  placeholder="City or airport"
                  className="placeholder-gray-600 py-0  placeholder:font-normal w-full font-medium text-black bg-transparent border-none px-0 focus:outline-none"
                  value={flightInputs.to}
                  name="to"
                  onChange={(e) => handleChange(e, toValues)}
                  onClick={() => setShowToDropdown(true)}
                ></input>
                {showToDropdown && (
                  <DropDown
                    values={searchValues.length > 0 ? searchValues : toValues}
                    handleClick={handleSelectTo}
                    callbackFn={() => setShowToDropdown(false)}
                    showTick={false}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="border border-gray-300 shadow w-[350px] rounded-md p-6 py-4">
            <p className="uppercase text-sm text-gray-600 font-semibold mb-2">
              Departure
            </p>
            <DatePickerWithPresets />
          </div>
        </div>
        <div className="absolute -bottom-4 right-4">
          <Button text="Let's Go" className="bg-black px-7 py-3 text-white" />
        </div>
      </div>
    </div>
  );
};

export default FlightWidget;
