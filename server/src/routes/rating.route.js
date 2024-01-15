import { Router } from "express";
import authenticate from "../middleware/authenticate";
import { createRating, getProductsRating } from "../controller/rating.controller.js";
const router = Router()

router.get("/create",authenticate,createRating);
router.put("/product/:productId",authenticate,getProductsRating);

export default router