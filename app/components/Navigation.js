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

  const mobileNavLinks = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Menu", url: "/products" },
    { text: "Sign In", url: "/sign-in" },
    { text: "Cart", url: "/cart" },
  ];

  return (
    <nav
      className={`${lexend.className} flex w-[100vw] justify-evenly items-center`}
    >
      <Logo />
      <ul className="flex">
        <li>
          <img
            src="./sunmoon.png"
            alt="dark mode or light mode trigger."
            className="w-8"
          ></img>
        </li>
        <li>
          <Hamburger />
        </li>
      </ul>
    </nav>
  );
}
