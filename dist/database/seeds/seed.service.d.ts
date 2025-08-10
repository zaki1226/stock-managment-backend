import { Repository } from 'typeorm';
import { Role } from '../../entities/role.entity';
import { Permission } from '../../entities/permission.entity';
import { RolePermission } from '../../entities/role-permission.entity';
import { User } from '../../entities/user.entity';
import { UserRole } from '../../entities/user-role.entity';
export declare class SeedService {
    private rolesRepository;
    private permissionsRepository;
    private rolePermissionsRepository;
    private usersRepository;
    private userRolesRepository;
    constructor(rolesRepository: Repository<Role>, permissionsRepository: Repository<Permission>, rolePermissionsRepository: Repository<RolePermission>, usersRepository: Repository<User>, userRolesRepository: Repository<UserRole>);
    seed(): Promise<void>;
    private seedPermissions;
    private seedRoles;
    private seedAdminUser;
}
