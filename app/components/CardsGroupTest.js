"use client";
import CardsTest from "../components/CardsTest";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LikeableCards from "./LikeableCards";

export default function CardsGroupTest() {
  const [products, setProducts] = useState(null);
  const [buns, setBuns] = useState([]);
  const [breads, setBreads] = useState([]);
  const [pastries, setPastries] = useState([]);

  // function
  async function fetchProducts() {
    try {
      // change url to 4000 if mac
      const url = "http://localhost:5000/api/products";
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
          setBuns(buns.push(item));
        }
        if (item.category === "Bread") {
          setBreads(breads.push(item));
        }
        if (item.category === "Pastries") {
          setPastries(pastries.push(item));
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
            <LikeableCards
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
