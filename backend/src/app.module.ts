import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RootuserModule } from './rootuser/rootuser.module';
import { PrismaModule } from "./prisma/prisma.module"
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [RootuserModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
