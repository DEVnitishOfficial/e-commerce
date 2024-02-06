import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        maxLength:50
    },
    parentCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories",
    },
    level:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
})

const Category = mongoose.model("categories",categorySchema)
export default Category