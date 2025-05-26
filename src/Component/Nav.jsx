import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
const Nav = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const TotalItems = useSelector((state) => state.stores.items?.length || "");
  const navHandler = () => {
    setNav(!nav);
    onclose()
  };
  const handleNavigation = (path) => {
    navigate(path);
    setNav(false); // close the mobile menu
  };

  return (
    <nav className="w-full bg-gray-900 shadow-md px-4 py-3 flex justify-between items-center relative z-10">
      {/* Logo */}
      <div className="text-2xl font-bold italic text-amber-500">4</div>

      {/* Desktop Nav Links */}
      <ul className="hidden sm:flex items-center gap-6 text-gray-400 font-medium">
        <li
          className="hover:text-amber-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <a
          href="https://beyoung-app-bice.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-600 cursor-pointer"
        >
          Store
        </a>
        <li
          className="hover:text-amber-600 cursor-pointer"
          onClick={() => navigate("/AboutMe")}
        >
          About Me
        </li>
        <li
          className="hover:text-amber-600 cursor-pointer"
          onClick={() => navigate("/Mywork")}
        >
          My Work
        </li>
        <li className="relative group cursor-pointer">
          Blogs
          <ul className="absolute top-6 left-0 bg-white dark:bg-[#222] p-2 rounded shadow-md hidden group-hover:flex flex-col gap-2 w-32 text-sm">
            <li
              className="hover:text-amber-600"
              onClick={() => navigate("/Tech")}
            >
              Tech
            </li>
            <li
              className="hover:text-amber-600"
              onClick={() => navigate("/Story")}
            >
              Stories
            </li>
            <li
              className="hover:text-amber-600"
              onClick={() => navigate("/Travel")}
            >
              Travel
            </li>
          </ul>
        </li>
        <li
          className="hover:text-amber-600 cursor-pointer"
          onClick={() => navigate("/Contact")}
        >
          Contact
        </li>
      </ul>

      {/* Account Section */}
      <div className="hidden sm:flex items-center gap-4 text-gray-400 font-medium">
        <span
          className="hover:text-amber-600 cursor-pointer"
          onClick={() => navigate("/MyAccount")}
        >
          My Account
        </span>
        <button
          onClick={() => navigate("/Login")}
          className="px-4 py-1 border cursor-pointer border-gray-300 rounded hover:bg-amber-500 hover:border-amber-500 hover:text-white transition"
        >
          Log In
        </button>
        <div className="flex items-center gap-2">
          <button
            className="text-2xl cursor-pointer hover:text-amber-500"
            onClick={() => navigate("/Cart")}
          >
            <CiShoppingCart />
          </button>
          <span className="text-sm">{TotalItems}</span>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div
        className="sm:hidden text-2xl text-amber-500 cursor-pointer"
        onClick={navHandler}
      >
        {nav ? <IoIosCloseCircle /> : <RiMenu3Fill />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="absolute top-14 left-0 w-full bg-gray-800 shadow-md px-6 py-4 flex flex-col gap-4 text-gray-400 font-medium sm:hidden">
          <ul className="flex flex-col gap-3">
            <li
              className="hover:text-amber-600 cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              Home
            </li>
            <li
              className="hover:text-amber-600 cursor-pointer"
              onClick={() => handleNavigation("/Store")}
            >
              Store
            </li>

            <li
              className="hover:text-amber-600 cursor-pointer"
              onClick={() => handleNavigation("/AboutMe")}
            >
              About Me
            </li>
            <li
              className="hover:text-amber-600 cursor-pointer"
              onClick={() => handleNavigation("/Blog")}
            >
              Blog
            </li>
            <li className="cursor-pointer">
              Categories
              <ul className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                <li
                  className="hover:text-amber-600"
                  onClick={() => handleNavigation("/Tech")}
                >
                  Tech
                </li>
                <li
                  className="hover:text-amber-600"
                  onClick={() => handleNavigation("/Story")}
                >
                  Stories
                </li>
                <li
                  className="hover:text-amber-600"
                  onClick={() => handleNavigation("/Travel")}
                >
                  Travel
                </li>
              </ul>
            </li>
            <li
              className="hover:text-amber-600 cursor-pointer"
              onClick={() => handleNavigation("/Contact")}
            >
              Contact
            </li>
            <div className="flex items-center gap-2">
              <button
                className="text-1xl flex items-center gap-2 cursor-pointer hover:text-amber-500"
                onClick={() => handleNavigation("/Cart")}
              >
                Cart <CiShoppingCart />
              </button>
              <span className="text-sm">{TotalItems}</span>
            </div>
          </ul>
          <div className="border-t pt-3">
            <span
              className="block mb-2 hover:text-amber-600 cursor-pointer"
              onClick={() => handleNavigation("/MyAccount")}
            >
              My Account
            </span>

            <button
              onClick={() => handleNavigation("/Login")}
              className="w-full cursor-pointer px-4 py-2 border border-amber-500 rounded hover:bg-amber-500 hover:text-white transition"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
