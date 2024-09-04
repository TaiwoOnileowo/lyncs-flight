import React from "react";
import { offers } from "@/lib/data";
import Image from "next/image";
import { IoAirplane } from "react-icons/io5";
import { numberWithCommas } from "@/lib/utils";
const DisplayedOffers = ({ index }: { index: number }) => {
  return (
    <div className="grid grid-cols-2  w-full justify-center gap-12 ">
      {offers[index].map(({ image, from, to, price, airway, tripType }, idx) => (
        <div
          key={idx}
          className="flex gap-5 h-fit bg-white   rounded-xl shadow-md p-4"
        >
          <Image
            src={image}
            alt={`${from} to ${to}`}
            className="w-[150px] h-[150px] object-cover rounded-xl"
          />
          <div>
            <p className="text-xs">{tripType}</p>
            <div className="flex gap-2 items-center justify-center my-1">
              <p className="text-xl font-semibold">{from}</p>
              <IoAirplane className="text-[#7852ef] text-2xl" />
              <p className="text-xl font-semibold">{to}</p>
            </div>
            <p className="text-xs mt-2">Price:</p>
            <p className="text-xl font-bold">₦{numberWithCommas(price)}</p>
            <button className="bg-[#7852ef] text-white rounded-xl py-1.5 mt-4 px-3">
              Book now{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayedOffers;
