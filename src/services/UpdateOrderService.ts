import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Order from '../models/Order';
import OrderDetail from '../models/OrderDetail';
import Product from '../models/Product';
import Size from '../models/Size';

interface Request {
  order_id: string;
}

interface ProductDTO {
  sku: string;
  quantity: number;
}

class UpdateOrderService {
  public async execute({ order_id }: Request): Promise<boolean> {
    const orderRepository = getRepository(Order);

    const order = await orderRepository.findOne({
      where: { id: order_id },
    });

    if (!order) {
      throw new AppError('This order does not exist.', 404);
    }

    const orderDetailRepository = getRepository(OrderDetail);
    const productRepository = getRepository(Product);
    const sizeRepository = getRepository(Size);

    const details = await orderDetailRepository.find({
      where: { order_id: order.id },
    });

    details.forEach(async ({ sku, quantity }: ProductDTO) => {
      // const quantity = sku.slice(0, -7);
      const product = await productRepository.findOne({
        where: { id: sku },
      });

      if (product) {
        const size = await sizeRepository.findOne({
          where: { id: product.size_id },
        });

        // console.log(size?.size_37 - quantity);
        console.log(product);
      }
    });

    return true;
  }
}

export default UpdateOrderService;
