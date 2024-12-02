"use client";
import Button from "./Button";

export default function OurStory() {
  return (
    <>
      <h2 className="text-4xl text-center bg-yellowBright p-4 md:m-4 w-full md:w-fit md:rounded-3xl">
        Baked With Love
      </h2>

      <div className="relative flex flex-col h-fit">
        {/* Holding contents on top of bg */}
        <div className="flex flex-col md:flex-row z-10 relative items-center">
          <img
            src="/baker-holding-metal-tray-full-fresh-croissants-illuminated-with-lovely-light-from-window-ai-generative.jpg"
            className="rounded-full h-[350px] w-[350px] p-4 mx-4 md:h-[400px] md:w-[400px]"
          ></img>
          <div className="text-darkBlue text-lg p-4 text-center">
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
        </div>

        <div className="absolute top-12 w-full h-72 bg-softYellow z-0"></div>
      </div>
    </>
  );
}
