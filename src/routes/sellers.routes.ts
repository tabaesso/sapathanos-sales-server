/* eslint-disable @typescript-eslint/no-var-requires */
import { Router } from 'express';
import SellersController from '../controllers/SellersController';

const sellersRouter = Router();
const sellersController = new SellersController();

sellersRouter.post('/', sellersController.create);
sellersRouter.get('/', sellersController.index);

export default sellersRouter;
