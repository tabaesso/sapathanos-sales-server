/* eslint-disable @typescript-eslint/no-var-requires */
import { Router } from 'express';
import CustomersController from '../controllers/CustomersController';

const customersRouter = Router();
const customersController = new CustomersController();

customersRouter.post('/', customersController.create);
customersRouter.get('/', customersController.index);

export default customersRouter;
