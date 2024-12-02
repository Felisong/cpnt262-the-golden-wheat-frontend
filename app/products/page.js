"use client";

import Cards from "../components/originalCards/Cards";
import CardsGroupTest from "../components/CardsGroupTest";
import GroupCards from "../components/originalCards/GroupCards";
import { useEffect, useState } from "react";

export default function Products() {
  const [isAccTrue, setIsAccTrue] = useState(false);

  function SetIsUserLoggedIn() {
    setIsAccTrue(localStorage.getItem("isLoggedIn") || false);
  }
  useEffect(() => {
    SetIsUserLoggedIn();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="my-12 text-3xl text-center font-lexendExa">Products</h1>
      <CardsGroupTest />
    </div>
  );
  node;
}
