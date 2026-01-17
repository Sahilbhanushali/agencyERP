import { PermissionType } from '@prisma/client';
import { IsEnum, IsArray, ArrayNotEmpty } from "class-validator";

export class AssignPermissionsDto {
    @IsArray()
    @ArrayNotEmpty()
    @IsEnum(PermissionType, {
        each: true,
        message: 'One or more permission codes are invalid'
    })
    permissionCodes: PermissionType[];
}