import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productID } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productsData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productID) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productID, products]);
  return productsData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product images */}

        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productsData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>

          <div className="w-full sm:w-[84%]">
            <img className="w-full h-auto " src={image} alt="" />
          </div>
        </div>

        {/* Prouct info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productsData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img
              src="https://singhaniya0411.github.io/MERN-Ecommerce-Project/star_icon.png"
              alt=""
              className="w-3 5"
            />
            <img
              src="https://singhaniya0411.github.io/MERN-Ecommerce-Project/star_icon.png"
              alt=""
              className="w-3 5"
            />
            <img
              src="https://singhaniya0411.github.io/MERN-Ecommerce-Project/star_icon.png"
              alt=""
              className="w-3 5"
            />
            <img
              src="https://singhaniya0411.github.io/MERN-Ecommerce-Project/star_icon.png"
              alt=""
              className="w-3 5"
            />
            <img
              src="https://singhaniya0411.github.io/MERN-Ecommerce-Project/star_icon.png"
              alt=""
              className="w-3 5"
            />
            <p className="pl-2">(122)</p>
          </div>

          <div className="">
            <p className="mt-5 text-3xl font-mediumt">
              {currency}
              {productsData.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5">
              {productsData.description}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productsData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-gray-300 ${
                      item === size ? "border-b-slate-700" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => addToCart(productsData._id, size)}
              className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700"
            >
              ADD TO CART
            </button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original product</p>
              <p>Cash on delivery is availbale on this product</p>
              <p>Easy Return and Exchamge policy within 7 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Reiview Section  */}

      <div className="mt-10">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-5 py-5 text-sm text-gray-700">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling the products
          </p>
          <p>
            This e-commerce website offers a sleek and user-friendly interface,
            making shopping for clothing a seamless experience. With a wide
            range of trendy options and efficient delivery, it's perfect for
            fashion enthusiasts.
          </p>
        </div>
      </div>

      {/*----------- Display related products---------- */}

      <RelatedProduct
        category={productsData.category}
        subCategory={productsData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
