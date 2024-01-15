
import { getAllOrders,confirmOrder,shipOrder,deliverOrder } from "../services/orderService.js"

const getAllOrder = async() =>{
  try {
     const orders =  await getAllOrders()
     return res.status(200).send({
      success : true,
      message : "successfully fetched the all orders",
      orders
     })
  } catch (error) {
    res.status(500).send({error:"something is wrong in getting all orders"})
  }
}
const shipOrders=async(req,res) => {
  try{
   const orderId = req.params.orderId
   const order = shipOrder(orderId)
   if(order){
    res.status(200).json({
      success:true,
      message:"Successfully shipped order",
      order
    })
  }
  }catch(error){
    res.status(500).json({
      success:false,
      message:error.message
    })
  }
}
const confirmOrders=async(req,res) =>{
  try {
    const orderId = req.params.orderId
    const order = confirmOrder(orderId)
    if(order){
      res.status(200).json({
        success:true,
        message:"Successfully confirmed order",
        order
      })
    }
  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    })
  }
}

const deliverOrders=async(req,res) => {
  try {
    const orderId = req.params.orderId
    const order = deliverOrder(orderId)
    if(order){
      res.status(200).json({
        success:true,
        message:"Successfully delivered order",
        order
      })
    }
  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    })
  }

}

const cancelOrders=async(req,res) => {
  try {
    const orderId = req.params.orderId
    const order = cancelOrder(orderId)
    if(order){
      res.status(200).json({
        success:true,
        message:"Successfully cancelled order",
        order
      })
    }
  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    })
  }

}

const deleteOrders=async(req,res) => {
  try {
    const orderId = req.params.orderId
    const order = deleteOrder(orderId)
    if(order){
      res.status(200).json({
        success:true,
        message:"Successfully deleted order",
        order
      })
    }
  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    })
  }

}

export{
  getAllOrder,
  shipOrders,
  confirmOrders,
  deliverOrders,
  cancelOrders,
  deleteOrders
}