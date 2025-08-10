import { Repository } from 'typeorm';
import { Permission } from '../../entities/permission.entity';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
export declare class PermissionsService {
    private permissionsRepository;
    constructor(permissionsRepository: Repository<Permission>);
    create(createPermissionDto: CreatePermissionDto): Promise<Permission>;
    findAll(): Promise<Permission[]>;
    findOne(id: string): Promise<Permission>;
    update(id: string, updatePermissionDto: UpdatePermissionDto): Promise<Permission>;
    remove(id: string): Promise<void>;
    findByResource(resource: string): Promise<Permission[]>;
}
