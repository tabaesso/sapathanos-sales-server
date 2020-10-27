import { Router } from 'express';
import DepartmentsController from '../controllers/DepartmentsController';

const departmentsRouter = Router();

const departmentsController = new DepartmentsController();

departmentsRouter.post('/', departmentsController.create);
departmentsRouter.get('/', departmentsController.index);

export default departmentsRouter;
