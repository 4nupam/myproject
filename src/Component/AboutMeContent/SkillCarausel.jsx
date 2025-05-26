import React, { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import datas from "../DataFiles/CareerData.json";
import CarauselCard from "./CarauselCard";
import WindowMethod from "./WindowMethod";

export default function SkillCarausel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const width = WindowMethod();

  const visibleCount =
    width < 640 ? 1 : width < 768 ? 3 : width < 1024 ? 4 : width < 1280 ? 5 : 6;

  const totalItems = datas.length;

  const nextHandler = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevHandler = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const visibleItems = Array.from({ length: visibleCount }, (_, i) => {
    const index = (currentIndex + i) % totalItems;
    return datas[index];
  });

  return (
    <div className="w-full flex flex-col items-center p-4">
      {/* Navigation Arrows */}
      <div className="flex justify-between w-full max-w-7xl items-center mb-4">
        <button
          onClick={prevHandler}
          className="text-3xl cursor-pointer text-gray-200 hover:text-gray-300"
        >
          <GrFormPreviousLink />
        </button>
        <button
          onClick={nextHandler}
          className="text-3xl cursor-pointer text-gray-200 hover:text-gray-300"
        >
          <GrFormNextLink />
        </button>
      </div>

      {/* Responsive Grid */}
      <div
        className={`grid gap-4 w-full place-items-center max-w-7xl`}
        style={{
          gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
        }}
      >
        {visibleItems.map((item) => (
          <CarauselCard
            key={item.id}
            id={item.id}
            text={item.name}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
