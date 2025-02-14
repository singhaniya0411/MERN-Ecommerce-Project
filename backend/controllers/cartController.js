
import userModel from "../models/userModel.js"


// Add product to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData;
    console.log("itemId:", itemId, "size:", size);


    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1
      }
      else {
        cartData[itemId][size] = 1;
      }
    }
    else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1
    }

    const response = await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added to cart" })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
  }

}// update user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    if (!userId || !itemId || !size || quantity === undefined) {
      return res.status(400).json({ success: false, message: "All fields are required" })
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" })
    }
    let cartData = await userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }
    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData })
    res.json({ success: true, message: "cart Update" })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
  }


}// get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body
    const userData = await userModel.findById(userId);

    let cartData = await userData.cartData;

    res.json({ success: true, cartData })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
  }
}

export { addToCart, updateCart, getUserCart }