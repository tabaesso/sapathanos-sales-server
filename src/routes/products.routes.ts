import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/', 
    //ensureAuthenticated, 
    productsController.create);
productsRouter.put('/:product_id/status', 
    //ensureAuthenticated, 
    productsController.updateStatus);
productsRouter.get('/', 
    //ensureAuthenticated, 
    productsController.index);
productsRouter.get('/active', productsController.findActive);
productsRouter.get('/:id', productsController.show);

export default productsRouter;