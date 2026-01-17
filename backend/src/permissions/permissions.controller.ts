import { Controller, Get } from '@nestjs/common';
import { PermissionsService } from './permissions.service';

@Controller('permissions')
export class PermissionsController {
    constructor(private service: PermissionsService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }
}
