import { getCustomRepository } from 'typeorm';
import Vehicle from '../models/Vehicle';
import VehiclesRepository from '../repositories/VehiclesRepository';

interface Request {
  vehicle: string;
  brand: string;
  year: number;
  description: string;
  sold: boolean;
}

class CreateVehicleService {
  public async execute({
    vehicle,
    brand,
    year,
    description,
    sold,
  }: Request): Promise<Vehicle> {
    const vehiclesRepository = getCustomRepository(VehiclesRepository);

    const createdVehicle = vehiclesRepository.create({
      vehicle,
      brand,
      year,
      description,
      sold,
    });

    await vehiclesRepository.save(createdVehicle);
    return createdVehicle;
  }
}

export default CreateVehicleService;
