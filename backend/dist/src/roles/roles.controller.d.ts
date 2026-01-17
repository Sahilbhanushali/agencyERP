import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { AssignPermissionsDto } from './dto/assign-permissions.dto';
export declare class RolesController {
    private service;
    constructor(service: RolesService);
    create(dto: CreateRoleDto): Promise<{
        name: import("@prisma/client").$Enums.RoleType;
        description: string | null;
        code: import("@prisma/client").$Enums.CodeType;
        scope: import("@prisma/client").$Enums.ScopeType;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        isDeleted: boolean;
    }>;
    assignPermissions(id: string, dto: AssignPermissionsDto): Promise<{
        role: import("@prisma/client").$Enums.RoleType;
        assignedCount: number;
    }>;
    findAll(): Promise<({
        permissions: ({
            permission: {
                description: string | null;
                code: import("@prisma/client").$Enums.PermissionType;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                isDeleted: boolean;
            };
        } & {
            createdAt: Date;
            roleId: string;
            permissionId: string;
        })[];
    } & {
        name: import("@prisma/client").$Enums.RoleType;
        description: string | null;
        code: import("@prisma/client").$Enums.CodeType;
        scope: import("@prisma/client").$Enums.ScopeType;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        isDeleted: boolean;
    })[]>;
}
