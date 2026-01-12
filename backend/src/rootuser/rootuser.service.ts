import { Injectable, ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateRootuserDto } from './dto/create-rootuser.dto';
import { UpdateRootuserDto } from './dto/update-rootuser.dto';
import { LoginRootuserDto } from './dto/login-rootuser.dto'
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RootuserService {
  constructor(private prisma: PrismaService, private jwtService: JwtService,) { }

  async create(createRootuserDto: CreateRootuserDto) {

    const existingUser = await this.prisma.user.findUnique({
      where: { email: createRootuserDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    const role = await this.prisma.role.findUnique({
      where: { code: 'sc_admin' },
    });


    if (!role) {
      throw new NotFoundException('Superadmin role not found. Please run the seed script.');
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

  async login(loginRootuserDto: LoginRootuserDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: loginRootuserDto.email },
      include: { role: true },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (user.role.code !== 'sc_admin') {
      throw new UnauthorizedException('Access denied');
    }
    const isPasswordValid = await bcrypt.compare(
      loginRootuserDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
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

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { role: true }
    });
  }

  update(id: string, updateRootuserDto: UpdateRootuserDto) {
    return `This action updates a #${id} rootuser`;
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id }
    });
  }
}