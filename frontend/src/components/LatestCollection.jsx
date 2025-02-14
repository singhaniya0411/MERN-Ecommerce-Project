import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestproducts] = useState([]);

  useEffect(() => {
    setLatestproducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600">
          Unveiling the freshest styles to keep you ahead in fashion. Discover
          elegance with Embussshh!
        </p>
      </div>

      {/* Rendering products */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 ">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
