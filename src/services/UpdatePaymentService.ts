import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Department from '../models/Department';

interface Request {
  name: string;
}

class UpdatePaymentService {
    public async execute({
      name
    }: Request): Promise<Department> {
      const departmentRepository = getRepository(Department);

      const checkDepartmentExists = await departmentRepository.findOne({
        where: { name },
      });

      if (checkDepartmentExists) {
        throw new AppError('Department has already been registered.');
      }

      const department = await departmentRepository.create({
        name
      });

      await departmentRepository.save(department);

      return department;
  }
}

export default UpdatePaymentService;
