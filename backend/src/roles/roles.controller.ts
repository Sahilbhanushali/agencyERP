import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { AssignPermissionsDto } from './dto/assign-permissions.dto';

@Controller('roles')
export class RolesController {
    constructor(private service: RolesService) { }

    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.service.createRole(dto);
    }

    @Post(':id/permissions')
    assignPermissions(
        @Param('id') id: string,
        @Body() dto: AssignPermissionsDto,
    ) {
        return this.service.assignPermissions(id, dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }
}
