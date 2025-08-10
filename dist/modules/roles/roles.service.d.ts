import { Repository } from 'typeorm';
import { Role } from '../../entities/role.entity';
import { RolePermission } from '../../entities/role-permission.entity';
import { Permission } from '../../entities/permission.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RolesService {
    private rolesRepository;
    private rolePermissionsRepository;
    private permissionsRepository;
    constructor(rolesRepository: Repository<Role>, rolePermissionsRepository: Repository<RolePermission>, permissionsRepository: Repository<Permission>);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOne(id: string): Promise<Role>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<Role>;
    remove(id: string): Promise<void>;
    assignPermissions(roleId: string, permissionIds: string[]): Promise<void>;
}
