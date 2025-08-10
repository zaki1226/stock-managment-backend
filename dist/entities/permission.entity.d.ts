import { RolePermission } from './role-permission.entity';
export declare class Permission {
    id: string;
    name: string;
    description: string;
    resource: string;
    action: string;
    isActive: boolean;
    rolePermissions: RolePermission[];
    createdAt: Date;
    updatedAt: Date;
}
