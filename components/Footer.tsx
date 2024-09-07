import React from "react";
import { footer, footerSocial } from "@/lib/data";
const Footer = () => {
  return (
    <div className="bg-take-off mt-24 bg-cover p-24 py-16 relative bg-no-repeat flex-col z-[1] bg-center w-full flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 z-[2]"></div>
      <div className="z-[3] flex w-full h-fit border-t border-white/50 py-8 mt-10">
        {footer.map(({ heading, links }, index) => (
          <div
            key={index}
            className="flex flex-col border-r border-l h-[250px] border-white/50 px-32 justify-center gap-8 w-[500px] "
          >
            <h2 className="text-white text-2xl font-bold">{heading}</h2>
            <ul className="flex flex-col gap-4 text-white">
              {links.map(({ title, href }, index) => (
                <li key={index}>
                  <a href={href} className="text-white hover:underline">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="z-[3] border-t border-b border-white/50 w-full justify-center py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-white w-full border-r border-l h-full">
          <p className="text-sm">
            © 2024{" "}
            <a href="https://www.lyncs.africa/" target="_blank">
              Lyncs™
            </a>
            . All Rights Reserved
          </p>
          <div className="flex gap-3 items-center justify-center ">
            {footerSocial.map((icon, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-white border border-white p-2 text-lg cursor-pointer hover:bg-white/10 hover:text-white"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
