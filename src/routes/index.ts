import { Router } from 'express';
import vehiclesRouter from './vehicles.routes';
import customersRouter from './customers.routes';
import sellersRouter from './sellers.routes';
import sessionsRouter from './sessions.routes';
import productsRouter from './products.routes';
import sizesRouter from './sizes.routes';
import categoriesRouter from './categories.routes';


const routes = Router();

routes.use('/veiculos', vehiclesRouter);
routes.use('/clientes', customersRouter);
routes.use('/vendedores', sellersRouter);
routes.use('/login', sessionsRouter);
routes.use('/products', productsRouter);
routes.use('/sizes', sizesRouter);
routes.use('/categories', categoriesRouter);

export default routes;

