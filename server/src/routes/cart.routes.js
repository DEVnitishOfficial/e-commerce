
import { Router } from "express";
import authenticate from "../middleware/authenticate.js";
import { findUserCarts,addCartItems,} from "../controller/cart.controller.js";

const router = Router()

// GET: /api/cart
router.get("/", authenticate,findUserCarts);

// PUT: /api/cart/add
router.put("/add", authenticate,addCartItems);

export default router