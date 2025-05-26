import React from "react";

export default function CarauselCard({ id, text, image }) {
  return (
    <div className="relative flex flex-col items-center h-48 w-44 md:h-56 md:w-52 rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={text}
        className="h-3/4 w-full object-center object-fill rounded-t-xl"
      />
      <div className="flex flex-col items-center justify-center h-1/4 w-full px-2 py-1">
        <p className="text-sm md:text-base font-semibold text-gray-800 dark:text-white">
          {text}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">ID: {id}</p>
      </div>
    </div>
  );
}
