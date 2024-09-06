"use client";
import React, { use } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
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
      <button className="bg-gray-800 text-white rounded-xl py-1.5 mt-4 px-3">
        Book a Flight
      </button>
    </nav>
  );
};

export default Header;
