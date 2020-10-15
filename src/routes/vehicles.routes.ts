/* eslint-disable @typescript-eslint/no-var-requires */
import { Router } from 'express';
import VehiclesController from '../controllers/VehiclesController';

const vehiclesRouter = Router();
const vehiclesController = new VehiclesController();

vehiclesRouter.get('/', vehiclesController.findAll);

vehiclesRouter.get('/find', vehiclesController.findByParams);

vehiclesRouter.get('/:id', vehiclesController.findById);

vehiclesRouter.post('/', vehiclesController.create);

vehiclesRouter.put('/:id', vehiclesController.update);

vehiclesRouter.delete('/:id', vehiclesController.delete);

export default vehiclesRouter;
