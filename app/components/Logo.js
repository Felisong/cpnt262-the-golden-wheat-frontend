export default function Logo() {
  return (
    <div className="flex items-center p-6">
      <img
        src="./logo.png"
        alt="logo for The Golden Wheat. It is a pink background with a yellow wheat in the center"
        className="w-12 md:w-24 lg:w-28 "
      ></img>
      {/* <Image
        src="/logo.png"
        width={100}
        height={100}
        alt="Picture of the author"
      /> */}
      <h2
        className={`text-yellow-400 p-4 text-2xl lg:text-2xl md:text-2xl sm:text-lg`}
      >
        THE GOLDEN <br></br> WHEAT FACTORY
      </h2>
    </div>
  );
}
