/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import { Request, Response } from 'express';

import paypal from 'paypal-rest-sdk';

import CreatePaymentService from '../services/CreatePaymentService';
import FinishPaymentService from '../services/FinishPaymentService';
import GeneratePaymentService from '../services/GeneratePaymentService';
import UpdateOrderService from '../services/UpdateOrderService';
import DeleteOrderService from '../services/DeleteOrderService';

import paypalConfig from '../configs/paypal';

paypal.configure(paypalConfig);
export default class PaymentsController {
  async create(request: Request, response: Response) {
    const { order_id } = request.params;

    const createPayment = new CreatePaymentService();

    const payment = await createPayment.execute({
      order_id,
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
  }

  async finish(request: Request, response: Response) {
    const { order_id } = request.params;

    const finishPayment = new FinishPaymentService();

    const paidOrder = await finishPayment.execute({
      order_id,
    });

    return response.json(paidOrder);
  }

  async success(request: Request, response: Response) {
    const { order_id } = request.params;
    const { paymentId, token, PayerID } = request.query;

    const generatePayment = new GeneratePaymentService();
    const updateOrder = new UpdateOrderService();

    const convertPayerID = PayerID as string;
    const convertPaymentId = paymentId as string;

    const execute_payment_json = await generatePayment.execute({
      order_id,
      PayerID: convertPayerID,
    });

    paypal.payment.execute(
      convertPaymentId,
      execute_payment_json,
      async (error, payment) => {
        if (error) {
          console.warn(error.response);
          throw error;
        } else {
          console.log(JSON.stringify(payment));

          const updated = await updateOrder.execute({
            order_id,
          });

          return response.json(updated);
        }
      },
    );
  }

  async cancel(request: Request, response: Response) {
    const { order_id } = request.params;

    const deleteOrder = new DeleteOrderService();

    const deleted = await deleteOrder.execute({
      order_id,
    });

    return response.json(deleted);
  }
}
