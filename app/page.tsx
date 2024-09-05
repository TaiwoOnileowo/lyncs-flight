import Hero from "@/components/Hero";
import { StickyScrollLyncs } from "@/components/StickyScrollLyncs";
import React from "react";
import Offers from "@/components/Offers";
import PopularFlights from "@/components/PopularFlights";
import WhyChooseUs from "@/components/WhyChooseUs";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <Hero />
      <PopularFlights />
      <Offers />
      <StickyScrollLyncs />
      <WhyChooseUs />
    </div>
  );
};

export default Page;
