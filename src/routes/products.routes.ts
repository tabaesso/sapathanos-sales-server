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
productsRouter.get('/:id/only', productsController.showProductOnly);
productsRouter.get('/:category_id/category', productsController.showByCategory);
productsRouter.get('/:category_id/:page/:perPage/category', productsController.findByCategoryWithPagination);
productsRouter.get('/:page/:perPage/active', productsController.findActiveWithPagination);

export default productsRouter;
