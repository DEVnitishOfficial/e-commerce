
import { Router } from "express";
import authenticate from "../middleware/authenticate.js";
import { addCartItem, findUserCart } from "../services/cart.service.js";

const router = Router()

// GET: /api/cart
router.get("/", authenticate,findUserCart);

// PUT: /api/cart/add
router.put("/add", authenticate,addCartItem);

export default router