"use client";
import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";

export default function DashBoard() {
  const [username, setUsername] = useState();
  const token = localStorage.getItem("token");

  // TODO: FETCH DATA, NATCH TOKEN WITH USER, TAKE NAME FROM ACC TO A VARIABLE TO
  // async function fetchUserInfo() {
  //   const url = "http://localhost:5000/api/auth/register";
  //   try {
  //     const res = await fetch(url);

  //     const data = await res.json();
  //   } catch (error) {
  //     console.error("unable to fetch", error);
  //   }
  //   console.log(`data: `, data);
  // }
  // useEffect(() => {
  //   fetchUserInfo();
  // }, []);

  return (
    <>
      <div className="items-center justify-items-center min-h-screen">
        <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Hero title={`Hello ${username ? username : "user"}`}></Hero>
        </section>
      </div>
    </>
  );
}
