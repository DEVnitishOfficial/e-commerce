import { Router } from "express";
import { createMultipleProducts, createProducts, deleteProducts, updateProducts } from "../controller/product.controller.js";
import authenticate from "../middleware/authenticate.js";
const router = Router()

router.post('/',authenticate,createProducts);
router.post('/creates', authenticate,createMultipleProducts);
router.delete('/:id',authenticate,deleteProducts);
router.put('/:id',authenticate,updateProducts);

export default router