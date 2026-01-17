import { RoleType, CodeType, ScopeType } from '@prisma/client';
export declare class CreateRoleDto {
    name: RoleType;
    description?: string;
    code: CodeType;
    scope: ScopeType;
}
