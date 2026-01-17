import { PermissionsService } from './permissions.service';
export declare class PermissionsController {
    private service;
    constructor(service: PermissionsService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        description: string | null;
        code: import("@prisma/client").$Enums.PermissionType;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        isDeleted: boolean;
    }[]>;
}
