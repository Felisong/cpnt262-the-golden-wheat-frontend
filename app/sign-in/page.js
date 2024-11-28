"use client";
import { useState } from "react";
import LogIn from "../components/LogIn";

export default function SignIn() {
  // const [isLoggingIn, setIsLoggingIn] = useState(false);

  // function SetIsUserLoggedIn() {
  //   if (!isLoggingIn) {
  //     try {
  //       setIsAccTrue(localStorage.getItem("IsLoggedIn"));
  //     } catch (error) {
  //       console.error("No item in localstorage");
  //     } finally {
  //       if (typeof isLoggingIn !== "String") {
  //         setIsAccTrue(false);
  //       } else {
  //         setIsAccTrue(true);
  //       }
  //     }
  //   }
  // }

  return (
    <>
      <div className="flex m-auto">
        <div
          className={` bg-yellowBright bg-no-repeat bg-contain bg-center rounded-lg flex-col m-4`}
        >
          <LogIn />
        </div>
      </div>
    </>
  );
}
