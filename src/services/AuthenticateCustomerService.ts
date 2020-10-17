import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import AppError from '../errors/AppError';

import Customer from '../models/Customer';

interface Request {
  email: string;
  password: string;
}

interface Response {
  customer: Customer;
  token: string;
}

class AuthenticateCustomerService {
  public async execute({ email, password }: Request): Promise<Response> {
    const customersRepository = getRepository(Customer);

    const customer = await customersRepository.findOne({ where: { email } });

    if (!customer) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await compare(password, customer.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: customer.id,
      expiresIn,
    });

    return { customer, token };
  }
}

export default AuthenticateCustomerService;
