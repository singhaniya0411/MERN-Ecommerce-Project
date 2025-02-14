import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL; // ✅ Render Backend URL

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  // ✅ Add to Cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItems);
    cartData[itemId] = {
      ...cartData[itemId],
      [size]: (cartData[itemId]?.[size] || 0) + 1,
    };
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/add`,
          { itemId, size },
          { headers: { token } }
        );
        toast.success("Added to your cart.");
      } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || "Error adding to cart");
      }
    }
  };

  // ✅ Get Cart Count
  const getCartCount = () => {
    return Object.values(cartItems).reduce(
      (total, sizes) =>
        total + Object.values(sizes).reduce((sum, count) => sum + count, 0),
      0
    );
  };

  // ✅ Update Cart Quantity
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || "Error updating quantity");
      }
    }
  };

  // ✅ Fetch Products
  const getProductsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/product/list`);
      if (data.success) setProducts(data.products);
      else toast.error(data.message);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load products");
    }
  };

  // ✅ Fetch User Cart (if logged in)
  const getUserCart = async (token) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/cart/get`,
        {},
        { headers: { token } }
      );
      if (data.success) setCartItems(data.cartData);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching cart data");
    }
  };

  // ✅ Get Cart Total Amount
  const getCartAmount = () => {
    return Object.entries(cartItems)
      .reduce((total, [itemId, sizes]) => {
        const itemInfo = products.find((p) => p._id === itemId);
        if (!itemInfo) return total;
        return (
          total +
          Object.values(sizes).reduce(
            (sum, count) => sum + count * itemInfo.price,
            0
          )
        );
      }, 0)
      .toFixed(2);
  };

  // ✅ Load Products on Mount
  useEffect(() => {
    getProductsData();
  }, []);

  // ✅ Load Cart Data if Token Exists
  useEffect(() => {
    if (token) getUserCart(token);
  }, [token]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    getCartAmount,
    updateQuantity,
    navigate,
    setToken,
    token,
    setCartItems,
    backendUrl,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
