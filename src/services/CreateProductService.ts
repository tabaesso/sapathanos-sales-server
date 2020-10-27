import { getRepository } from 'typeorm';
import Product from '../models/Product';
import CreateSizeService from './CreateSizeService';

interface Request {
  seller_id: string;
  category_id: string;
  name: string;
  description: string;
  color: string;
  material: string;
  price: number;
}

class CreateProductService {
    public async execute({
      seller_id,
      category_id,
      name,
      description,
      color,
      material,
      price
    }: Request): Promise<Product> {
      const productRepository = getRepository(Product);

      const createSize = new CreateSizeService();

      const size = await createSize.execute();

      const product = await productRepository.create({
        seller_id,
        category_id,
        size_id: size.id,
        name,
        description,
        color,
        material,
        price
      });

      await productRepository.save(product);

      return product;
  }
}

export default CreateProductService;
