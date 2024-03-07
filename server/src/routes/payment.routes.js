import { Router } from "express";
import { paymentInfoUpdate, paymentLinkCreate } from "../controller/payment.controller.js";
import authenticate from "../middleware/authenticate.js";
const router = Router()

router.post("/:id",authenticate,paymentLinkCreate);
router.get("/",authenticate,paymentInfoUpdate);

export default router