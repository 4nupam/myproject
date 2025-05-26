import React from "react";

export default function WorkCard({
  image,
  title,
  desc,
  gitLink,
  liveLink,
}) {
  return (
    <div className="flex flex-col md:flex-row bg-white/20 dark:bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden p-6 gap-6 w-full max-w-6xl mx-auto border border-gray-200 dark:border-gray-700 transition-all hover:scale-[1.02] duration-300">
      
      <div className="w-full md:w-1/3 overflow-hidden rounded-xl">
        <img
          src={image}
          alt="Project"
          className="w-full h-64 object-cover rounded-xl transform hover:scale-105 transition duration-300"
        />
      </div>

      <div className="flex flex-col justify-between text-left flex-1">
        <div>
          <h2 className="text-3xl font-bold text-amber-300  mb-2">
            {title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            {desc}
          </p>
        </div>

        <div className="flex gap-4 mt-6">
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-all shadow-md hover:shadow-lg"
          >
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-all shadow-md hover:shadow-lg"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
