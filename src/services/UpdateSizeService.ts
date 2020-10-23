import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import Size from "../models/Size";

interface Request {
    id: string;
    size_33: number;
    size_34: number;
    size_35: number;
    size_36: number;
    size_37: number;
    size_38: number;
    size_39: number;
    size_40: number;
    size_41: number;
    size_42: number;
    size_43: number;
    size_44: number;
    size_45: number;
    size_46: number;
    size_47: number;
    size_48: number;
}

class UpdateSizeService {
    public async execute({
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
    }: Request): Promise<Size> {
        const sizeRepository = getRepository(Size);

        const size = await sizeRepository.findOne(id);

        if(!size) {
            throw new AppError('Not found...');
        }

        size.size_33 = size_33;
        size.size_34 = size_34;
        size.size_35 = size_35;
        size.size_36 = size_36;
        size.size_37 = size_37;
        size.size_38 = size_38;
        size.size_39 = size_39;
        size.size_40 = size_40;
        size.size_41 = size_41;
        size.size_42 = size_42;
        size.size_43 = size_43;
        size.size_44 = size_44;
        size.size_45 = size_45;
        size.size_46 = size_46;
        size.size_47 = size_47;
        size.size_48 = size_48;

        await sizeRepository.save(size);

        return size;
    }
}

export default UpdateSizeService;