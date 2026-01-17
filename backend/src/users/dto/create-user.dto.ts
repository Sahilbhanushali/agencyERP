import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(2)
    name: string;

    @IsString()
    @MinLength(8)
    password: string;

    @IsUUID()
    roleId: string;

    @IsUUID()
    @IsOptional()
    companyId?: string;

    @IsOptional()
    @IsString()
    description?: string;
}
