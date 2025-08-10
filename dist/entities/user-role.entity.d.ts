import { User } from './user.entity';
import { Role } from './role.entity';
export declare class UserRole {
    id: string;
    userId: string;
    roleId: string;
    user: User;
    role: Role;
    assignedAt: Date;
}
