import { Request, Response } from 'express';
import AppError from '../errors/AppError';
// import CustomersRepository from '../repositories/CustomersRepository';

import CreateCustomerService from '../services/CreateCustomerService';

export default class CustomersController {
  async create(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;

      const createCustomer = new CreateCustomerService();

      const createdCustomer = await createCustomer.execute({
        name,
        email,
        password,
      });

      return response.json(createdCustomer);
    } catch (err) {
      return new AppError('Please, verify JSON body');
    }
  }
}
