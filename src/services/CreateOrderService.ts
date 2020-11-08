import { getRepository } from 'typeorm';

import Order from '../models/Order';
import OrderDetail from '../models/OrderDetail';

interface ProductDTO {
  name: string;
  sku: string;
  price: number;
  quantity: number;
}

interface Request {
  customer_id: string;
  products: ProductDTO[];
}

class CreateOrderService {
  public async execute({ customer_id, products }: Request): Promise<Order> {
    const orderRepository = getRepository(Order);

    const order = orderRepository.create({ customer_id });
    await orderRepository.save(order);

    const orderDetailRepository = getRepository(OrderDetail);

    let total_amount = 0;
    products.forEach(async ({ name, sku, price, quantity }: ProductDTO) => {
      const orderDetail = orderDetailRepository.create({
        name,
        sku,
        price,
        quantity,
        order_id: order.id,
      });

      total_amount += price * quantity;
      await orderDetailRepository.save(orderDetail);
    });

    order.total_amount = total_amount;
    await orderRepository.save(order);

    return order;
  }
}

export default CreateOrderService;
