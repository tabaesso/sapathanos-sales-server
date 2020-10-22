import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Seller from '../models/Seller';

import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateSellerService {
  public async execute({ name, email, password }: Request): Promise<Seller> {
    const sellersRepository = getRepository(Seller);

    const checkUserExists = await sellersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = sellersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await sellersRepository.save(user);

    return user;
  }
}

export default CreateSellerService;
