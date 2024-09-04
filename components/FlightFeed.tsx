import React from "react";
import { FlightCarousel } from "./FeedCarousel";
import OffersCarousel from "./ui/OffersCarousel";
import { EmblaOptionsType } from 'embla-carousel'
const FlightFeed = () => {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="flex flex-col items-center justify-center gap-16 p-14 bg-[#F1F1F8] w-full">
      <FlightCarousel />
      <OffersCarousel  slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default FlightFeed;
