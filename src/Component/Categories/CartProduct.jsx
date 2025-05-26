import React from "react";

export default function CartProduct({
  id,
  name,
  desc,
  price,
  pdf,
  img,
  deleteHandler,
}) {
  return (
    <div className="flex flex-col  sm:flex-row items-center sm:items-start gap-6 p-2  border rounded-lg shadow-sm">
      {/* Product Image */}
      <img
        src={img}
        alt="Product"
        className="w-32 h-32 object-cover rounded-md bg-gray-100"
      />

      {/* Product Details */}
      <div className="flex flex-col gap-2 flex-grow text-center sm:text-left">
        <h2 className="text-lg font-semibold text-gray-800">
          {" "}
          {id}- {name} <span className="text-xs">PDF form</span>
        </h2>{" "}
        
        <span className="text-sm text-gray-500 text-left">{desc}</span>
        <span className="text-md font-medium text-green-600 text-left">₹ {price}</span>
        <a href={pdf} className="text-left" aria-disabled > File </a>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center sm:items-end gap-3 mt-4 sm:mt-0">
        
        <button
          className="text-red-500 cursor-pointer border-2 py-2 px-4 rounded-4xl border-red-400 text-sm hover:bg-red-500 hover:text-white"
          onClick={deleteHandler}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
