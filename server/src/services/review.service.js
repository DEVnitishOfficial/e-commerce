import { findProductById } from "./product.service.js";
import Review from '../models/review.model.js'

async function createReview(reqData,user){

  const product = await findProductById(reqData.productId)
  if(!product){
    throw new Error("Product not found with id",reqData.productId)
  }

  const review = new Review({
    user:user._id,
    product:product._id,
    review:reqData.review,
    createdAt:new Date()
  })
  await product.save()
  return await review.save()
}

async function getAllReview(productId){
    const product = await findProductById(productId)
    if(!product){
        throw new Error("Product not found with id",productId)
    }

   const reviews = await Review.find({product:productId}).populate("user")
   return reviews
}
export{
    createReview,
    getAllReview
}