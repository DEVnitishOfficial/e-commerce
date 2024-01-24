
import { createOrder, findOrderById, userOrderHistory } from "../services/orderService.js"
const creatingOrder = async(req,res)=>{
    try {
       const user = await req.user
    //    console.log('user',user)
    //    console.log('req.body',req.body)
       const createdOrder = await createOrder(user,req.body) 
       if(createdOrder){
        res.status(200).json({
            success:true,
            message:"order created successfully",
            createdOrder
        })
       }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Failed to create order",
            error:error.message
        })
    }
}

const findOrder = async(req,res)=>{
    try {
       const user = await req.user
       const order = await findOrderById(req.params.id) 
       if(order){
        res.status(200).json({
            success:true,
            message:"order found successfully",
            order
        })
       }
    } catch (error) {
        return res.status(200).json({
            success:true,
            message:"something went wrong to fetch order"
        })
    }
}

const orderHistory = async(req,res)=>{
    try {
       const user = await req.user
       const orderHist = await userOrderHistory(user._id) 
       if(orderHist){
        res.status(200).json({
            success:true,
            message:" fetched order history successfully",
            orderHist
        })
       }
    } catch (error) {
        return res.status(200).json({
            success:true,
            message:"something went wrong to fetch order history"
        })
    }
}

export{
    creatingOrder,
    findOrder,
    orderHistory
}