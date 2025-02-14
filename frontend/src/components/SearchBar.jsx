import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { HiBuildingLibrary } from "react-icons/hi2";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />

        <FaSearch className="w-4" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-5 cursor-pointer"
        src="https://singhaniya0411.github.io/MERN-Ecommerce-Project/cross_img.webp"
        alt="cross"
      />
    </div>
  ) : null;
};

export default SearchBar;
