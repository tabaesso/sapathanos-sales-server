import { Router } from 'express';
import SizesController from '../controllers/SizesController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const sizeRouter = Router();

//sizeRouter.use(ensureAuthenticated);

const sizesController = new SizesController();

sizeRouter.put('/:id', sizesController.update);

export default sizeRouter;