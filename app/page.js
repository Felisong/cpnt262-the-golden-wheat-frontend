import Image from "next/image";
import Hero from "../app/components/Hero/Hero";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero title="baked to perfection."></Hero>
      </main>
    </div>
  );
}
