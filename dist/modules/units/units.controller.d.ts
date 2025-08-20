import { UnitsService } from './units.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
export declare class UnitsController {
    private readonly unitsService;
    constructor(unitsService: UnitsService);
    create(createUnitDto: CreateUnitDto): Promise<import("../../entities/unit.entity").Unit>;
    findAll(): Promise<import("../../entities/unit.entity").Unit[]>;
    findOne(id: string): Promise<import("../../entities/unit.entity").Unit>;
    update(id: string, updateUnitDto: UpdateUnitDto): Promise<import("../../entities/unit.entity").Unit>;
    remove(id: string): Promise<void>;
}
