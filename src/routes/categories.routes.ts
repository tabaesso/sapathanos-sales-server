import { Router } from 'express';
import CategoriesController from '../controllers/CategoriesController';

const categoriesRouter = Router();

const categoriesController = new CategoriesController();

categoriesRouter.post('/', categoriesRouter.create);
  categoriesRouter.get('/', categoriesRouter.index);

export default categoriesRouter;

