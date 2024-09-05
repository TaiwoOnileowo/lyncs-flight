import toronto from "@/assets/images/toronto.jpg";
import paris from "@/assets/images/paris.jpg";
import abuja from "@/assets/images/abuja.jpg";
import benin from "@/assets/images/benin.jpg";
import dubai from "@/assets/images/dubai.jpg";
import zanzibar from "@/assets/images/zanzibar.jpg";
import lagos from "@/assets/images/lagos.jpg";

export const flightFeed = [
  {
    image: lagos,
    from: "Lagos",
    to: "Abuja",
  },
  {
    image: dubai,
    from: "Lagos",
    to: "Dubai",
  },
  {
    image: abuja,
    from: "Abuja",
    to: "Benin",
  },
  {
    image: benin,
    from: "Benin",
    to: "Imo",
  },
  {
    image: toronto,
    from: "Toronto",
    to: "Paris",
  },
  {
    image: lagos,
    from: "Lagos",
    to: "Toronto",
  },

  {
    image: dubai,
    from: "Dubai",
    to: "Zanzibar",
  },
  {
    image: zanzibar,
    from: "Zanzibar",
    to: "Lagos",
  },
  {
    image: abuja,
    from: "Abuja",
    to: "Toronto",
  },
];
import brussels from "@/public/images/brussels.png";
import lufthansa from "@/public/images/lufthansa.png";
import swiss from "@/public/images/swiss.png";
export const offers = [
  [
    {
      id: 1,
      image: lagos,
      from: "Lagos",
      to: "Abuja",
      price: 1375000,
      airway: lufthansa,
      tripType: "Round Trip",
    },
    {
      id: 2,
      image: dubai,
      from: "Lagos",
      to: "Dubai",
      price: 1375000,
      airway: lufthansa,
      tripType: "Oneway",
    },
    {
      id: 3,
      image: abuja,
      from: "Abuja",
      to: "Benin",
      price: 1375000,
      airway: brussels,
      tripType: "Round Trip",
    },
    {
      id: 4,
      image: benin,
      from: "Benin",
      to: "Imo",
      price: 1375000,
      airway: swiss,
      tripType: "Oneway",
    },
  ],
  [
    {
      id: 5,
      image: toronto,
      from: "Toronto",
      to: "Paris",
      price: 1375000,
      airway: lufthansa,
      tripType: "Round Trip",
    },
    {
      id: 6,
      image: lagos,
      from: "Lagos",
      to: "Toronto",
      price: 1375000,
      airway: swiss,
      tripType: "Round Trip",
    },

    {
      id: 7,
      image: dubai,
      from: "Dubai",
      to: "Zanzibar",
      price: 1375000,
      airway: lufthansa,
      tripType: "Oneway",
    },
    {
      id: 8,
      image: zanzibar,
      from: "Zanzibar",
      to: "Lagos",
      price: 1375000,
      airway: lufthansa,
      tripType: "Oneway",
    },
  ],
  [
    {
      id: 9,
      image: abuja,
      from: "Abuja",
      to: "Toronto",
      price: 1375000,
      airway: brussels,
      tripType: "Round Trip",
    },
    {
      id: 10,
      image: zanzibar,
      from: "Zanzibar",
      to: "Lagos",
      price: 1375000,
      airway: lufthansa,
      tripType: "Oneway",
    },
    {
      id: 11,
      image: zanzibar,
      from: "Zanzibar",
      to: "Lagos",
      price: 1375000,
      airway: lufthansa,
      tripType: "Oneway",
    },
  ],
];
export const travel = [
  {
    title: "Safe Travel",
    description:
      "Your safety is our priority. With top-notch security measures and real-time tracking, enjoy peace of mind on every journey",
    // icon: "https://www.lyncs.africa/images/icon.svg",
  },
  {
    title: "Comfortable Seats",
    description:
      "Sit back and relax in our plush, ergonomic seats designed for ultimate comfort, making even long trips a pleasure",
  },
  {
    title: "Best Rates",
    description:
      "Travel in style without breaking the bank. We offer the most competitive rates to give you the best value for your money.",
  },
];
import { BsQrCode } from "react-icons/bs";
import { FaPlaneDeparture } from "react-icons/fa";
import { Briefcase } from "lucide-react";
// export 
