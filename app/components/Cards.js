"use client";

export default function Cards() {
  return (
    <div className="max-w-sm rounded-t-full overflow-hidden shadow-lg bg-blue-300">
      <img className="w-full" src="/bread1.png" alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-yellow-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-rose-300 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
          #photography
        </span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
        <span className="inline-block bg-rose-300 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
}
