import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <div className="flex w-full justify-between">
      <Image
        src="https://www.lyncs.africa/images/logo-light.svg"
        alt="Lyncs Logo"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Nav;
