import { getRepository } from 'typeorm';
import Category from '../models/Category';

interface Request {
  department_id: string;
  name: string;
}

class CreateCategoryService {
  public async execute({ department_id, name }: Request): Promise<Category> {
    const categoryRepository = getRepository(Category);

    const category = categoryRepository.create({
      department_id,
      name,
      // created_at: Date.now(),
      // updated_at: Date.now(),
    });

    await categoryRepository.save(category);

    return category;
  }
}

export default CreateCategoryService;
