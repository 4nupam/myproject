import React from "react";

export default function TechContent({
  id,
  image,
  Title,
  desc,
  pdf,
  price,
  onAdd,
  buttonText,
  isDisabled,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6 w-full m-auto p-6 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
      <img
        src={image}
        alt="Tech"
        className="w-full sm:w-50 h-50 object-cover rounded-xl border-4 border-white shadow-md transition-transform duration-300 transform hover:scale-105"
      />
      <div className="flex flex-col justify-between space-y-4 text-white">
        <h2 className="text-3xl font-semibold tracking-wide">
          {id} - {Title}
        </h2>
        <article className="text-sm sm:text-base leading-relaxed opacity-95">
          {desc}
        </article>
        <div className="flex items-center justify-end gap-2 w-full mt-3 rounded-xl p-4">
          {/* Left: Price and PDF Preview */}
          <div className="flex items-center gap-1 text-lg font-bold text-green-400 whitespace-nowrap">
            ₹<span>{price} Only /-</span>
            {/* PDF Preview (optional - hide on small screens if needed) */}
        
          </div>

          {/* Right: Button */}
          <button
            onClick={onAdd}
            disabled={isDisabled}
            className={`px-4 py-2 rounded font-semibold transition-all ${
              isDisabled
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-green-500 cursor-pointer text-white hover:bg-green-600"
            }`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
