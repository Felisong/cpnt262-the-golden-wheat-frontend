import { v4 as uuidv4 } from "uuid";
import LikeableCards from "./LikeableCards";
import { useEffect, useState } from "react";

export default function DisplayLikedProducts() {
  const [likedProducts, setLikedProducts] = useState(null);

  useEffect(() => {
    setLikedProducts(localStorage.getItem("productsLiked") || []);
  }, []);

  return (
    <div className="container mx-auto flex">
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4">
        {console.log("test")}
        {console.log(likedProducts)}
      </div>
    </div>
  );
}

// {likedProducts ? (
//   likedProducts.map((product) => (
//     <LikeableCards
//       key={uuidv4()}
//       cardProps={{
//         name: product.name,
//         description: product.description,
//         price: product.price,
//         image: product.image,
//       }}
//     />
//   ))
// ) : (
//   <p> Loading Cards...</p>
// )}
