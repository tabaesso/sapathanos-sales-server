import { EntityRepository, Repository } from 'typeorm';
import Vehicle from '../models/Vehicle';

@EntityRepository(Vehicle)
class VehiclesRepository extends Repository<Vehicle> {}

export default VehiclesRepository;
