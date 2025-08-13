import { AppService } from './app.service';
import { UsersService } from './modules/users/users.service';
import { RolesService } from './modules/roles/roles.service';
import { PermissionsService } from './modules/permissions/permissions.service';
export declare class AppController {
    private readonly appService;
    private readonly usersService;
    private readonly rolesService;
    private readonly permissionsService;
    constructor(appService: AppService, usersService: UsersService, rolesService: RolesService, permissionsService: PermissionsService);
    getHello(): string;
    getDashboardStats(): Promise<{
        totalUsers: number;
        activeRoles: number;
        permissions: number;
        stockItems: number;
    }>;
}
