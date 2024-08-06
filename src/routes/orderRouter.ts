import { Router } from "express";
import OrderController from "../controllers/odersControllers";

const orderRouter = Router()

orderRouter.get('/', OrderController.getAllOrders)
orderRouter.get('/:userId', OrderController.findOrderByUserId)
orderRouter.post('/', OrderController.createOrder)
orderRouter.put('/:id', OrderController.updateOrder)
orderRouter.delete('/:id', OrderController.deleteOrder)

export default orderRouter