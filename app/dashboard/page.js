"use client";
import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Cookies from "js-cookie";

export default function DashBoard() {
  const username = Cookies.get("name");

  // generate cards based off of the array I will recieve from localStorage.
  // i guess i make the array in menu so go there.

  return (
    <>
      <section
        className={`bg-[url('/dashboard.jpg')] bg-cover bg-center h-[70vh] relative`}
      >
        <h1 className="absolute text-4xl font-lexendExa top-64 m-4 md:top-48 lg:top-64">
          {`Hello ${username ? username : "user"}`}
        </h1>
      </section>
    </>
  );
}
