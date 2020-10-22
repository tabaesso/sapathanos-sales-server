import { Router } from 'express';
import vehiclesRouter from './vehicles.routes';
import customersRouter from './customers.routes';
import sellersRouter from './sellers.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/veiculos', vehiclesRouter);
routes.use('/clientes', customersRouter);
routes.use('/vendedores', sellersRouter);
routes.use('/login', sessionsRouter);

export default routes;
