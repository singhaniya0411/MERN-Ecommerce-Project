import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  // Store subtotal value to avoid multiple function calls
  const subtotal = getCartAmount();
  const shippingFee = Number(delivery_fee) || 0;
  const total =
    subtotal === 0
      ? 0
      : (parseFloat(subtotal) + parseFloat(shippingFee)).toFixed(2);
  const formattedTotal = Number(total).toFixed(2);

  useEffect(() => {
    // console.log(subtotal);
  }, [subtotal]);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {subtotal}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {shippingFee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {formattedTotal}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
