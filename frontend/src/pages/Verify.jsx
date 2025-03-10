import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }

      console.log(success);
      console.log(orderId);
      const response = await axios.post(
        `${backendUrl}/api/order/verifystripe`,
        { success, orderId },
        { headers: { token } }
      );
      console.log(response.data);
      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
      } else {
        toast.error(
          "Something went wrong while placing order ! Please try again in few minutes."
        );
        navigate("/cart");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);
  return;
  <div></div>;
};

export default Verify;
