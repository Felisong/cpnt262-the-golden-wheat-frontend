"use client";
import CardsTest from "../components/CardsTest";
import { useEffect, useState } from "react";

export default function CardsGroupTest() {
  const [products, setProducts] = useState(null);

  // function
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
    <>
      <div id="buns" className="w-fit h-fit flex">
        {products ? (
          products.map((product) => (
            <CardsTest
              key={product.id}
              cardProps={{
                title: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
              }}
            />
          ))
        ) : (
          <p> Loading Cards...</p>
        )}
      </div>
    </>
  );
}
