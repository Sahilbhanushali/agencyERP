import { Injectable, ConflictException, NotFoundException, BadRequestException } from '@nestjs/common';
import { AssignPermissionsDto } from './dto/assign-permissions.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
    constructor(private prisma: PrismaService) { }

    async createRole(dto: CreateRoleDto) {

        const exists = await this.prisma.role.findFirst({
            where: {
                OR: [
                    { name: dto.name },
                    { code: dto.code }
                ]
            },
        });

        if (exists) {
            throw new ConflictException('Role name or code already exists');
        }

        return this.prisma.role.create({
            data: {
                name: dto.name,
                code: dto.code,
                scope: dto.scope,
                description: dto.description,
            },
        });
    }

    async assignPermissions(roleId: string, dto: AssignPermissionsDto) {

        const role = await this.prisma.role.findUnique({
            where: { id: roleId, isDeleted: false },
        });

        if (!role) throw new NotFoundException('Role not found');


        const permissions = await this.prisma.permission.findMany({
            where: {
                code: { in: dto.permissionCodes },
                isDeleted: false
            },
        });

        if (permissions.length !== dto.permissionCodes.length) {
            throw new BadRequestException('One or more permission codes are invalid');
        }


        return this.prisma.$transaction(async (tx) => {
            await tx.rolePermission.deleteMany({
                where: { roleId },
            });

            await tx.rolePermission.createMany({
                data: permissions.map(p => ({
                    roleId,
                    permissionId: p.id,
                })),
            });

            return {
                role: role.name,
                assignedCount: permissions.length
            };
        });
    }

    async findAll() {
        return this.prisma.role.findMany({
            where: { isDeleted: false },
            include: {
                permissions: {
                    include: {
                        permission: true,
                    },
                },
            },
        });
    }
}
