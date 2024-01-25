
import { createMultipleProduct, createProduct,deleteProduct, findProductById, getAllProducts } from "../services/product.service.js"

// creating new product
const createProducts = async(req,res) =>{
    const product = await createProduct(req.body);
     console.log('product',product)
   try {
     if(product){
         return res.status(200).json({
             success:true,
             message:"created product successfully",
             product
         })
     }
   } catch (error) {
    return res.status(500).json({
        success:false,
        message:"got error in creating new product",
        error:error.message
    })
   }
}

//delete product by id
const deleteProducts = async(req,res) =>{
    try {
      const productId = req.params.id
      const deletedproduct = await deleteProduct(productId);
      if(deletedproduct){
          return res.status(200).json({
              success:true,
              message:"deleted product successfully",
              deletedproduct
          })
      }
    } catch (error) {
     return res.status(500).json({
         success:false,
         message:"got error in deleting product",
         error:error.message
     })
    }
 }
 //update product by id
 const updateProducts = async(req,res) =>{
    try {
      const productId = req.params.id
      const updatedproduct = await updateProduct(productId,req.body);
      if(updatedproduct){
          return res.status(200).json({
              success:true,
              message:"updated product successfully",
              updatedproduct
          })
      }
    } catch (error) {
     return res.status(500).json({
         success:false,
         message:"got error in updating product",
         error:error.message
     })
    }
 }

 //find product by id
 const findProductByIds = async(req,res) =>{
    const productId = req.params.id
console.log('product>>>>>>>>>',req.params.id)
    try {
      const getProduct = await findProductById(productId);
      if(getProduct){
          return res.status(200).json({
              success:true,
              message:"Got product successfully",
              getProduct
          })
      }
    } catch (error) {
     return res.status(500).json({
         success:false,
         message:"got error in getting product by id",
         error:error.message
     })
    }
 }

 //getAll products
 const getAllProduct = async(req,res) =>{
    try {
      const getAllProduct = await getAllProducts(req.query);
      if(getAllProduct){
          return res.status(200).json({
              success:true,
              message:"Got Allproduct successfully",
              getAllProduct
          })
      }
    } catch (error) {
     return res.status(500).json({
         success:false,
         message:"got error in gettingAllproduct by req.query",
         error:error.message
     })
    }
 }

 //createMultiple product
 const createMultipleProducts = async(req,res) =>{
    try {
      const createdMultipleProduct = await createMultipleProduct(req.body);
      if(createdMultipleProduct){
          return res.status(200).json({
              success:true,
              message:"createdMultipleProduct successfully",
              createdMultipleProduct
          })
      }
    } catch (error) {
     return res.status(500).json({
         success:false,
         message:"Got error in creating Multiple Product",
         error:error.message
     })
    }
 }

 export{
    createProducts,
    deleteProducts,
    updateProducts,
    findProductByIds,
    getAllProduct,
    createMultipleProducts
 }