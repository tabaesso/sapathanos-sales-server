import { Request, Response } from 'express';
import { getConnection, getRepository } from 'typeorm';
import Product from '../models/Category';

import CreateCategoryService from '../services/CreateCategoryService';

export default class CategoriesController {
    async create(request: Request, response: Response) {
        const {
          department_id,
          name,
          created_at,
          updated_at
        } = request.body;

        const createCategory = new CreateCategoryService();

        const category = await createCategory.execute({
          department_id,
          name,
          created_at,
          updated_at

        });

        return response.json(category);
    }


    async index(request: Request, response: Response) {
        const categoriesRepository = getRepository(Category);

        const categories = await categoriesRepository.find();

        return response.json(categories);
    }

}
