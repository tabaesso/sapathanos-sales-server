import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../configs/auth';

import AppError from '../errors/AppError';

import Seller from '../models/Seller';

interface Request {
  email: string;
  password: string;
}

interface Response {
  seller: Seller;
  token: string;
}

class AuthenticateSellerService {
  public async execute({ email, password }: Request): Promise<Response> {
    const sellersRepository = getRepository(Seller);

    const seller = await sellersRepository.findOne({ where: { email } });

    if (!seller) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await compare(password, seller.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: seller.id,
      expiresIn,
    });

    return { seller, token };
  }
}

export default AuthenticateSellerService;
