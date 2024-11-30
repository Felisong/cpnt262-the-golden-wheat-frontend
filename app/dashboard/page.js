"use client";
import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Cookies from "js-cookie";

export default function DashBoard() {
  const username = Cookies.get("name");

  return (
    <>
      <section
        className={`bg-[url('/dashboard.jpg')] bg-cover bg-center h-[70vh] `}
      >
        <h1 className="text-xl text-center mt-32 font-lexendExa">
          {`Hello ${username ? username : "user"}`}
        </h1>
      </section>
    </>
  );
}
