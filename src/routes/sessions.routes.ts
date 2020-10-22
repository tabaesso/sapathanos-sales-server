import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/clienteLogin', sessionsController.createCustomerSession);
sessionsRouter.post('/vendedorLogin', sessionsController.createSellerSession);

export default sessionsRouter;
