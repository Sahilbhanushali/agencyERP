import { CreateRootuserDto } from './dto/create-rootuser.dto';
import { UpdateRootuserDto } from './dto/update-rootuser.dto';
import { LoginRootuserDto } from './dto/login-rootuser.dto';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class RootuserService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    create(createRootuserDto: CreateRootuserDto): Promise<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        role: {
            name: string;
            code: string;
        };
    }>;
    login(loginRootuserDto: LoginRootuserDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string;
            name: string;
            role: string;
        };
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        role: {
            id: string;
            name: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            code: string;
            scope: string;
            status: boolean;
        };
    } & {
        id: string;
        email: string;
        name: string;
        password: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        roleId: string;
    })[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__UserClient<({
        role: {
            id: string;
            name: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            code: string;
            scope: string;
            status: boolean;
        };
    } & {
        id: string;
        email: string;
        name: string;
        password: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        roleId: string;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateRootuserDto: UpdateRootuserDto): string;
    remove(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        email: string;
        name: string;
        password: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        roleId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
