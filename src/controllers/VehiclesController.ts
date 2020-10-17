/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import VehiclesRepository from '../repositories/VehiclesRepository';

import CreateVehicleService from '../services/CreateVehicleService';

export default class VehiclesController {
  async findAll(request: Request, response: Response) {
    const vehiclesRepository = getCustomRepository(VehiclesRepository);
    const vehicles = await vehiclesRepository.find();

    return response.json(vehicles);
  }

  async findByParams(request: Request, response: Response) {
    const vehiclesRepository = getCustomRepository(VehiclesRepository);

    let vehicle;

    const filters = request.query;

    if (!filters.brand && !filters.sold) {
      throw new AppError('Missing filters to search classes');
    }

    if (filters.brand) {
      vehicle = await vehiclesRepository.findOne({
        where: { brand: filters.brand },
      });
    } else {
      vehicle = await vehiclesRepository.findOne({
        where: { sold: filters.sold },
      });
    }

    return response.json(vehicle);
  }

  async findById(request: Request, response: Response) {
    const vehiclesRepository = getCustomRepository(VehiclesRepository);
    const vehicle = await vehiclesRepository.findOne(request.params.id);

    return response.json(vehicle);
  }

  async create(request: Request, response: Response) {
    try {
      const { vehicle, brand, year, description, sold } = request.body;

      const createVehicle = new CreateVehicleService();

      const createdVehicle = await createVehicle.execute({
        vehicle,
        brand,
        year,
        description,
        sold,
      });

      return response.json(createdVehicle);
    } catch (err) {
      return new AppError('Please, verify JSON body');
    }
  }

  async update(request: Request, response: Response) {
    const vehiclesRepository = getCustomRepository(VehiclesRepository);
    const foundVehicle = await vehiclesRepository.findOne(request.params.id);

    if (!foundVehicle) {
      return new AppError('Vehicle not found');
    }

    vehiclesRepository.merge(foundVehicle, request.body);
    const result = await vehiclesRepository.save(foundVehicle);
    return response.json(result);
  }

  async delete(request: Request, response: Response) {
    const vehiclesRepository = getCustomRepository(VehiclesRepository);
    const vehicle = await vehiclesRepository.delete(request.params.id);

    return response.json(vehicle);
  }
}
