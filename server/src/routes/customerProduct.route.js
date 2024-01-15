import { Router } from "express";
import { findProductById, getAllProducts } from "../controller/product.controller.js";

const router = Router()

router.get('/',getAllProducts);
router.get('/id/:id',findProductById);
// router.get('/search',searchProduct);

export default router