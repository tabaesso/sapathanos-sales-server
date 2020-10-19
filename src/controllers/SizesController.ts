import { Request, response, Response } from 'express';
import CreateSizeService from '../services/CreateSizeService';
import UpdateSizeService from '../services/UpdateSizeService';

export default class SizerController {
    async create(request: Request, response: Response) {
        const { 
            product_id,
            size_33,
            size_34,
            size_35,
            size_36,
            size_37,
            size_38,
            size_39,
            size_40,
            size_41,
            size_42,
            size_43,
            size_44,
            size_45,
            size_46,
            size_47,
            size_48,
        } = request.body;

        const createSize = new CreateSizeService();

        const size = createSize.execute({
            product_id,
            size_33,
            size_34,
            size_35,
            size_36,
            size_37,
            size_38,
            size_39,
            size_40,
            size_41,
            size_42,
            size_43,
            size_44,
            size_45,
            size_46,
            size_47,
            size_48,
        })

        return response.json(size);
    }
    
    async update(request: Request, response: Response) {
        const { 
            product_id,
            size_33,
            size_34,
            size_35,
            size_36,
            size_37,
            size_38,
            size_39,
            size_40,
            size_41,
            size_42,
            size_43,
            size_44,
            size_45,
            size_46,
            size_47,
            size_48,
        } = request.body;

        const sizeRepository = new UpdateSizeService();

        const size = await sizeRepository.execute({
            product_id,
            size_33,
            size_34,
            size_35,
            size_36,
            size_37,
            size_38,
            size_39,
            size_40,
            size_41,
            size_42,
            size_43,
            size_44,
            size_45,
            size_46,
            size_47,
            size_48
        });

        return response.json(size);
    }
}