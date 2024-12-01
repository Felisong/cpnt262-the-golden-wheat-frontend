"use client";
import Cards from "./Cards";
import { useEffect, useState } from "react";

export default function GroupCards() {
  const [products, setProducts] = useState(null);

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

  console.log(products);
  return (
    <div className="w-fit h-fit flex">
      {products ? (
        products.map((product) => (
          <Cards
            key={product.id}
            cardProps={{
              name: product.name,
              description: product.description,
              price: product.price,
              image: product.image,
            }}
          />
        ))
      ) : (
        <p> Loading Cards...</p>
      )}

      {/* <Cards
        imgSrc={"/bread1.png"}
        Title={"The Coldest Sunset"}
        bodyText={"Hello"}
      />
      <Cards
        imgSrc={"/bread1.png"}
        Title={"The Coldest Sunset"}
        bodyText={"Hello"}
      /> */}
    </div>
  );
}
