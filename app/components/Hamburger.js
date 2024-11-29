"use client";
import Link from "next/link";
import { useState } from "react";

export default function Hamburger() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function makeMenuVisible() {
    !isMenuVisible ? setIsMenuVisible(true) : setIsMenuVisible(false);
  }

  const navigation = [
    { text: "Home", href: "/", current: true, id: 1 },
    { text: "About", href: "/about", current: false, id: 2 },
    { text: "Menu", href: "/products", current: false, id: 3 },
    { text: "Sign In", href: "/sign-in", current: false, id: 4 },
    { text: "Cart", href: "/cart", current: false, id: 5 },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="m-0 p-0 relative">
      <button
        data-popover-target="menu"
        className="rounded-md text-center text-sm transition-all hover:shadow-lg focus:bg-blue-950 focus:shadow-none active:bg-blue-950  hover:bg-blue-950  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 md:hidden lg:hidden w-[40px] p-2 mr-6"
        type="button"
        onClick={makeMenuVisible}
      >
        <img src="/burger.svg"></img>
      </button>
      {isMenuVisible && (
        <ul
          role="menu"
          data-popover="menu"
          data-popover-placement="bottom"
          className="absolute z-10 overflow-x-auto rounded-lg border border-slate-200 bg-white left-auto shadow-lg shadow-sm focus:outline-none max-w-[95vw] right-8"
        >
          <div className="flex flex-col space-x-4 w-40 ">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-darkBlue text-white px-2 text-2xl"
                    : "text-darkBlue hover:bg-gray-700 hover:text-white px-4 m-0",
                  "rounded-md py-2 text-sm font-medium"
                )}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
}
