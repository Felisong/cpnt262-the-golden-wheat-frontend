"use client";

import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { Lexend_Exa } from "next/font/google";
import Link from "next/link";
import Button from "./Button";
const lexend = Lexend_Exa({
  subsets: ["latin"],
});

export default function Footer() {
  const getYear = new Date().getFullYear();

  const [isAccTrue, setIsAccTrue] = useState(false);

  function SetIsUserLoggedIn() {
    setIsAccTrue(localStorage.getItem("isLoggedIn") || false);
  }
  useEffect(() => {
    SetIsUserLoggedIn();
  }, []);

  const navigation = [
    { name: "Home", href: "/", current: false, id: 1 },
    { name: "About", href: "/about", current: false, id: 2 },
    { name: "Menu", href: "/products", current: false, id: 3 },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <footer
      className={`${lexend.className} flex flex-col items-center w-[100vw] bg-gradient-to-t from-black to-darkBlue border-yellowBright border-b-4 h-fit justify-between md:items-start md:pl-4 md:justify-around py-4`}
    >
      <div className="flex justify-center md:justify-between">
        <Logo
          width="w-12 md:w-24 lg:w-28"
          size="text-[10px] md:text-xl lg:text-2xl "
        />
      </div>
      <ul className="flex flex-col md:flex-row w-fit items-center">
        <li>
          <Hamburger />
        </li>
        <li>
          <div className=" space-x-4 w-fit  hidden md:flex px-2">
            {/* GET NAVIGATION WORKING PRIO */}
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-darkBlue text-white px-2 text-xl w-30"
                    : "text-yellowBright hover:bg-gray-700 hover:text-white",
                  "rounded-md py-2 px-1"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </li>
        <li>
          {!isAccTrue ? (
            <Button
              backgroundColor="transparent"
              borderColor="yellowBright"
              text="Sign In"
              textColor="yellowBright"
              url="/sign-in"
              isHidden="hidden md:block"
            />
          ) : (
            <Button
              backgroundColor="transparent"
              borderColor="yellowBright"
              text="Dashboard"
              textColor="yellowBright"
              url="/dashboard"
              isHidden="hidden md:block"
            />
          )}
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="size-10 stroke-yellowBright m-0 md:m-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </li>
        <li className="text-yellowBright md:ml-12">
          All Rights reserved {getYear}
        </li>
      </ul>
    </footer>
  );
}
