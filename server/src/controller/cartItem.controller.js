
import { updateCartItem,removeCartItem } from "../services/cartItem.service.js"
const updateCartItems = async(req,res) => {
    const user = req.user
    // console.log('checkuser',user._id,req.params.id,req.body)
    try{
       const updatedCartItem = await updateCartItem(user._id,req.params.id,req.body)
       if(updatedCartItem){
        res.status(200).json({
            success:true,
            message:"successfully updated cart item",
            updatedCartItem
        })
       }
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Getting error in updating cart item",
            error:error.message
        })
    }
}

const removeCartItems = async(req,res) => {
    const user = req.user
    // console.log("data from user",req.user,"coming id from params",req.params.id)
    try{
       await removeCartItem(user._id,req.params.id)
      
        return res.status(200).json({
            success:true,
            message:"successfully removed cart item",
        })
       
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Getting error in removing cart item",
            error:error.message
        })
    }
}

export{
    updateCartItems,
    removeCartItems
}