import { Router } from 'express';
import vehiclesRouter from './vehicles.routes';

const routes = Router();

routes.use('/veiculos', vehiclesRouter);
export default routes;
