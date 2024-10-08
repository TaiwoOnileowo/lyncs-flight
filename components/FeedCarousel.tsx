"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { flightFeed } from "@/lib/data";
import { IoAirplane } from "react-icons/io5";
export function FlightCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  return (
    <Carousel
      className="w-full max-w-5xl  "
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-1">
        {flightFeed.map(({ image, from, to }, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/2 rounded-xl "
          >
            <div className="flex w-[90%] relative h-[200px]  rounded-xl aspect-square items-center justify-center cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-black/40" />
              <Image
                src={image}
                alt="flight"
                className="w-full h-full object-cover rounded-xl"
                priority
              />
              <div className="bg-gray-300/20 px-4  text-white rounded-t-xl h-[50%] bottom-0 absolute left-0 z-[10] w-full flex items-center justify-center">
                <div className="flex gap-3 w-full items-center justify-center">
                  <p>{from}</p>
                  <div className="flex gap-1 items-center justify-center">
                    <div className="bg-white rounded-full w-1 h-1"></div>
                    <hr className="border-t border-white border-dashed w-[20px] h-0.5" />
                    <IoAirplane className="text-white/80 text-2xl" />
                    <hr className="border-t border-white border-dashed w-[20px] h-0.5" />
                  </div>
                  <div className="bg-white rounded-full w-1 h-1"></div>
                  <p>{to}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
