import Address from "../models/address.model.js";
import Order from "../models/order.model.js";
import OrderItem from "../models/orderItems.model.js";
import { findUserCart } from "./cart.service.js";
async function createOrder(user, shippingAddress) {
  let address;

  if (shippingAddress._id) {
    let existingAddress = await Address.findById(shippingAddress._id);
    address = existingAddress;
  } else {
    address = new Address(shippingAddress);
    address.user = user
    await address.save();
  }
  if (!user.address.includes(address._id)) {
    user.address.push(address);
    await user.save();
  }
  const cart = await findUserCart(user._id);
  const orderItems = [];

  for (const item of cart.cartItems) {
    const orderItem = new OrderItem({
      price: item.price,
      product: item.product,
      size: item.size,
      quantity: item.quantity,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });
    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem);
  }
  const createdOrder = new Order({
    user,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discount: cart.discount,
    totalItem: cart.totalItem,
    shippingAddress: address,
  });
  const savedOrder = await createdOrder.save();
  return savedOrder;
}

async function placeOrder(orderId){
   const order = await findOrderById(orderId);

   order.orderStatus = "PLACED";
   order.paymentDetails.status = "COMPLETED";

   return await order.save()
}

async function confirmOrder(orderId){
    const order = await findOrderById(orderId);
 
    order.orderStatus = "CONFIRMED";
 
    return await order.save()
 }

 async function shipOrder(orderId){
    const order = await findOrderById(orderId);
 
    order.orderStatus = "SHIPPED";
 
    return await order.save()
 }

 async function deliverOrder(orderId){
    const order = await findOrderById(orderId);
 
    order.orderStatus = "DELIVERED";
 
    return await order.save()
 }

 async function cancelOrder(orderId){
    const order = await findOrderById(orderId);
 
    order.orderStatus = "CANCELLED";
 
    return await order.save()
 }

 async function findOrderById(orderId){
    const order = await Order.findById(orderId)
    .populate("user")
    .populate({
        path:"orderItems",
        populate:{
            path:"product"
        }})
    .populate("shippingAddress")
    return order
 }

async function userOrderHistory(userId){
    try{
       const orders = await Order.find({user:userId,orderStatus:"PLACED"})
       .populate({
        path:"orderItems",
        populate:{
            path:"product"
        }})
       .lean()
       return orders
    }catch(error){
        throw new Error(error.message)
    }
}

async function getAllOrders(){
    await Order.find()
    .populate({
    path:"orderItems",
        populate:{				
        path:"product"
    }})
    .lean()
}

async function deleteOrder(orderId){
	const order = await findOrderById(orderId);
	await Order.findByIdAndDelete(order._id)
}

export{
	createOrder,
	placeOrder,
	confirmOrder,
	shipOrder,
	deliverOrder,
	cancelOrder,
	findOrderById,
	userOrderHistory,
	getAllOrders,
	deleteOrder
}


