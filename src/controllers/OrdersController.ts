import { Request, Response } from 'express';
import { getConnection, getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Order from '../models/Order';

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

  async findTotalBalance(request: Request, response: Response) {
    const month = request.query.month;
    const year = request.query.year;

    const ordersRepository = getRepository(Order);
    const orders = await ordersRepository.find();

    if (!month && !year) {
      let amount = 0;
      orders.map(order => amount += Number(order.total_amount));

      const res = {
        orders: orders,
        amount: amount.toFixed(2)
      }

      return response.json(res);
    }

    if (!month || !year) {
      throw new AppError('Month and year required');
    }

    const filteredOrders = orders.filter(order =>
      order.paid === true &&
      order.updated_at.getMonth() === (Number(month) - 1) &&
      order.updated_at.getFullYear() === Number(year)
    );

    let amount = 0;
    filteredOrders.map(order => amount += Number(order.total_amount));

    const res = {
      orders: filteredOrders,
      amount: amount.toFixed(2)
    }

    return response.json(res);
  }
}
