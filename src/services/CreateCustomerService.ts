import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Customer from '../models/Customer';

import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
  address: string;
}

class CreateCustomerService {
  public async execute({ name, email, password, address }: Request): Promise<Customer> {
    const customersRepository = getRepository(Customer);

    const checkUserExists = await customersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = customersRepository.create({
      name,
      email,
      password: hashedPassword,
      address,
    });

    await customersRepository.save(user);

    return user;
  }
}

export default CreateCustomerService;
