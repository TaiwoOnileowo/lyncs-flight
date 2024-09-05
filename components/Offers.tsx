"use client";
import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./ui/OffersCarouselArrowButtons";

import DisplayedOffers from "./DisplayedOffers";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
const TWEEN_FACTOR_BASE = 0.2;

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const Offers = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const slides = SLIDES;
  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `translateX(${translate}%)`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax);
  }, [emblaApi, tweenParallax]);

  return (
    <div className="w-full bg-blue-100  p-24">
      <div className="embla bg-white rounded-xl flex flex-col items-start p-6">
        <div className="flex justify-between items-center px-10  w-full">
          <h2 className="text-3xl font-bold">Offers</h2>
          <div className="flex gap-2 items-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
              <button disabled={prevBtnDisabled}>
                <IoMdArrowRoundBack
                  className="text-black/80 text-2xl"
                  onClick={onPrevButtonClick}
                />
              </button>
            </div>
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
              <button>
                <IoMdArrowRoundForward
                  className="text-black/80 text-2xl"
                  onClick={onNextButtonClick}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="overflow-hidden">
                  <div className="embla__parallax__layer p-6">
                    <DisplayedOffers index={index} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
//       <div className="embla__dots">
//   {scrollSnaps.map((_, index) => (
//     <DotButton
//       key={index}
//       onClick={() => onDotButtonClick(index)}
//       className={"embla__dot".concat(
//         index === selectedIndex ? "  bg-black" : ""
//       )}
//     />
//   ))}
// </div>

export default Offers;
