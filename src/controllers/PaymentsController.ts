/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import { Request, Response } from 'express';
// import { getRepository } from 'typeorm';

import paypal from 'paypal-rest-sdk';
import CreatePaymentService from '../services/CreatePaymentService';
// import UpdatePaymentService from '../services/UpdatePaymentService';
import paypalConfig from '../configs/paypal';

paypal.configure(paypalConfig);
export default class PaymentsController {
  async create(request: Request, response: Response) {
    const { customer_id, products } = request.body;
    // name, sku, price, quantity

    const createPayment = new CreatePaymentService();

    const payment = await createPayment.execute({
      customer_id,
      products,
    });

    paypal.payment.create(payment, (err, pagamento) => {
      if (err) {
        console.log(err);
      } else {
        pagamento.links?.forEach(link => {
          if (link.rel === 'approval_url') {
            return response.json(link.href);
          }
        });
      }
    });

    // return response.json(payment);
  }

  async success(request: Request, response: Response) {
    const { paymentId, token, PayerID, id } = request.body;

    const execute_payment_json = {
      payer_id: PayerID,
      transactions: [
        {
          amount: 20,
        },
      ],
    };

    paypal.payment.execute(
      paymentId,
      execute_payment_json,
      (error, payment) => {
        if (error) {
          console.warn(error.response);
          throw error;
        } else {
          console.log(JSON.stringify(payment));

          // const _payment = Payment.update(
          // 	{
          // 		status: 1,
          // 	},
          // 	{
          // 		where: {
          // 			itinerary_id: id,
          // 		},
          // 	}
          // );

          // const itinerary = Itinerary.update(
          // 	{
          // 		status: 1,
          // 	},
          // 	{
          // 		where: {
          // 			id: id,
          // 		},
          // 	}
          // );

          // if (_payment && itinerary){
          return response.json(true);
          // }
        }
      },
    );
  }

  async cancel(request: Request, response: Response) {
    return response.json(false);
  }
}
