"use client";
import LogIn from "../components/LogIn";

export default function SignIn() {
  return (
    <>
      <div
        class="flex relative items-center justify-center lg:w-full md:w-full sm:w-auto sm:none mt-40
     overflow-hidden bg-yellow-50"
      >
        <h1 class="absolute z-10">
          <LogIn />
        </h1>
        <div>
          <img
            src="./bread-bg.png"
            alt="bg of a bread container, holding the fillable form. There is bread on a table, and a knife seen nearby"
            className="sm:none"
          ></img>
        </div>
      </div>
    </>
  );
}
