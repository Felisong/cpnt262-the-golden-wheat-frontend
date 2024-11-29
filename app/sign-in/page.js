"use client";
import { useState } from "react";
import LogIn from "../components/LogIn";

export default function SignIn() {
  return (
    <>
      <div className="flex m-auto">
        <div
          className={` bg-yellowBright bg-no-repeat bg-contain bg-center rounded-lg flex-col m-4 w-10/12`}
        >
          <LogIn />
        </div>
      </div>
    </>
  );
}
