import { getRepository } from 'typeorm';
import Product from '../models/Product';

interface Request {
    category_id: string;
    name: string;
    description: string;
    color: string;
    material: string;
    price: number;
}

class CreateProductService {
    public async execute({ 
        category_id, 
        name, 
        description, 
        color, 
        material, 
        price
    }: Request): Promise<Product> {
        const productRepository = getRepository(Product);

        const product = await productRepository.create({ 
            category_id,
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