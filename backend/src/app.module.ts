import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from "./prisma/prisma.module"
import { RolesModule } from './roles/roles.module';
import { PermissionsController } from './permissions/permissions.controller';
import { PermissionsService } from './permissions/permissions.service';
import { PermissionsModule } from './permissions/permissions.module';
import { UsersModule } from './users/users.module';
import { CompaniesController } from './companies/companies.controller';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [PrismaModule, RolesModule, PermissionsModule, UsersModule, CompaniesModule],
  controllers: [AppController, PermissionsController, CompaniesController],
  providers: [AppService, PermissionsService],
})
export class AppModule { }
