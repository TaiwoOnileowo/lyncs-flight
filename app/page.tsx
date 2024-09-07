import Hero from "@/components/Hero";
import { StickyScrollLyncs } from "@/components/StickyScrollLyncs";
import React from "react";
import Offers from "@/components/Offers";
import PopularFlights from "@/components/PopularFlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <Header />
      <Hero />
      <PopularFlights />
      <Offers />
      <StickyScrollLyncs />
      <Testimonials />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Page;
