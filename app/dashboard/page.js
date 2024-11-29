"use client";
import { useState } from "react";
import Hero from "../components/Hero/Hero";

export default function DashBoard() {
  const [username, setUsername] = useState();

  return (
    <>
      <div className="items-center justify-items-center min-h-screen">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Hero title={`Hello ${username ? username : "user"}`}></Hero>
        </main>
      </div>
    </>
  );
}
