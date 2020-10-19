import { Router } from 'express';
import vehiclesRouter from './vehicles.routes';
import customersRouter from './customers.routes';
import sessionsRouter from './sessions.routes';
import productsRouter from './products.routes';
import sizesRouter from './sizes.routes';

const routes = Router();

routes.use('/veiculos', vehiclesRouter);
routes.use('/clientes', customersRouter);
routes.use('/login', sessionsRouter);
routes.use('/products', productsRouter);
routes.use('/sizes', sizesRouter);

export default routes;
