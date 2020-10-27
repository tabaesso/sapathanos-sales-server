import { Router } from 'express';
import SizesController from '../controllers/SizesController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const sizeRouter = Router();

//sizeRouter.use(ensureAuthenticated);

const sizesController = new SizesController();

sizeRouter.get('/:id', sizesController.show);
sizeRouter.get('/:id/sizecolumn', sizesController.findSize);
sizeRouter.put('/:id', sizesController.update);

export default sizeRouter;
