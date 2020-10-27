import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Category from '../models/Category';

import CreateCategoryService from '../services/CreateCategoryService';

export default class CategoriesController {
  async create(request: Request, response: Response) {
    const { department_id, name } = request.body;

    const createCategory = new CreateCategoryService();

    const category = await createCategory.execute({
      department_id,
      name,
    });

    return response.json(category);
  }

  async index(request: Request, response: Response) {
    const categoriesRepository = getRepository(Category);

    const categories = await categoriesRepository.find();

    return response.json(categories);
  }
}
