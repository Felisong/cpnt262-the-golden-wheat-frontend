"use client";
import CardsTest from "../components/CardsTest";
import { useEffect, useState } from "react";

export default function CardsGroupTest() {
  const [products, setProducts] = useState(null);

  // functions
  async function fetchProducts() {
    try {
      const url = "http://localhost:5000/api/products";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      const data = await response.json();

      console.log(`data: `, data.category);

      setProducts(data);
    } catch (error) {
      console.log("unable to fetch data", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <CardsTest />
    </>
  );
}
