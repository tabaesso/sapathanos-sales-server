/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import { getRepository } from 'typeorm';
// import AppError from '../errors/AppError';

import Order from '../models/Order';
// import OrderDetail from '../models/OrderDetail';

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
  public async execute({
    customer_id,
    products,
  }: Request): Promise<PaymentDTO> {
    let totalDasCoisa = 0;
    const carrinho: ItemDTO[] = [];
    // const orderRepository = getRepository(Order);

    // const order = orderRepository.create({ customer_id });
    // await orderRepository.save(order);

    // const orderDetailRepository = getRepository(OrderDetail);

    products.forEach(async ({ name, sku, price, quantity }: ProductDTO) => {
      const convertedPrice = price.toString();
      console.log(name, sku, price, convertedPrice, customer_id);
      totalDasCoisa += price * quantity;

      carrinho.push({
        name,
        sku,
        price: convertedPrice,
        currency: 'BRL',
        quantity,
      });
      // const orderDetail = orderDetailRepository.create({
      //   name,
      //   sku,
      //   price,
      //   quantity,
      //   order_id: order.id,
      // });

      // await orderDetailRepository.save(orderDetail);
    });

    // TODO: Receber e cadastrar coisinhas no banco
    // TODO: Criar rotas para atualizar e cancelar (back)
    // TODO: Atualizar quantidade de produtos caso compra efetuada
    // TODO: Atualizar status do produto caso quantidade nova do produto fique em 0
    // TODO: Criar rotas para atualizar e cancelar e pagar (front)

    // const carrinho = [
    //   {
    //     name: 'produtinho',
    //     sku: 'asdsadassxzxaslk2',
    //     price: '1',
    //     currency: 'BRL',
    //     quantity: 10,
    //   },
    // ];

    const json_pagamento = {
      intent: 'sale',
      payer: { payment_method: 'paypal' },
      redirect_urls: {
        return_url: 'http://opa.com.br/success',
        cancel_url: 'http://opa.com.br/cancel',
      },
      transactions: [
        {
          item_list: { items: carrinho },
          amount: { currency: 'BRL', total: totalDasCoisa.toString() },
          description: 'Uma compra bacana',
        },
      ],
    };

    return json_pagamento;
  }
}

export default CreatePaymentService;
