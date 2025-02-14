import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaListUl } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[12px]">
        <NavLink
          className="flex items-center h-12 gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/add"
        >
          <img className="w-6 invert" src={assets.add_icon} alt="" />
          <p className="hidden sm:block">Add Items</p>
        </NavLink>
        <NavLink
          className="flex items-center h-12 gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/order"
        >
          <img className="w-6" src={assets.order_icon} alt="" />
          <p className="hidden sm:block">Orders</p>
        </NavLink>
        <NavLink
          className="flex items-center h-12 gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/list"
        >
          <FaListUl className="h-5 w-7" />
          <p className="hidden sm:block">List</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
