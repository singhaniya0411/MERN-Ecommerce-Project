import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setvisiible] = useState(false);
  const { navigate } = useContext(ShopContext);

  const { setShowSearch, getCartCount, token, setToken, setCartItems } =
    useContext(ShopContext);

  const logout = async () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div
      className="flex items-center justify-between py-5
    font-medium"
    >
      <img
        onClick={() => navigate("/")}
        src="https://singhaniya0411.github.io/MERN-Ecommerce-Project/logo.png"
        className="w-36"
        alt="logo"
      />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/MERN-Ecommerce-Project"
          className="flex flex-col items-center gap-1"
        >
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.8px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/MERN-Ecommerce-Project/collection"
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.8px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/MERN-Ecommerce-Project/about"
          className="flex flex-col items-center gap-1"
        >
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.8px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/MERN-Ecommerce-Project/contact"
          className="flex flex-col items-center gap-1"
        >
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.8px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <FaSearch
          onClick={() => setShowSearch(true)}
          className="cursor-pointer w-5"
        />

        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 cursor-pointer"
            src="https://singhaniya0411.github.io/MERN-Ecommerce-Project/profile_icon.jpeg"
            alt="profile"
          />

          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className=" relative">
          <img
            src="https://singhaniya0411.github.io/MERN-Ecommerce-Project/cart_img.png"
            className="w-5 min-w-5"
            alt="cart"
          />

          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px] text-sm">
            {getCartCount()}
          </p>
        </Link>

        <RiMenuLine
          onClick={() => setvisiible(true)}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-4 right-4 bottom-4 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className=" flex flex-col text-gray-600">
          <div
            onClick={() => setvisiible(false)}
            className="flex items-center gap-4 p-3"
          >
            <IoMdArrowDropdown className="h-4 rotate-[-90deg]" alt="" />
            <p className="cursor-default">Back</p>
          </div>
          <NavLink
            onClick={() => setvisiible(false)}
            className="py-2 pl-6 border "
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setvisiible(false)}
            className="py-2 pl-6 border "
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setvisiible(false)}
            className="py-2 pl-6 border "
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setvisiible(false)}
            className="py-2 pl-6 border "
            to="contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
