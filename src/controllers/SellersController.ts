import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Seller from '../models/Seller';

import CreateSellerService from '../services/CreateSellerService';

export default class SellersController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createSeller = new CreateSellerService();

    const seller = await createSeller.execute({
      name,
      email,
      password,
    });

    // delete seller.password;

    return response.json(seller);
  };

  async index(request: Request, response: Response) {
    const customersRepository = getRepository(Seller);

    const sellers = await customersRepository.find();

    return response.json(sellers);
  }
}
