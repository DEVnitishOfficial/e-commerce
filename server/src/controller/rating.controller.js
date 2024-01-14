import { createRating } from "../services/rating.service"
const createRating = async(req,res)=>{
    try{
        const user = req.user
        const reqBody = req.body
        const rating = createRating(reqBody,user)
        if(rating){
            return res.status(201).json({
                success:true,
                message:"successfully created rating",
                rating
            })
        }
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Got error in creating rating",
            error:error.message
        })
    }
}
const getProductsRating = async(req,res)=>{
    try{
        const productId = req.params.productId
        const productRating = getProductsRating(productId)
        if(productRating){
            return res.status(201).json({
                success:true,
                message:"successfully fetched product rating",
                productRating
            })
        }
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Got error in fetching rating",
            error:error.message
        })
    }
}

export{
    createRating,
    getProductsRating
}