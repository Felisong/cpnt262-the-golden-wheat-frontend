"use client";
import Cards from "./Cards";
import { useEffect, useState } from "react";

export default function GroupCards() {
  async function fetchProducts() {
    try {
      const url = "http://localhost:5000/api/products";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      const data = await response.json();

      console.log(`data: `, data);
      setProducts(data);
    } catch (error) {
      console.log("unable to fetch data", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-fit h-fit flex">
      <Cards
        imgSrc={"/bread1.png"}
        Title={"The Coldest Sunset"}
        bosyText={"Hello"}
      />
      <Cards
        imgSrc={"/bread1.png"}
        Title={"The Coldest Sunset"}
        bosyText={"Hello"}
      />
      <Cards
        imgSrc={"/bread1.png"}
        Title={"The Coldest Sunset"}
        bosyText={"Hello"}
      />
    </div>
  );
}
