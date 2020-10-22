import { Request, Response } from 'express';

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

    delete seller.password;

    return response.json(seller);
  }
}
