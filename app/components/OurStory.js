"use client";
import Button from "./Button";

export default function OurStory() {
  return (
    <>
      <div>
        <h2 className="text-4xl bg-yellowBright p-4 m-4"> Baked With Love</h2>
      </div>

      <div className="relative h-fit ">
        <img
          src="/baker-holding-metal-tray-full-fresh-croissants-illuminated-with-lovely-light-from-window-ai-generative.jpg"
          className="rounded-full h-[350px] w-[350px] z-10 relative p-4 md:left-56 mx-4 md:h-[400px] md:w-[400px] md:mr-0 lg:ml-96"
        ></img>
        <div
          className="text-lg p-4 text-center relative md:w-96 top-11
        "
        >
          <p>
            If you want to know about the passionate team here at The Golden
            Wheat Bakery...
          </p>
          <div className="flex justify-center p-2">
            <Button
              backgroundColor="yellowBright md:white"
              borderColor="darkBlue"
              text="Click Here"
              textColor="brownBg "
              url="/about"
            />
          </div>
        </div>

        <div className="absolute top-12 w-full h-72 bg-softYellow z-0"></div>
      </div>
    </>
  );
}
