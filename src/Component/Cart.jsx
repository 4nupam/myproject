import React from "react";
import CartProduct from "./Categories/CartProduct";
import { useSelector } from "react-redux";
import { removeCourses } from "../Redux/ConfigureSlices";
import { useDispatch } from "react-redux";

export default function Cart() {
  const List = useSelector((state) => state.stores?.items || []);
  const price = useSelector((state) =>
    state.stores.items.reduce((acc, curr) => {
      return acc + Number(curr.price);
    }, 0)
  );
  const dispatch = useDispatch();

  const deleteHandler = (element) => {
    dispatch(removeCourses(element));
  };
  return (
    <div className="flex flex-col gap-6 p-4 max-w-full mx-auto">
      {/* Cart Product */}
      {List.length > 0 ? (
        List?.map((e) => (
          <div className="flex flex-col gap-1 justify-start" key={e.id}>
            {" "}
            <CartProduct
              id={e.id}
              name={e.name}
              desc={e.desc}
              price={e.price}
              pdf={e.pdf}
              img={e.image}
              deleteHandler={() => deleteHandler(e.id)}
            />
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-svh bg-gray-100 rounded-lg p-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className="w-40 h-40 mb-4 opacity-70"
          />
          <h2 className="text-2xl font-semibold text-gray-700">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mt-2 text-center">
            Looks like you haven’t added anything to your cart yet.
          </p>
        </div>
      )}

      {/* Total Price & Buy Button */}
      {List.length > 0 ? (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-4">
          <span className="text-lg font-semibold text-green-700">
            Total Price : ₹ {price}
          </span>

          <button className="px-6 py-2 cursor-pointer bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition">
            BUY NOW
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
