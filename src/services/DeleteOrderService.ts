import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Order from '../models/Order';

interface Request {
  order_id: string;
}

class DeleteOrderService {
  public async execute({ order_id }: Request): Promise<boolean> {
    const orderRepository = getRepository(Order);

    const order = await orderRepository.findOne({
      where: { id: order_id },
    });

    if (!order) {
      throw new AppError('This order does not exist.', 404);
    }

    await orderRepository.delete(order.id);

    return false;
  }
}

export default DeleteOrderService;
