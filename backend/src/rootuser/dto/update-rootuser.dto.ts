import { PartialType } from '@nestjs/mapped-types';
import { CreateRootuserDto } from './create-rootuser.dto';

export class UpdateRootuserDto extends PartialType(CreateRootuserDto) {}
