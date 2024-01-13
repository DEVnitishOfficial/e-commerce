

const updateCartItem = async(req,res) => {
    try{
        const user = req.user
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

const removeCartItem = async(req,res) => {
    try{
        const user = req.user
       const removedCartItem = await removeCartItem(user._id,req.params.id)
       if(removedCartItem){
        res.status(200).json({
            success:true,
            message:"successfully removed cart item",
            removedCartItem
        })
       }
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Getting error in removing cart item",
            error:error.message
        })
    }
}

export{
    updateCartItem,
    removeCartItem
}