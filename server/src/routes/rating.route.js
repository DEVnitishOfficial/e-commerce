import { Router } from "express";
import authenticate from "../middleware/authenticate.js";
import { createRatings, getProductsRatings } from "../controller/rating.controller.js";
const router = Router()

router.get("/create",authenticate,createRatings);
router.put("/product/:productId",authenticate,getProductsRatings);

export default router