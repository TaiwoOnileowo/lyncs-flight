"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { IoRocket, IoRocketOutline } from "react-icons/io5";
const Header = () => {
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [startAnimation, setStartAnimation] = useState(false);
  let timeout: any;
  let timeout2: any;
  useEffect(() => {
    if (isInView) {
      timeout = setTimeout(() => {
        setStartAnimation(true);
      }, 1000);
      timeout2 = setTimeout(() => {
        setStartAnimation(false);
      }, 3000);
    } else {
      setStartAnimation(false);
    }
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, [isInView]);
  return (
    <nav className="flex justify-between items-center absolute left-0 top-0 w-full  py-6 px-24 z-50">
      <div className="flex items-center justify-between w-[60vw] gap-8">
        <Image
          src="https://www.lyncs.africa/images/logo-white.svg"
          alt="logo"
          width="100"
          height="100"
        />
        <ul className="flex justify-center gap-8 ml-24">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li
                className={`font-bold uppercase py-2 transition-all duration-300 ease-in-out ${
                  active
                    ? "text-white border-white  border-b"
                    : "text-white/50 hover:text-white  hover:border-b hover:border-b-white"
                } `}
                key={link.title}
              >
                <a href={link.href}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        className={`md:hover:bg-blue-500 ${
          startAnimation ? "animate" : "rounded-lg"
        } relative text-white group rounded-lg`}
        ref={ref}
      >
        <span className="rounded-lg md:hover:bg-blue-500">
          <span className="flex gap-2 items-center justify-center md:hover:bg-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[14px] px-8 py-2.5 text-center mr-3 md:mr-0">
            Let&apos;s fly
            <motion.span
              animate={{
                x: startAnimation ? 40 : 0,
                y: startAnimation ? -60 : 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
              className="text-lg group-hover:hidden flex items-center justify-center"
            >
              <IoRocketOutline className="" />
            </motion.span>
            <IoRocket className="text-lg group-hover:block hidden" />
          </span>
        </span>
      </button>
    </nav>
  );
};

export default Header;
