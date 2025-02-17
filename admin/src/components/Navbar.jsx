import React from "react";
import { assets } from "../../public/assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setToken }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center px-[4%] py-2">
      <img className="w-[max(10%,120px)]" src={assets.logo} alt="photo" />
      <button
        onClick={() => {
          setToken("");
          navigate("/");
        }}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
