import { Request, Response } from 'express';
import { getConnection, getRepository } from 'typeorm';
import Size from '../models/Size';
import UpdateSizeService from '../services/UpdateSizeService';

export default class SizerController {
    async update(request: Request, response: Response) {
        const {
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

        const { id } = request.params;

        const sizeRepository = new UpdateSizeService();

        const size = await sizeRepository.execute({
            id,
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

    async show(request: Request, response: Response) {
      const { id } = request.params;

      const sizeRepository = getRepository(Size);

      const size = await sizeRepository.findOne(id);

        return response.json(size);
    }

    async index(request: Request, response: Response) {
      const sizeRepository = getRepository(Size);

      const sizes = await sizeRepository.find();

        return response.json(sizes);
    }

    async findSize(request: Request, response: Response) {
      const { id } = request.params;
      const { sizeColumn } = request.body;

      const sizeRepository = getRepository(Size);

      const column = await sizeRepository.find({
        select: [sizeColumn],
        where: {id}
      });

    //   const { column } = await getConnection()
    //   .getRepository(Size)
    //   .createQueryBuilder('size')
    //   .where('size.id =:id', {id: id})
    //   .select([`size.${sizeColumn} AS column`])
    //   .execute();

      return response.json(column);
    }
}
