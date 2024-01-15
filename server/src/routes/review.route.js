import { Router } from "express";
import authenticate from "../middleware/authenticate.js";
import { createReviews, getAllReviews } from "../controller/review.controller.js";

const router = Router()

router.post("/create",authenticate,createReviews);
router.get("/product/:productId",authenticate,getAllReviews);

export default router