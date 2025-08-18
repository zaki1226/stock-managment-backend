import { UserRole } from './user-role.entity';
import { RolePermission } from './role-permission.entity';
export declare class cate {
    id: string;
    name: string;
    description: string;
    isActive: boolean;
    userRoles: UserRole[];
    rolePermissions: RolePermission[];
    createdAt: Date;
    updatedAt: Date;
}
