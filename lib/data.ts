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
  ],
];
