import { Router } from 'express';
import vehiclesRouter from './vehicles.routes';
import customersRouter from './customers.routes';

const routes = Router();

routes.use('/veiculos', vehiclesRouter);
routes.use('/clientes', customersRouter);

export default routes;
