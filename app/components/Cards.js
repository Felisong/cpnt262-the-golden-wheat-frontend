"use client";

import Button from "./Button";

export default function Cards(product) {
  return (
    <div
      className="w-11/12 md:w-10/12 p-1 m-4 md:m-2 rounded-t-3xl overflow-hidden shadow-lg bg-brownBg"
      id={product.id}
    >
      <img
        className="w-full rounded-t-3xl"
        src={product.image}
        alt={producs.name}
      />
      <div className="px-6 py-4">
        <div className="text-yellowBright font-bold text-xl mb-2">
          {product.name}
        </div>
        <p className="text-yellowBright text-base flex justify-center">
          {product.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  );
}
