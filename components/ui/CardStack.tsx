"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import takeoff from "@/assets/images/takeoff.jpg";
import comfyseat from "@/assets/images/comfyseat.jpg";
import chillrates from "@/assets/images/chillrates.jpg";
import Image, { StaticImageData } from "next/image";

const items = [
  {
    id: 0,
    image: takeoff,
  },
  {
    id: 1,
    image: comfyseat,
  },
  {
    id: 2,
    image: chillrates,
  },
];

type Card = {
  id: number;
  image: StaticImageData;
};

export const CardStack = ({
  offset,
  scaleFactor,
  activeCard,
}: {
  offset?: number;
  scaleFactor?: number;
  activeCard: number;
}) => {
  const CARD_OFFSET = offset || 20; // Increase spacing between cards
  const SCALE_FACTOR = scaleFactor || 0.15; // Increase scaling factor for greater difference in size

  const linearGradients = [
    "linear-gradient(to bottom right, #7c3aed, #3b82f6)", // Vibrant purple to bright blue
    "linear-gradient(to bottom right, #6b46c1, #1e40af)", // Warm purple to deep blue
    "linear-gradient(to bottom right, #a5b4fc, #4c1d95)", // Soft blue to deep purple
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  // Adjust background gradient whenever activeCard changes
  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  // Calculate the card order based on the active card
  const getCardStack = (active: number) => {
    return items.map((_, i) => items[(active + i) % items.length]);
  };

  const cards = getCardStack(activeCard); // Cards will now be ordered based on activeCard

  return (
    <div className="h-60 w-60 md:h-60 md:w-96 hidden lg:block sticky top-10">
      {cards.map((item, index) => {
        return (
          <motion.div
            key={item.id}
            className="absolute h-60 w-60 md:h-96 md:w-96 rounded-3xl p-4 shadow-xl shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top right", // Changed origin to right
              background: backgroundGradient,
              right: index * -20, // Move each card from the right
            }}
            animate={{
              top: index * CARD_OFFSET, // Space them out more vertically
              scale: 1 - index * SCALE_FACTOR, // Increase the scale difference
              zIndex: items.length - index, // Ensure correct stacking order
            }}
          >
            <Image
              src={item.image}
              alt="card"
              className="h-full w-full object-cover rounded-3xl"
            />
          </motion.div>
        );
      })}
    </div>
  );
};
