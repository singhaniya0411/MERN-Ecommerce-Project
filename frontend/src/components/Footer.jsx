import React from "react";

const Footer = () => {
  return (
    <div>
      <hr className="mt-10 border border-x-gray-700" />
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Redefining fashion with style and elegance. Discover your unique
            look with us!
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>

          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="cursor-pointer">+1 212-2580-771</li>
            <li className="cursor-pointer">contact@embussshh.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ embussshh.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
