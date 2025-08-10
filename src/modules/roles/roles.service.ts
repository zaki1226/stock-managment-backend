import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Role } from '../../entities/role.entity';
import { RolePermission } from '../../entities/role-permission.entity';
import { Permission } from '../../entities/permission.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
    @InjectRepository(RolePermission)
    private rolePermissionsRepository: Repository<RolePermission>,
    @InjectRepository(Permission)
    private permissionsRepository: Repository<Permission>,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const { permissionIds, ...roleData } = createRoleDto;

    const existingRole = await this.rolesRepository.findOne({
      where: { name: roleData.name },
    });

    if (existingRole) {
      throw new ConflictException('Role with this name already exists');
    }

    const role = this.rolesRepository.create(roleData);
    const savedRole = await this.rolesRepository.save(role);

    if (permissionIds && permissionIds.length > 0) {
      await this.assignPermissions(savedRole.id, permissionIds);
    }

    return this.findOne(savedRole.id);
  }

  async findAll(): Promise<Role[]> {
    return this.rolesRepository.find({
      relations: ['rolePermissions', 'rolePermissions.permission'],
    });
  }

  async findOne(id: string): Promise<Role> {
    const role = await this.rolesRepository.findOne({
      where: { id },
      relations: ['rolePermissions', 'rolePermissions.permission'],
    });

    if (!role) {
      throw new NotFoundException(`Role with ID ${id} not found`);
    }

    return role;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const { permissionIds, ...updateData } = updateRoleDto;

    const role = await this.findOne(id);

    if (updateData.name) {
      const existingRole = await this.rolesRepository.findOne({
        where: { name: updateData.name },
      });

      if (existingRole && existingRole.id !== id) {
        throw new ConflictException('Role name already in use');
      }
    }

    await this.rolesRepository.update(id, updateData);

    if (permissionIds !== undefined) {
      await this.rolePermissionsRepository.delete({ roleId: id });
      if (permissionIds.length > 0) {
        await this.assignPermissions(id, permissionIds);
      }
    }

    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const role = await this.findOne(id);
    await this.rolesRepository.remove(role);
  }

  async assignPermissions(
    roleId: string,
    permissionIds: string[],
  ): Promise<void> {
    const permissions = await this.permissionsRepository.find({
      where: { id: In(permissionIds) },
    });

    if (permissions.length !== permissionIds.length) {
      throw new BadRequestException('One or more invalid permission IDs');
    }

    const rolePermissions = permissionIds.map((permissionId) => {
      return this.rolePermissionsRepository.create({
        roleId,
        permissionId,
      });
    });

    await this.rolePermissionsRepository.save(rolePermissions);
  }
}
