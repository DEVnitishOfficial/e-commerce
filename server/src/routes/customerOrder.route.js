
import { Router } from "express";
import authenticate from "../middleware/authenticate.js";
import { creatingOrder, findOrder, orderHistory } from "../controller/order.controller.js";

const router = Router()

router.post("/",authenticate,creatingOrder);
router.get("/user",authenticate,orderHistory);
router.get("/:id",authenticate,findOrder);

export default router