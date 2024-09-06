import React from "react";
import { InfiniteMovingCards } from "./ui/Moving Cards";
import { testimonials } from "@/lib/data";
import CurvedBorder from "./ui/CurvedBorder";
const Clients = () => {
  return (
    <div
      className="p-20 relative px-8 flex items-center w-full gap-12 justify-center h-[70vh]"
      id="testimonials"
    >
    
      <div className="w-[45%] flex justify-center flex-col px-12 h-full">
        <h1 className="text-5xl font-bold">
          Hear from <span className="text-purple">other travelers</span>
        </h1>
        <p className="text-wrap text-lg mt-5 w-[80%]">
          Book your flight with us and get maximum value for your money.
        </p>
        <button className="mt-8 bg-gray-800 w-[150px] rounded-xl text-white py-3 ">
          Book Now
        </button>
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
