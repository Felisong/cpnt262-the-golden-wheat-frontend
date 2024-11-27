export default function Logo() {
  return (
    <div className="flex items-center p-4">
      <img
        src="./logo.png"
        alt="logo for The Golden Wheat. It is a pink background with a yellow wheat in the center"
        className="w-20"
      ></img>
      <h2 className={`p-4 var(--highLight)`}>
        {" "}
        THE GOLDEN <br></br> WHEAT FACTORY
      </h2>
    </div>
  );
}
