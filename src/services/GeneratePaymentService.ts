import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Order from '../models/Order';

interface Request {
  order_id: string;
  PayerID: string;
}

interface PaymentDTO {
  payer_id: string;
  transactions: {
    amount: {
      currency: string;
      total: string;
    };
  }[];
}

class GeneratePaymentService {
  public async execute({ order_id, PayerID }: Request): Promise<PaymentDTO> {
    const orderRepository = getRepository(Order);

    const order = await orderRepository.findOne({
      where: { id: order_id },
    });

    if (!order) {
      throw new AppError('This order does not exist.', 404);
    }

    const execute_payment_json = {
      payer_id: PayerID,
      transactions: [
        {
          amount: { currency: 'BRL', total: order.total_amount.toString() },
        },
      ],
    };

    return execute_payment_json;
  }
}

export default GeneratePaymentService;
