import { Router } from 'express';
import CategoriesController from '../controllers/CategoriesController';

const categoriesRouter = Router();

const categoriesController = new CategoriesController();

categoriesRouter.post('/', categoriesController.create);
categoriesRouter.get('/', categoriesController.index);
categoriesRouter.get('/:department_id/departamento', categoriesController.findByDepartment);

export default categoriesRouter;
