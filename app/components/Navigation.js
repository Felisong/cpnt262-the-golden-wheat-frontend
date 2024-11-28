"use client";

import { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { Lexend_Exa } from "next/font/google";
import Link from "next/link";
const lexend = Lexend_Exa({
  subsets: ["latin"],
});

export default function Navigation() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const navigation = [
    { name: "Home", href: "/", current: true, id: 1 },
    { name: "About", href: "/about", current: false, id: 2 },
    { name: "Menu", href: "/products", current: false, id: 3 },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav
      className={`${lexend.className} flex w-[100vw] justify-between items-center bg-gradient-to-b from-black to-darkBlue border-yellowBright border-b-4 h-fit`}
    >
      <Logo />
      <ul className="flex items-center my-8 md:mr-6 lg:mr-8">
        <li>
          <img
            src="./sunmoon.png"
            alt="dark mode or light mode trigger."
            className="w-6 md:w-12 lg:w-16"
          ></img>
        </li>
        <li>
          <Hamburger />
        </li>
        <div className="flex space-x-4 w-40 ">
          {/* GET NAVIGATION WORKING PRIO */}
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-darkBlue text-white px-2 text-2xl w-30"
                  : "text-yellowBright hover:bg-gray-700 hover:text-white",
                "rounded-md py-2"
              )}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </ul>
    </nav>
  );
}
