import { Request, Response } from 'express';

import AuthenticateCustomerService from '../services/AuthenticateCustomerService';
import AuthenticateSellerService from '../services/AuthenticateSellerService';

export default class SessionsController {
  async createCustomerSession(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateCustomer = new AuthenticateCustomerService();

    const { customer, token } = await authenticateCustomer.execute({
      email,
      password,
    });

    delete customer.password;

    return response.json({ customer, token });
  }

  async createSellerSession(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateSeller = new AuthenticateSellerService();

    const { seller, token } = await authenticateSeller.execute({
      email,
      password,
    });

    delete seller.password;

    return response.json({ seller, token });
  }
}
