import { getCustomRepository } from 'typeorm';
import Customer from '../models/Customer';
import CustomersRepository from '../repositories/CustomersRepository';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateCustomerService {
  public async execute({ name, email, password }: Request): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const createdCustomer = customersRepository.create({
      name,
      email,
      password,
    });

    await customersRepository.save(createdCustomer);
    return createdCustomer;
  }
}

export default CreateCustomerService;
