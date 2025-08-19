import { WarehouseService } from './warehouse.service';
import { Warehouse } from '../../entities/warehouse.entity';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
export declare class WarehouseController {
    private readonly warehouseService;
    constructor(warehouseService: WarehouseService);
    findAll(): Promise<Warehouse[]>;
    findOne(id: string): Promise<Warehouse>;
    create(createWarehouseDto: CreateWarehouseDto): Promise<Warehouse>;
    update(id: string, updateWarehouseDto: UpdateWarehouseDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
