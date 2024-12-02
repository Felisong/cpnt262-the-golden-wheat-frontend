import Link from "next/link";

export default function Logo(width, size) {
  return (
    <Link className="flex items-center p-2 cursor-pointer my-8" href={"/"}>
      <img
        src="./logo.png"
        alt="logo for The Golden Wheat. It is a pink background with a yellow wheat in the center. Click on here to navigate Home."
        className={`${width}ml-4 my-4`}
      ></img>
      <h2 className={`text-yellow-400  md:justify-between pl-2 ${size}`}>
        THE GOLDEN <br></br> WHEAT FACTORY
      </h2>
    </Link>
  );
}
