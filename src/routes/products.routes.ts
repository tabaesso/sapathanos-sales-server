import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.post('/', productsController.create);
productsRouter.put('/:product_id/status', productsController.updateStatus);
productsRouter.get('/', productsController.index);
productsRouter.get('/active', productsController.findActive);

export default productsRouter;