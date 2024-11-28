"use client";

import { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { Lexend_Exa } from "next/font/google";
const lexend = Lexend_Exa({
  subsets: ["latin"],
});

export default function Navigation() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Menu", url: "/products" },
  ];

  return (
    <nav
      className={`${lexend.className} flex w-[100vw] justify-between items-center bg-gradient-to-b from-black to-darkBlue border-yellowBright border-b-4 h-32`}
    >
      <Logo />
      <ul className="flex items-center">
        <li>
          <img
            src="./sunmoon.png"
            alt="dark mode or light mode trigger."
            className="w-6"
          ></img>
        </li>
        <li>
          <Hamburger />
        </li>
      </ul>
    </nav>
  );
}
