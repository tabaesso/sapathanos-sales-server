import { Router } from 'express';
import OrderDetailsController from '../controllers/OrderDetailsController';

const orderDetailsRouter = Router();

const orderDetailsController = new OrderDetailsController();

orderDetailsRouter.get('/', orderDetailsController.index);

export default orderDetailsRouter;
