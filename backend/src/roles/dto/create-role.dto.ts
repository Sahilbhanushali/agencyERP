import { RoleType, CodeType, ScopeType } from '@prisma/client';
import { IsEnum, IsString, IsOptional, IsNotEmpty } from "class-validator";

export class CreateRoleDto {
    @IsEnum(RoleType, {
        message: 'Role Type Does not Matched'
    })
    name: RoleType;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(CodeType, {
        message: "Code Type Does not Matched"
    })
    code: CodeType;

    @IsEnum(ScopeType, {
        message: 'Scope Type Does not matched'
    })
    scope: ScopeType;

}