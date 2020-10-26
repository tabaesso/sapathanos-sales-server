import { Request, Response } from 'express';
import { getConnection, getRepository } from 'typeorm';
import Product from '../models/Product';

import CreateProductService from '../services/CreateProductService';
import UpdateProductStatusService from '../services/UpdateProductStatusService';

export default class ProductsController {
    async create(request: Request, response: Response) {
        const {
            category_id,
            name,
            description,
            color,
            material,
            price
        } = request.body;


        const createProduct = new CreateProductService();

        const product = await createProduct.execute({
            category_id,
            name,
            description,
            color,
            material,
            price
        });

        return response.json(product);
    }

    async updateStatus(request: Request, response: Response) {
        const { product_id } = request.params;

        const updateProductStatus = new UpdateProductStatusService();

        const product = await updateProductStatus.execute({
            product_id
        });

        return response.json(product);
    }

    async findActive(request: Request, response: Response) {
        const productsRepository = getRepository(Product);

        const products = await productsRepository.find({
            where: {status: 1}
        })

        return response.json(products);
    }

    async index(request: Request, response: Response) {
        const productsRepository = getRepository(Product);

        const products = await productsRepository.find();

        return response.json(products);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        /** CONSULTA USANDO QUERY BUILDER */
        const product = await getConnection()
            .getRepository(Product)
            .createQueryBuilder('product')
            .leftJoinAndSelect('product.size', 'size')
            .where('product.id =:id', {id: id})
            .getMany();

        return response.json(product);
    }
}
