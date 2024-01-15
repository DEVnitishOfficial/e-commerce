import { Router } from "express";
import { findProductByIds, getAllProduct } from "../controller/product.controller.js";

const router = Router()

router.get('/',getAllProduct);
router.get('/id/:id',findProductByIds);
// router.get('/search',searchProduct);

export default router