import React, { useState } from "react";
import Techdata from "../DataFiles/TechData.json";
import TechContent from "../BlogContent/TechContent";
import { FaSearch } from "react-icons/fa";
import { addCourses } from "../../Redux/ConfigureSlices";
import { useSelector, useDispatch } from "react-redux";

export default function Tech() {
  const [data, setData] = useState("");
  const [list, setList] = useState(Techdata);
  const [error, setError] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.stores.items); // Get the cart items

  // Check if the product is already in the cart
  const isProductInCart = (courseId) => {
    return cartItems.some((item) => item.id === courseId); // Returns true if product is in the cart
  };

  const HandleCourses = (course) => {
    if (isProductInCart(course.id)) {
      alert("Already Added");
      return;
    }

    dispatch(addCourses(course));
  };

  const searchHandler = (e) => {
    if (e) e.preventDefault();
    if (!data.trim()) {
      setError(true);
      return;
    }
    const filtered = Techdata.filter((item) =>
      item.name.toLowerCase().includes(data.toLowerCase())
    );
    setList(filtered);
    setVisibleCount(4);
    setError(false);
  };

  const loadMoreHandler = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className=" bg-gray-900 h-full">
      <div className="searchbar flex   items-center gap-2 m-auto max-w-4xl sm:p-2 p-3 border-b-2 border-amber-300">
        <input
          type="text"
          placeholder="Search here"
          className="outline-none text-amber-300 flex-1 bg-transparent"
          value={data}
          onChange={(e) => setData(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchHandler();
            }
          }}
        />
        <button
          className="border-2 p-2 rounded-3xl cursor-pointer bg-gray-400 text-white"
          onClick={searchHandler}
        >
          <FaSearch />
        </button>
        {error && <p className="text-red-600 ml-4">Search Bar is Empty</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 m-4">
        {list.length > 0 ? (
          list.slice(0, visibleCount).map((e) => (
            <TechContent
              key={e.id}
              id={e.id}
              Title={e.name}
              desc={e.desc}
              image={e.image}
              price={e.price}
              pdf={e.pdf}
              isDisabled={isProductInCart(e.id)}
              buttonText={isProductInCart(e.id) ? "Added" : "Add to Cart"} // Conditionally render button text
              onAdd={() => HandleCourses(e)}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No results found
          </p>
        )}
      </div>

      {visibleCount < list.length && (
        <div className="flex justify-center m-2">
          <button
            className="px-6 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-all"
            onClick={loadMoreHandler}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}
