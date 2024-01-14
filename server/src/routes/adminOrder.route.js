
import { Router } from 'express';
import authenticate from '../middleware/authenticate.js';
import {cancelOrder, confirmOrder, deleteOrder, deliverOrder, getAllOrders, shipOrder} from "../controller/adminOrder.controller.js"


const router = Router()

router.get("/",authenticate,getAllOrders);
router.put("/:orderId/confirmed",authenticate,confirmOrder);
router.put("/:orderId/ship",authenticate,shipOrder);
router.put("/:orderId/deliver",authenticate,deliverOrder);
router.put("/:orderId/cancel",authenticate,cancelOrder);
router.delete("/:orderId/delete",authenticate,deleteOrder);

export default router