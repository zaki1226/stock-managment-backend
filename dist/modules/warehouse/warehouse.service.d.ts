import { Repository } from 'typeorm';
import { Warehouse } from '../../entities/warehouse.entity';
export declare class WarehouseService {
    private readonly warehouseRepository;
    constructor(warehouseRepository: Repository<Warehouse>);
    findAll(): Promise<Warehouse[]>;
    findOne(id: string): Promise<Warehouse>;
    create(data: Partial<Warehouse>): Promise<Warehouse>;
    update(id: string, data: Partial<Warehouse>): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
