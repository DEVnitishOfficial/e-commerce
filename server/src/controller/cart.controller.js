
import { findUserCart,addCartItem } from "../services/cart.service.js";
const findUserCarts = async(req,res) => {
    try{
   const user = req.user;
   const cart = await findUserCart(user._id)
   if(cart){
    res.status(200).json({
        success:true,
        message:"User Cart found successfully",
        cart
    })
   }
    }catch(error){
        res.status(500).json({
            success:false,
            message:"failed to get user cart",
            error:error.message
        })
    }
}

const addCartItems = async(req,res) =>{
    try{
    const user = req.user
   const cartItem = await addCartItem(user._id.toString(),req.body)
   if(cartItem){
    res.status(200).json({
        success:true,
        message:"item added to cart successfully",
        cartItem
    })
   }
    }catch(error){
        res.status(500).json({
            success:false,
            message:"failed to add item in cart",
            error:error.message
        })
    }
}

export{
    findUserCarts,
    addCartItems
}