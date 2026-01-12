import { Module } from '@nestjs/common';
import { RootuserService } from './rootuser.service';
import { RootuserController } from './rootuser.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [RootuserController],
  providers: [RootuserService],
})
export class RootuserModule { }
