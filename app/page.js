import Image from "next/image";
import Hero from "../app/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <div className="items-center justify-items-center h-fit">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Hero title="baked to perfection."></Hero>
        </main>
      </div>
      <section className="text-lg p-8 text-center md:px-60">
        <>
          <p className="">
            Welcome to Golden Wheat Bakery, your local haven for handcrafted
            artisan bread, delectable pastries, and savory buns.
          </p>
          <p>
            We pride ourselves on using the finest quality ingredients and
            traditional baking methods to create delicious treats that bring joy
            to every bite. Explore our offerings and discover the taste of
            freshly baked goodness that has made us a beloved part of the
            community!
          </p>
        </>
      </section>
    </>
  );
}
