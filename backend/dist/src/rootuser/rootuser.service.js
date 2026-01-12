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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootuserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
let RootuserService = class RootuserService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async create(createRootuserDto) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: createRootuserDto.email },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Email already in use');
        }
        const role = await this.prisma.role.findUnique({
            where: { code: 'sc_admin' },
        });
        if (!role) {
            throw new common_1.NotFoundException('Superadmin role not found. Please run the seed script.');
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(createRootuserDto.password, saltRounds);
        return this.prisma.user.create({
            data: {
                email: createRootuserDto.email,
                name: createRootuserDto.name,
                password: hashedPassword,
                description: createRootuserDto.description,
                roleId: role.id,
            },
            select: {
                id: true,
                email: true,
                name: true,
                role: {
                    select: {
                        name: true,
                        code: true
                    }
                },
                createdAt: true,
            },
        });
    }
    async login(loginRootuserDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: loginRootuserDto.email },
            include: { role: true },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (user.role.code !== 'sc_admin') {
            throw new common_1.UnauthorizedException('Access denied');
        }
        const isPasswordValid = await bcrypt.compare(loginRootuserDto.password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role.code,
        };
        const accessToken = await this.jwtService.signAsync(payload);
        return {
            accessToken,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role.code,
            },
        };
    }
    findAll() {
        return this.prisma.user.findMany({
            include: { role: true }
        });
    }
    findOne(id) {
        return this.prisma.user.findUnique({
            where: { id },
            include: { role: true }
        });
    }
    update(id, updateRootuserDto) {
        return `This action updates a #${id} rootuser`;
    }
    remove(id) {
        return this.prisma.user.delete({
            where: { id }
        });
    }
};
exports.RootuserService = RootuserService;
exports.RootuserService = RootuserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], RootuserService);
//# sourceMappingURL=rootuser.service.js.map