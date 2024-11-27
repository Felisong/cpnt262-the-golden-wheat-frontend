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

  return (
    <nav
      className={`${lexend.className} flex w-full justify-between items-center`}
    >
      <Logo />
      <ul className="flex">
        <li>
          <img src="./sunmoon.png"></img>
        </li>
        <li>
          <Hamburger />
        </li>
      </ul>
    </nav>
  );
}
