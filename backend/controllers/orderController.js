import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

// @des Fetch all products
// @route GET /api/products
// @access Public

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
  }
});


// to get order by id

const getOrderById = asyncHandler(async (req, res) => {
 const order = await Order.findById(req.params.id).populate('user','name email')

 if(order){
  res.json(order)
 }else{
  res.status(404)
  throw new Error('Order Not Found')
 }
  
});

export {addOrderItems,getOrderById}