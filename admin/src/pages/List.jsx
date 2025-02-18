import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { currency } from "../App";
import { backendUrl } from "../App";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      // console.log(response.data);
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/product/remove`,
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <p className="text-xl font-semibold mb-2">All Products List</p>
      <div>
        {/* ------------- lIST TABLE TITLE */}
        <div className="flex justify-between py-1 px-1 gap-2 border bg-gray-100 text-xs md:text-sm">
          <div className="w-[19%]">
            <b>Image</b>
          </div>
          <div className="w-[19%]">
            <b>Name</b>
          </div>
          <div className="w-[19%]">
            <b>Category</b>
          </div>
          <div className="w-[19%]">
            <b>Price</b>
          </div>
          <div className="text-end pr-4 w-[19%]">
            <b>Action</b>
          </div>
        </div>

        {/* -----------Product List---------- */}
        {list.map((item, index) => (
          <div
            className="flex justify-between items-center gap-2 py-1 px-2 border text-sm"
            key={index}
          >
            <div className="w-[19%]">
              <img className="w-12" src={item.image[0]} alt="" />
            </div>
            <div className="w-[19%]">
              <p>{item.name}</p>
            </div>
            <div className="w-[19%]">
              <p>{item.category}</p>
            </div>
            <div className="w-[19%]">
              <p>
                {currency}
                {item.price}
              </p>
            </div>
            <div className="w-[19%]">
              <p
                onClick={() => removeProduct(item._id)}
                className="text-end pr-4 cursor-pointer text-[14px]"
              >
                X
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
