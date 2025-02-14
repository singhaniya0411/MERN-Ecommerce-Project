import express from 'express'
import {
  placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrder
  , updateStatus, verifyStripe
} from "../controllers/orderController.js"

import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js"

const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment features
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)
orderRouter.post('/place', authUser, placeOrder);


// User Feature
orderRouter.post('/userorders', authUser, userOrder)


//verify payment
orderRouter.post('/verifystripe', authUser, verifyStripe)


export default orderRouter;
