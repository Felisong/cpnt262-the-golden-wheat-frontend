import { useEffect, useState } from "react";

export default function LikeableCards({ cardProps }) {
  const [isLiked, setIsLiked] = useState(false);
  const productsLikedArr =
    JSON.parse(localStorage.getItem("productsLiked")) || [];

  const saveLiked = () => {
    if (productsLikedArr.includes(product.name)) {
      setIsLiked(true);
    }
  };
  useEffect(() => {
    saveLiked();
  }, []);

  const product = {
    name: cardProps.name,
    description: cardProps.description,
    price: cardProps.price,
    image: cardProps.image,
  };
  function handleClick(e) {
    e.preventDefault();
    !isLiked ? setIsLiked(true) : setIsLiked(false);
  }

  // TODO: ERROR, Will always pop the last one added, instead of the actual value if it is older. Must find out how to specify.. maybe some index nonsense?
  // TODO: get it to not pop upon page reload.
  // Look into the hooks in react. I saw one which is called useContext?
  function handleLocalStorage() {
    const isInsideArr = (Element) => Element === product.name;
    const findIndex = productsLikedArr.findIndex(isInsideArr);

    if (!isLiked) {
      if (productsLikedArr.includes(product.name)) {
        productsLikedArr.splice(findIndex, 1);
        localStorage.setItem("productsLiked", JSON.stringify(productsLikedArr));
        // console.log("took product out");
      } else {
        // console.log("nothing to pull");
      }
    } else if (!productsLikedArr.includes(product.name)) {
      productsLikedArr.push(product.name);
      localStorage.setItem("productsLiked", JSON.stringify(productsLikedArr));
      // console.log("successfully added");
    } else {
      // console.log("already added");
    }
  }
  useEffect(() => {
    handleLocalStorage();
  }, [isLiked]);

  return (
    <div
      className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      id={product.id}
    >
      <img
        className="rounded-t-lg w-full h-40 object-cover"
        src={product.image}
        alt=""
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-44">
          {product.description}
        </p>
        <div className="flex justify-between">
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {product.price}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className={`size-8 stroke-yellowBright hover:stroke-red-300 hover:grow  ${
                !isLiked ? "fill-none" : "fill-yellowBright"
              }
              `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
