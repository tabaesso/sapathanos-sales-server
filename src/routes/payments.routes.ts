import { Router } from 'express';
import PaymentsController from '../controllers/PaymentsController';
// import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const paymentsRouter = Router();

const paymentsController = new PaymentsController();

paymentsRouter.post('/:order_id/finalize', paymentsController.create);
paymentsRouter.get('/:order_id/success', paymentsController.success);
paymentsRouter.get('/:order_id/cancel', paymentsController.cancel);

export default paymentsRouter;
