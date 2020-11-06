import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Order from '../models/Order';
import OrderDetail from '../models/OrderDetail';

interface ProductDTO {
  name: string;
  sku: string;
  price: number;
  currency: string;
  quantity: number;
}

interface Request {
  order_id: string;
}

interface ItemDTO {
  name: string;
  sku: string;
  price: string;
  currency: string;
  quantity: number;
}

interface PaymentDTO {
  intent: string;
  payer: {
    payment_method: string;
  };
  redirect_urls: {
    return_url: string;
    cancel_url: string;
  };
  transactions: {
    item_list: {
      items: ItemDTO[];
    };
    amount: {
      currency: string;
      total: string;
    };
    description: string;
  }[];
}

class CreatePaymentService {
  public async execute({ order_id }: Request): Promise<PaymentDTO> {
    const carrinho: ItemDTO[] = [];
    const orderRepository = getRepository(Order);

    const order = await orderRepository.findOne({
      where: { id: order_id },
    });

    if (!order) {
      throw new AppError('This order does not exist.', 404);
    }

    const orderDetailRepository = getRepository(OrderDetail);

    const products = await orderDetailRepository.find({
      where: { order_id: order.id },
    });

    products.forEach(
      async ({ name, sku, price, currency, quantity }: ProductDTO) => {
        const convertedPrice = price.toString();
        carrinho.push({
          name,
          sku,
          price: convertedPrice,
          currency,
          quantity,
        });
      },
    );

    // TODO: Criar processamento de pagamento no back - video do indiano
    // TODO: Atualizar quantidade de produtos caso compra efetuada
    // TODO: Atualizar status do produto caso quantidade nova do produto fique em 0
    // TODO: Criar rotas para atualizar e cancelar e pagar (front)

    const json_pagamento = {
      intent: 'sale',
      payer: { payment_method: 'paypal' },
      redirect_urls: {
        return_url: `http://localhost:3333/payments/${order.id}/success`,
        cancel_url: `http://localhost:3333/payments/${order.id}/cancel`,
      },
      transactions: [
        {
          item_list: { items: carrinho },
          amount: {
            currency: products[0].currency,
            total: order.total_amount.toString(),
          },
          description: 'Uma compra bacana',
        },
      ],
    };

    return json_pagamento;
  }
}

export default CreatePaymentService;
