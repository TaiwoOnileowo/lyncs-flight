import Hero from "@/components/Hero";
import { StickyScrollLyncs } from "@/components/StickyScrollLyncs";
import React from "react";
import Offers from "@/components/Offers";
import PopularFlights from "@/components/PopularFlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Hero1 from "@/components/Hero1";
import Hero2 from "@/components/Hero2";
import VideoRecord from "@/components/VideoRecord";
import Hero3 from "@/components/Hero3";
import FlightWidget from "@/components/FlightWidget";
const Page = () => {
  return (
    <div className="h-[150vh] overflow-auto ">
      {/* <Header />
      
      <PopularFlights />
      <Offers />
      <StickyScrollLyncs />
      <Testimonials />
      <WhyChooseUs />
      <Footer /> */}
      {/* <Hero /> */}
      <Hero2 />
      <div className="max-md:block hidden h-[40vh] mb-24 max-[400px]:h-[50vh] ">
        <VideoRecord />
      </div>
      {/* <Hero3 /> */}
      {/* <FlightWidget /> */}
    </div>
  );
};

export default Page;
