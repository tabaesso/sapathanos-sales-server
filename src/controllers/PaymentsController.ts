import { Request, Response } from 'express';
// import { getRepository } from 'typeorm';
// import Department from '../models/Department';

// import CreateDepartmentService from '../services/CreateDepartmentService';

export default class PaymentsController {
  async create(request: Request, response: Response) {
    // const { name } = request.body;

    // const nameUpperCase = name.toUpperCase();

    // const createDapartment = new CreateDepartmentService();

    // const department = await createDapartment.execute({ name: nameUpperCase });

    return response.json('Init payment');
  }

  async success(request: Request, response: Response) {
    // const departmentsRepository = getRepository(Department);

    // const departments = await departmentsRepository.find();

    return response.json('Success payment');
  }

  async cancel(request: Request, response: Response) {
    return response.json(false);
  }
}
