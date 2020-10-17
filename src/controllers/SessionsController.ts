import { Request, Response } from 'express';

import AuthenticateCustomerService from '../services/AuthenticateCustomerService';

export default class CustomersController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateCustomer = new AuthenticateCustomerService();

    const { customer, token } = await authenticateCustomer.execute({
      email,
      password,
    });

    delete customer.password;

    return response.json({ customer, token });
  }
}
