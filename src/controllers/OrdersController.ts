import { Request, Response } from 'express';

import CreateOrderService from '../services/CreateOrderService';

export default class OrdersController {
  async create(request: Request, response: Response) {
    const { customer_id, products } = request.body;

    const createOrder = new CreateOrderService();

    const order = await createOrder.execute({
      customer_id,
      products,
    });

    return response.json(order);
  }
}
