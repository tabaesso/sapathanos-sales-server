import { Router } from 'express';
import EmailController from '../controllers/EmailController';

const emailRouter = Router();

const emailController = new EmailController();

emailRouter.post('/:id', emailController.mail);

export default emailRouter;