"use client";

export default function Cards() {
  return (
    <div className=" px-1 py-1 m-4 w-11/12 md:w-80  md:flex-row rounded-t-3xl overflow-hidden shadow-lg bg-yellow-800 ">
      <img
        className="w-full rounded-t-3xl"
        src="/bread1.png"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-rose-500 text-base flex justify-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="text bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  );
}
