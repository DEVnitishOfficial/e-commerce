import CartItem from "../models/cartItem.model"
import { findUserById } from "./user.service"


async function updateCartItem(userId,cartItemId,cartItemData){
    try{
       const item = await findCartItemById(cartItemId)
       if(!item){
        throw new Error("item not found with given cartItemId",cartItemId)
       }

       const user = await findUserById(item.userId)
       if(!user){
        throw new Error("user not found with item.userid",userId)
       }

       if(user.id.toString() === userId.toString()){
        item.quantity = cartItemData.quantity;
        item.price = item.quantity*item.product.price
        item.discountedPrice = item.quantity * item.product.discountedPrice
       }else{
        throw new Error("you can't update this cart item")
       }

    }catch(error){
        throw new Error(error.message)
    }
}

async function removeCartItem(userId,cartItemId){
        try{
        const cartItem = await findCartItemById(cartItemId);
        const user = await findUserById(userId)

        if(user._id.toString() === cartItem.userId.toString()){
          await  CartItem.findByIdAndDelete(cartItemId)
        }else{
            throw new Error("you can't remove another user's item ")
        }
        }catch(error){

        }
}

async function findCartItemById(cartItemId){
  const cartItem = await findCartItemById(cartItemId)
  if(cartItem){
    return cartItem
  }else{
    throw new Error("CartItem not found by cartItemId",cartItemId)
  }
}

export{
    updateCartItem,
    removeCartItem,
    findCartItemById
}