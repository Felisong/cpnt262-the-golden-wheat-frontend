"use client";
import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Cookies from "js-cookie";
import DisplayLikedProducts from "../components/DisplayLikedProducts";

export default function DashBoard() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    setUsername(Cookies.get("name"));
  }, []);

  return (
    <>
      <section
        className={`bg-[url('/dashboard.jpg')] bg-cover bg-center h-[70vh] relative`}
      >
        <h1 className="absolute text-4xl font-lexendExa top-64 m-4 md:top-48 lg:top-64">
          {`Hello ${username ? username : "user"}`}
        </h1>
      </section>
      <section>
        <h2 className="text-4xl text-center p-8 bg-softYellow border-y-4 border-yellowBright">
          Liked Products
        </h2>
        <div className="p-4">
          <DisplayLikedProducts />
        </div>
      </section>
    </>
  );
}
