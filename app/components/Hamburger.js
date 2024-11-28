"use client";
import Link from "next/link";
import { useState } from "react";

export default function Hamburger() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function makeMenuVisible() {
    !isMenuVisible ? setIsMenuVisible(true) : setIsMenuVisible(false);
  }

  const mobileNavLinks = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Menu", url: "/products" },
    { text: "Sign In", url: "/sign-in" },
    { text: "Cart", url: "/cart" },
  ];

  return (
    <div className="m-0 p-0">
      <button
        data-popover-target="menu"
        className="rounded-md border text-center text-sm text-white transition-all hover:shadow-lg focus:bg-blue-900 focus:shadow-none active:bg-blue-900  hover:bg-blue-900  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 md:hidden lg:hidden w-[50px] p-2 mr-6"
        type="button"
        onClick={makeMenuVisible}
      >
        <img src="/burger.svg" className="relative"></img>
      </button>
      {isMenuVisible && (
        <ul
          role="menu"
          data-popover="menu"
          data-popover-placement="bottom"
          className="absolute z-10 overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 left-auto shadow-lg shadow-sm focus:outline-none"
        >
          <li
            role="menuitem"
            className="cursor-pointer text-slate-800 flex w-full text-sm items-start rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
          >
            <Link href={"/"}>{`Home`}</Link>
          </li>
          <li
            role="menuitem"
            className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
          >
            <Link href={"/about"}>{`About`}</Link>
          </li>
          <li
            role="menuitem"
            className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
          >
            {`Menu Item 3`}
          </li>
        </ul>
      )}
    </div>
  );
}
