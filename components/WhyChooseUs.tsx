import React from "react";
import { BsQrCode } from "react-icons/bs";
import { FaPlaneDeparture } from "react-icons/fa";
import { Briefcase } from "lucide-react";
import flight from "@/assets/images/flight.png";
import checkin from "@/assets/images/check-in.png";
import luggage from "@/assets/images/luggage.png";
import Image from "next/image";
import ok from "@/assets/images/ok.png";
const WhyChooseUs = () => {
  const choose = [
    {
      title: "Find the Perfect Flight",
      icon: <Image src={ok} alt="ok" width={70} height={70} />,
      description:
        "Searching for and comparing flight prices has never been easier with Lyncs’ powerful search engine. Simply enter your destinations, and instantly compare options to find the best deals available.",
    },
    {
      title: "Book Anytime, Anywhere",
      icon: <Image src={flight} alt="flight" width={70} height={70} />,
      description:
        "Whether you’re at home or on the go, booking a cheap flight with Lyncs is quick and easy. We save your itinerary for added convenience and offer special discounts, so you're always ready for your next adventure",
    },
    {
      title: "Get the Best Flight Deals",
      icon: <Image src={luggage} alt="luggage" width={70} height={70} />,
      description:
        "Take advantage of exclusive fares for Lyncs customers and unbeatable prices on flights to destinations around the world. We offer some of the most competitive rates you’ll find—so book now and secure your spot before prices go up!",
    },
  ];
  return (
    <div className="bg-sky-image w-full p-10 text-black mt-24 flex flex-col items-center justify-center bg-cover bg-top bg-no-repeat">
      <div className="flex items-center justify-center gap-16 w-full">
        <hr className="border-white/50 w-[300px] h-0.5" />
        <h1 className="text-3xl  text-white">Book your flight with Lyncs</h1>
        <hr className="border-white/50 w-[300px] h-0.5" />
      </div>
      <div className="flex gap-14 mt-20 items-center justify-center">
        {choose.map(({ title, description, icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center  w-[400px]"
          >
            <span className="text-white text-5xl">{icon}</span>

            <h1 className="text-2xl font-bold text-white mt-3">{title}</h1>
            <p className="text-white mt-6 text-sm text-center font-semibold">
              {description}
            </p>
          </div>
        ))}
      </div>
      <button className="mt-8 bg-gray-800 w-[150px] rounded-xl text-white py-3">Book Now</button>
    </div>
  );
};

export default WhyChooseUs;
