"use client";
import { useState } from "react";
import LogIn from "../components/LogIn";

export default function SignIn() {
  return (
    <>
      <div className="flex justify-center">
        <div
          className={` bg-yellowBright bg-no-repeat bg-contain bg-center rounded-lg flex-col m-4 w-10/12 md:w-1/2 lg:w-1/3`}
        >
          <LogIn />
        </div>
      </div>
    </>
  );
}
