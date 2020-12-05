import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import OrderDetail from '../models/OrderDetail';

export default class OrderDetailsController {
  async index(request: Request, response: Response) {
    const orderDetailRepository = getRepository(OrderDetail);

    const orderDetails = await orderDetailRepository.find();

    return response.json(orderDetails);
  }
}
