import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import Product from "../models/Product";

interface Request {
    product_id: string;
}

class UpdateProductStatusService {
    public async execute({product_id}: Request): Promise<Product> {
        const productRepository = getRepository(Product);
        let newStatus = 0;

        const product = await productRepository.findOne(product_id);

        if(!product) {
            throw new AppError('Product not found.', 401);
        }

        if(product.status === 0){
            newStatus = 1;
        } 

        product.status = newStatus;

        await productRepository.save(product);

        return product;
    }
}

export default UpdateProductStatusService;