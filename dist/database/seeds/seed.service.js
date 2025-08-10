"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("../../entities/role.entity");
const permission_entity_1 = require("../../entities/permission.entity");
const role_permission_entity_1 = require("../../entities/role-permission.entity");
const user_entity_1 = require("../../entities/user.entity");
const user_role_entity_1 = require("../../entities/user-role.entity");
const bcrypt = __importStar(require("bcrypt"));
let SeedService = class SeedService {
    rolesRepository;
    permissionsRepository;
    rolePermissionsRepository;
    usersRepository;
    userRolesRepository;
    constructor(rolesRepository, permissionsRepository, rolePermissionsRepository, usersRepository, userRolesRepository) {
        this.rolesRepository = rolesRepository;
        this.permissionsRepository = permissionsRepository;
        this.rolePermissionsRepository = rolePermissionsRepository;
        this.usersRepository = usersRepository;
        this.userRolesRepository = userRolesRepository;
    }
    async seed() {
        await this.seedPermissions();
        await this.seedRoles();
        await this.seedAdminUser();
    }
    async seedPermissions() {
        const permissions = [
            {
                name: 'users.create',
                description: 'Create users',
                resource: 'users',
                action: 'create',
            },
            {
                name: 'users.read',
                description: 'View users',
                resource: 'users',
                action: 'read',
            },
            {
                name: 'users.update',
                description: 'Update users',
                resource: 'users',
                action: 'update',
            },
            {
                name: 'users.delete',
                description: 'Delete users',
                resource: 'users',
                action: 'delete',
            },
            {
                name: 'roles.create',
                description: 'Create roles',
                resource: 'roles',
                action: 'create',
            },
            {
                name: 'roles.read',
                description: 'View roles',
                resource: 'roles',
                action: 'read',
            },
            {
                name: 'roles.update',
                description: 'Update roles',
                resource: 'roles',
                action: 'update',
            },
            {
                name: 'roles.delete',
                description: 'Delete roles',
                resource: 'roles',
                action: 'delete',
            },
            {
                name: 'permissions.create',
                description: 'Create permissions',
                resource: 'permissions',
                action: 'create',
            },
            {
                name: 'permissions.read',
                description: 'View permissions',
                resource: 'permissions',
                action: 'read',
            },
            {
                name: 'permissions.update',
                description: 'Update permissions',
                resource: 'permissions',
                action: 'update',
            },
            {
                name: 'permissions.delete',
                description: 'Delete permissions',
                resource: 'permissions',
                action: 'delete',
            },
            {
                name: 'stock.create',
                description: 'Create stock items',
                resource: 'stock',
                action: 'create',
            },
            {
                name: 'stock.read',
                description: 'View stock items',
                resource: 'stock',
                action: 'read',
            },
            {
                name: 'stock.update',
                description: 'Update stock items',
                resource: 'stock',
                action: 'update',
            },
            {
                name: 'stock.delete',
                description: 'Delete stock items',
                resource: 'stock',
                action: 'delete',
            },
        ];
        for (const permission of permissions) {
            const existingPermission = await this.permissionsRepository.findOne({
                where: { name: permission.name },
            });
            if (!existingPermission) {
                await this.permissionsRepository.save(this.permissionsRepository.create(permission));
            }
        }
        console.log('Permissions seeded successfully');
    }
    async seedRoles() {
        const rolesData = [
            {
                name: 'Admin',
                description: 'Full system access',
                permissions: [
                    'users.create',
                    'users.read',
                    'users.update',
                    'users.delete',
                    'roles.create',
                    'roles.read',
                    'roles.update',
                    'roles.delete',
                    'permissions.create',
                    'permissions.read',
                    'permissions.update',
                    'permissions.delete',
                    'stock.create',
                    'stock.read',
                    'stock.update',
                    'stock.delete',
                ],
            },
            {
                name: 'Manager',
                description: 'Manage users and stock',
                permissions: [
                    'users.read',
                    'users.update',
                    'roles.read',
                    'permissions.read',
                    'stock.create',
                    'stock.read',
                    'stock.update',
                    'stock.delete',
                ],
            },
            {
                name: 'Staff',
                description: 'Basic user with limited access',
                permissions: ['users.read', 'stock.read', 'stock.update'],
            },
        ];
        for (const roleData of rolesData) {
            let role = await this.rolesRepository.findOne({
                where: { name: roleData.name },
            });
            if (!role) {
                role = await this.rolesRepository.save(this.rolesRepository.create({
                    name: roleData.name,
                    description: roleData.description,
                }));
                for (const permissionName of roleData.permissions) {
                    const permission = await this.permissionsRepository.findOne({
                        where: { name: permissionName },
                    });
                    if (permission) {
                        await this.rolePermissionsRepository.save(this.rolePermissionsRepository.create({
                            roleId: role.id,
                            permissionId: permission.id,
                        }));
                    }
                }
            }
        }
        console.log('Roles seeded successfully');
    }
    async seedAdminUser() {
        const adminEmail = 'admin@example.com';
        const existingAdmin = await this.usersRepository.findOne({
            where: { email: adminEmail },
        });
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash('admin123', 10);
            const admin = await this.usersRepository.save(this.usersRepository.create({
                firstName: 'System',
                lastName: 'Administrator',
                email: adminEmail,
                phoneNumber: '+1234567890',
                address: '123 Admin Street',
                password: hashedPassword,
                isActive: true,
            }));
            const adminRole = await this.rolesRepository.findOne({
                where: { name: 'Admin' },
            });
            if (adminRole) {
                await this.userRolesRepository.save(this.userRolesRepository.create({
                    userId: admin.id,
                    roleId: adminRole.id,
                }));
            }
            console.log('Admin user created successfully');
            console.log('Email: admin@example.com');
            console.log('Password: admin123');
        }
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __param(1, (0, typeorm_1.InjectRepository)(permission_entity_1.Permission)),
    __param(2, (0, typeorm_1.InjectRepository)(role_permission_entity_1.RolePermission)),
    __param(3, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(4, (0, typeorm_1.InjectRepository)(user_role_entity_1.UserRole)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SeedService);
//# sourceMappingURL=seed.service.js.map