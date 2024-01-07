import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discountedPrice:{
        type:Number
    },
    discountPresent:{
        type:Number
    },
    quantity:{
        type:Number,
        required:true
    },
    brand:{
        type:String
    },
    color:{
        type:String
    },
    sizes:[{
        name:{type:String},
        quantity:{type:Number}
    }],
    imageUrl:{
        type:String
    },
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ratings'
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviews"
    }],
    numberOfRatings:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    },
},{
    timestamps:true
})

const Product = mongoose.Schema("products",productSchema)
export default Product;