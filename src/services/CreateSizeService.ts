import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import Size from "../models/Size";

class CreateSizeService {
    public async execute(): Promise<Size> {
        const sizeRepository = getRepository(Size);

        const size = sizeRepository.create();

        await sizeRepository.save(size);

        return size;
    }
}

export default CreateSizeService;