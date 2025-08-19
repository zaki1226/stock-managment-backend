import { AppService } from './app.service';
import { UsersService } from './modules/users/users.service';
import { RolesService } from './modules/roles/roles.service';
import { PermissionsService } from './modules/permissions/permissions.service';
import { WarehouseService } from './modules/warehouse/warehouse.service';
export declare class AppController {
    private readonly appService;
    private readonly usersService;
    private readonly rolesService;
    private readonly permissionsService;
    private readonly warehouseService;
    constructor(appService: AppService, usersService: UsersService, rolesService: RolesService, permissionsService: PermissionsService, warehouseService: WarehouseService);
    getHello(): string;
    getDashboardStats(): Promise<{
        totalUsers: number;
        activeRoles: number;
        permissions: number;
        stockItems: number;
        warehouses: number;
    }>;
}
