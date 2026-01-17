"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const exists = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (exists) {
            throw new common_1.ConflictException('Email already exists');
        }
        const role = await this.prisma.role.findUnique({
            where: { id: dto.roleId },
        });
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        if (role.scope === client_1.ScopeType.Global && dto.companyId) {
            throw new common_1.BadRequestException('GLOBAL role cannot be assigned to a company user');
        }
        if (role.scope === client_1.ScopeType.Local && !dto.companyId) {
            throw new common_1.BadRequestException('COMPANY role must be assigned with a company');
        }
        const hashedPassword = await bcrypt_1.default.hash(dto.password, 10);
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
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map