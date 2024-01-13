import { findProductById } from "./product.service.js";
import Rating from '../models/rating.model.js'


async function createRating(req,user){
  const product = await  findProductById(req.productId)

  const rating = new Rating({
          product:product._id,
          user : user._id,
          rating : req.rating,
          createdAt: new Date()
  })
  return await rating.save()
}

async function getProductsRating(productId){
    return await Rating.find({product:productId})
}

export{
    createRating,
    getProductsRating
}