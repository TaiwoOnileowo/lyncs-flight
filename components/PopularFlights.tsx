import React from "react";
import { FlightCarousel } from "./FeedCarousel";

const PopularFlights = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 p-14 bg-white w-full">
      <FlightCarousel />
    </div>
  );
};

export default PopularFlights;
