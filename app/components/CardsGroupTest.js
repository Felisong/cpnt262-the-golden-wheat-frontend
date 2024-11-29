"use client";
import CardsTest from "../components/CardsTest";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CardsGroupTest() {
  const [products, setProducts] = useState(null);

  // function
  async function fetchProducts() {
    try {
      const url = "http://localhost:4000/api/products";
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
    <div className="container mx-auto flex">
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products ? (
          products.map((product) => (
            <CardsTest
              key={product.id || uuidv4()}
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
    </div>
  );
}
