import { v4 as uuidv4 } from "uuid";
import LikeableCards from "./LikeableCards";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function DisplayLikedProducts() {
  const [likedProducts, setLikedProducts] = useState(null);

  useEffect(() => {
    setLikedProducts(JSON.parse(localStorage.getItem("productsLiked")) || []);
  }, []);

  return (
    <div className="grid">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {likedProducts === null && <p> No Likes yet. Go to menu to add.</p>}
        {likedProducts ? (
          likedProducts.map((product) => (
            <LikeableCards
              key={uuidv4()}
              cardProps={{
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
              }}
            />
          ))
        ) : (
          <p className=" text-center w-full">
            ... Loading Likes. If no likes yet, products can be liked in the{" "}
            <Link
              className="cursor-pointer text-blue-700 text-lg"
              href={"/products"}
            >
              Menu
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
