import { Router } from 'express';
import SizesController from '../controllers/SizesController';

const sizeRouter = Router();
const sizesController = new SizesController();

sizeRouter.post('/', sizesController.create);
sizeRouter.put('/', sizesController.update);

export default sizeRouter;