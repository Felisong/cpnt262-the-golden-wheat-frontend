"use client";
import LogIn from "../components/LogIn";

export default function SignIn() {
  return (
    <>
      <div className="flex flex-wrap flex-col">
        <div
          className={` bg-yellowBright bg-no-repeat bg-contain bg-center rounded-lg flex-col m-4`}
        >
          <LogIn />
        </div>
      </div>
    </>
  );
}
