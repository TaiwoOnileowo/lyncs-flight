import DisplayedOffers from "@/components/DisplayedOffers";
import FlightFeed from "@/components/FlightFeed";
import Hero from "@/components/Hero";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <Hero />
      <FlightFeed />
    </div>
  );
};

export default Page;
