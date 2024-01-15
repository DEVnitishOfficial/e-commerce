
import { createReview,getAllReview } from "../services/review.service.js"
const createReviews = async(req,res)=>{
    try{
        const user = req.user
        const reqBody = req.body
        const review = createReview(reqBody,user)
        if(review){
            return res.status(201).json({
                success:true,
                message:"successfully created review",
                review
            })
        }
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Got error in creating review",
            error:error.message
        })
    }
}
const getAllReviews = async(req,res)=>{
    try{
        const productId = req.params.productId
        const reviews = getAllReview(productId)
        if(reviews){
            return res.status(201).json({
                success:true,
                message:"successfully fetched all review",
                reviews
            })
        }
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Got error in fetching all review",
            error:error.message
        })
    }
}

export{
    createReviews,
    getAllReviews
}