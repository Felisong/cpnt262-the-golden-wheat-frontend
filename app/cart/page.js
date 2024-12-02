"use client";
import { useEffect, useState } from "react";
import CardsTest from "../components/CardsTest";
import CardsGroupTest from "../components/CardsGroupTest";
import OrderForm from "../components/OrderForm";

export default function Cart() {
  return (
    <div className="h-[60vh]">
      <p>In progress.</p>
      <div className="bg-yellowBright flex justify-center items-center mx-auto rounded-full text-center w-10/12 md:w-1/2 h-fit">
        <OrderForm />
      </div>
    </div>
  );
}
