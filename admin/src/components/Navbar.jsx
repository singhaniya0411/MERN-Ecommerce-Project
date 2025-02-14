import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex justify-between items-center px-[4%] py-2">
      <img
        className="w-[max(10%,120px)]"
        src="https://singhaniya0411.github.io/MERN-Ecommerce-Project/logo.png"
        alt="photo"
      />
      <button
        onClick={() => setToken("")}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
