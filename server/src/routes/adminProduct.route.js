import { Router } from "express";
import { createMultipleProduct, createProduct, deleteProduct, updateProduct } from "../controller/product.controller.js";
import authenticate from "../middleware/authenticate.js";
const router = Router()

router.post('/',authenticate,createProduct);
router.post('/creates', authenticate,createMultipleProduct);
router.delete('/:id',authenticate,deleteProduct);
router.put('/:id',authenticate,updateProduct);

export default router