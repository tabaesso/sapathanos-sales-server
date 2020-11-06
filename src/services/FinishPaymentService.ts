import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Order from '../models/Order';
import OrderDetail from '../models/OrderDetail';
import Product from '../models/Product';
import Size from '../models/Size';

interface DetailDTO {
  name: string;
  sku: string;
  price: number;
  currency: string;
  quantity: number;
}

interface Request {
  order_id: string;
}

const varExtractor = new RegExp('return (.*);');
export function getVariableName<TResult>(name: () => TResult) {
  const m = varExtractor.exec(`${name}`);
  if (m === null)
    throw new Error(
      "The function does not contain a statement matching 'return variableName;'",
    );
  return m[1];
}

class FinishPaymentService {
  public async execute({ order_id }: Request): Promise<Order> {
    const orderRepository = getRepository(Order);

    const order = await orderRepository.findOne({
      where: { id: order_id },
    });

    if (!order) {
      throw new AppError('This order does not exist.', 404);
    }

    if (order.paid) {
      throw new AppError('This order has already paid');
    }

    const orderDetailRepository = getRepository(OrderDetail);
    const productRepository = getRepository(Product);
    const sizeRepository = getRepository(Size);

    const details = await orderDetailRepository.find({
      where: { order_id: order.id },
    });

    details.forEach(async ({ sku, quantity }: DetailDTO) => {
      const productId = sku.slice(0, -7);
      const quantityKey = sku.slice(sku.length - 7, sku.length);

      const product = await productRepository.findOne({
        where: { id: productId },
      });

      if (product) {
        const sizes = await sizeRepository.findOne({
          where: { id: product.size_id },
        });

        if (sizes) {
          let {
            size_33,
            size_34,
            size_35,
            size_36,
            size_37,
            size_38,
            size_39,
            size_40,
            size_41,
            size_42,
            size_43,
            size_44,
            size_45,
            size_46,
            size_47,
            size_48,
          } = sizes;

          switch (quantityKey) {
            case getVariableName(() => size_33).split('_1')[0]:
              size_33 -= quantity;
              sizes.size_33 = size_33;
              break;

            case getVariableName(() => size_34).split('_1')[0]:
              size_34 -= quantity;
              sizes.size_34 = size_34;
              break;

            case getVariableName(() => size_35).split('_1')[0]:
              size_35 -= quantity;
              sizes.size_35 = size_35;
              break;

            case getVariableName(() => size_36).split('_1')[0]:
              size_36 -= quantity;
              sizes.size_36 = size_36;
              break;

            case getVariableName(() => size_37).split('_1')[0]:
              size_37 -= quantity;
              sizes.size_37 = size_37;
              break;

            case getVariableName(() => size_38).split('_1')[0]:
              size_38 -= quantity;
              sizes.size_38 = size_38;
              break;

            case getVariableName(() => size_39).split('_1')[0]:
              size_39 -= quantity;
              sizes.size_39 = size_39;
              break;

            case getVariableName(() => size_40).split('_1')[0]:
              size_40 -= quantity;
              sizes.size_40 = size_40;
              break;

            case getVariableName(() => size_41).split('_1')[0]:
              size_41 -= quantity;
              sizes.size_41 = size_41;
              break;

            case getVariableName(() => size_42).split('_1')[0]:
              size_42 -= quantity;
              sizes.size_42 = size_42;
              break;

            case getVariableName(() => size_43).split('_1')[0]:
              size_43 -= quantity;
              sizes.size_43 = size_43;
              break;

            case getVariableName(() => size_44).split('_1')[0]:
              size_44 -= quantity;
              sizes.size_44 = size_44;
              break;

            case getVariableName(() => size_45).split('_1')[0]:
              size_45 -= quantity;
              sizes.size_45 = size_45;
              break;

            case getVariableName(() => size_46).split('_1')[0]:
              size_46 -= quantity;
              sizes.size_46 = size_46;
              break;

            case getVariableName(() => size_47).split('_1')[0]:
              size_47 -= quantity;
              sizes.size_47 = size_47;
              break;

            case getVariableName(() => size_48).split('_1')[0]:
              size_48 -= quantity;
              sizes.size_48 = size_48;
              break;

            default:
              break;
          }

          await sizeRepository.save(sizes);
        }
      }
    });

    order.paid = true;
    await orderRepository.save(order);

    return order;
  }
}

export default FinishPaymentService;
