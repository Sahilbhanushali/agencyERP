import { Injectable, ConflictException, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ScopeType } from '@prisma/client';
import bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateUserDto) {
        // 1. Prevent duplicate email
        const exists = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });

        if (exists) {
            throw new ConflictException('Email already exists');
        }

        // 2. Load role
        const role = await this.prisma.role.findUnique({
            where: { id: dto.roleId },
        });

        if (!role) {
            throw new NotFoundException('Role not found');
        }

        // 3. Enforce scope rules (VERY IMPORTANT)
        if (role.scope === ScopeType.Global && dto.companyId) {
            throw new BadRequestException(
                'GLOBAL role cannot be assigned to a company user',
            );
        }

        if (role.scope === ScopeType.Local && !dto.companyId) {
            throw new BadRequestException(
                'COMPANY role must be assigned with a company',
            );
        }

        // 4. Hash password
        const hashedPassword = await bcrypt.hash(dto.password, 10);

        // 5. Create user
        return this.prisma.user.create({
            data: {
                email: dto.email,
                name: dto.name,
                password: hashedPassword,
                roleId: role.id,
                companyId: dto.companyId ?? null,
                description: dto.description,
            },
            select: {
                id: true,
                email: true,
                name: true,
                role: {
                    select: {
                        code: true,
                        scope: true,
                    },
                },
                companyId: true,
                createdAt: true,
            },
        });
    }

    async findAll() {
        return this.prisma.user.findMany({
            where: { isDeleted: false },
            include: {
                role: true,
                company: true,
            },
        });
    }

}
