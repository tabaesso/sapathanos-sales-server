import { Request, Response } from 'express';

import CreateCustomerService from '../services/CreateCustomerService';

export default class CustomersController {
  async create(request: Request, response: Response) {
    const { name, email, password, address } = request.body;

    const createCustomer = new CreateCustomerService();

    const customer = await createCustomer.execute({
      name,
      email,
      password,
      address,
    });

    // delete customer.password;

    return response.json(customer);
  }
}
