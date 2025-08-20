import { Repository } from 'typeorm';
import { Unit } from '../../entities/unit.entity';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
export declare class UnitsService {
    private readonly unitRepository;
    constructor(unitRepository: Repository<Unit>);
    create(createUnitDto: CreateUnitDto): Promise<Unit>;
    findAll(): Promise<Unit[]>;
    findOne(id: string): Promise<Unit>;
    update(id: string, updateUnitDto: UpdateUnitDto): Promise<Unit>;
    remove(id: string): Promise<void>;
}
