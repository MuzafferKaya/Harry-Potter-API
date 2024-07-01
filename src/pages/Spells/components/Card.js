import React from "react";
import { Link } from "react-router-dom";
import Favorite from "./Favorite";

const Card = ({ id, image, slug, category, incantation }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <div className="flex flex-grow items-center justify-center">
        <div className="relative">
          <img
            className="rounded-lg drop-shadow-md object-cover w-full"
            src={image || "https://potterdb.com/images/missing_spell.svg"}
            alt={slug}
          />
          <Favorite
            data={{
              id: id,
              image: image,
              slug: slug,
              category: category,
              incantation: incantation,
            }}
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow p-5 justify-end">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {slug}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {category} <br />
            {incantation}
          </p>
        </a>
        <Link
          to={`/spells/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
