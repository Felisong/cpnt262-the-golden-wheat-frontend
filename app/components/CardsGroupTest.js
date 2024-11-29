"use client";
import CardsTest from "../components/CardsTest";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CardsGroupTest() {
  const [products, setProducts] = useState(null);
  const [buns, setBuns] = useState(null);
  const [breads, setBreads] = useState(null);
  const [pastries, setPastries] = useState(null);
  // function
  async function fetchProducts() {
    try {
      const url = "http://localhost:4000/api/products";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data);

      // categories
      for (const item of data) {
        // for buns
        if (item.category === "Buns") {
          setBuns(item);
        }
        if (item.category === "Bread") {
          setBreads(item);
        }
        if (item.category === "Pastries") {
          setPastries(item);
        } else console.log("unable to push into a category");
      }
    } catch (error) {
      console.log("unable to fetch data", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(`buns: `, buns);
  console.log(`breads: `, breads);
  console.log(`pastries: `, pastries);
  console.log(typeof breads);

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
