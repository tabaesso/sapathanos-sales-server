import { Router } from 'express';
import OrdersController from '../controllers/OrdersController';

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.post('/', ordersController.create);

export default ordersRouter;
