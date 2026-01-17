import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        role: {
            code: import("@prisma/client").$Enums.CodeType;
            scope: import("@prisma/client").$Enums.ScopeType;
        };
        companyId: string | null;
    }>;
    findAll(): Promise<({
        role: {
            id: string;
            name: import("@prisma/client").$Enums.RoleType;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            isDeleted: boolean;
            code: import("@prisma/client").$Enums.CodeType;
            scope: import("@prisma/client").$Enums.ScopeType;
        };
        company: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            isDeleted: boolean;
            status: import("@prisma/client").$Enums.EntityStatus;
        } | null;
    } & {
        id: string;
        email: string;
        name: string;
        password: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        isDeleted: boolean;
        roleId: string;
        companyId: string | null;
    })[]>;
}
