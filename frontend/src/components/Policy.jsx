import React from "react";

const Policy = () => {
  return (
    <div className="flex sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="w-64">
        <img
          src="https://singhaniya0411.github.io/MERN-Ecommerce-Project/exchange_icon.png"
          className="w-12 m-auto mb-5"
          alt="exchange"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer a hassle free exchange policy</p>
      </div>
      <div className="w-64">
        <img
          src="https://singhaniya0411.github.io/MERN-Ecommerce-Project/support_icon.png"
          className="w-12 m-auto mb-5"
          alt="exchange"
        />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">
          We provide 24/7 customer suuport to our customers for their
          satisfaction
        </p>
      </div>
      <div className="w-64">
        <img
          src="https://singhaniya0411.github.io/MERN-Ecommerce-Project/quality_img.png"
          className="w-12 m-auto mb-5"
          alt="exchange"
        />
        <p className="font-semibold">High Quality Products</p>
        <p className="text-gray-400">
          Our product undergoes to high quality check for providing best
          products to our customer
        </p>
      </div>
    </div>
  );
};

export default Policy;
