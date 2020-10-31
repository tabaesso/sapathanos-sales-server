import { Router } from 'express';
import PaymentsController from '../controllers/PaymentsController';

const paymentsRouter = Router();

const paymentsController = new PaymentsController();

paymentsRouter.post('/:id/finalize', paymentsController.create);
paymentsRouter.post('/success', paymentsController.success);
paymentsRouter.post('/cancel', paymentsController.cancel);

export default paymentsRouter;
