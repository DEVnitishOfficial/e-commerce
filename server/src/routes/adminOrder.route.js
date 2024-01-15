
import { Router } from 'express';
import authenticate from '../middleware/authenticate.js';
import {cancelOrders, confirmOrders, deleteOrders, deliverOrders, getAllOrder, shipOrders} from "../controller/adminOrder.controller.js"


const router = Router()

router.get("/",authenticate,getAllOrder);
router.put("/:orderId/confirmed",authenticate,confirmOrders);
router.put("/:orderId/ship",authenticate,shipOrders);
router.put("/:orderId/deliver",authenticate,deliverOrders);
router.put("/:orderId/cancel",authenticate,cancelOrders);
router.delete("/:orderId/delete",authenticate,deleteOrders);

export default router