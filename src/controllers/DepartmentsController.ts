import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Department from '../models/Department';

import CreateDepartmentService from '../services/CreateDepartmentService';

export default class DepartmentsController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    const nameUpperCase = name.toUpperCase();

    const createDapartment = new CreateDepartmentService();

    const department = await createDapartment.execute({ name: nameUpperCase });

    return response.json(department);
  }

  async index(request: Request, response: Response) {
    const departmentsRepository = getRepository(Department);

    const departments = await departmentsRepository.find();

    return response.json(departments);
  }
}
