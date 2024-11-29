"use client";
import { useEffect } from "react";
import CardsTest from "../components/CardsTest";

export default function Cart() {
  // import to products later

  // functions
  async function fetchProducts() {
    try {
      const url = "localhost:500/api/products";
      const response = await fetch(url);
      console.log(`response: `, response);
      const data = await response.json();
      console.log(`data: `, data);
    } catch (error) {
      console.log("unable to fetch data", error);
    }
  }

  useEffect(() => {
    fetchProducts;
  }, []);

  return (
    <>
      <CardsTest />
    </>
  );
}
