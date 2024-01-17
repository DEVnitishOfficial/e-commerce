
import { findUserCart,addCartItem, createCart } from "../services/cart.service.js";


const createUserCart = async(req,res) => {
    const user = req.user;
    try{
   const cart = await createCart(user)
   console.log('cart',cart)
   if(cart){
    res.status(200).json({
        success:true,
        message:"User Cart created successfully",
        cart
    })
   }
    }catch(error){
        res.status(500).json({
            success:false,
            message:"failed to create user cart",
            error:error.message
        })
    }
}
const findUserCarts = async(req,res) => {
    const user = req.user;
    try{
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
    console.log('req.body222',req.body)
   const cartItem = await addCartItem(user._id.toString(),req.body)
   console.log('cartItem',cartItem)
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
    createUserCart,
    findUserCarts,
    addCartItems
}