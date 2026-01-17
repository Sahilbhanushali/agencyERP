/*
  Warnings:

  - You are about to drop the column `code` on the `sc_roles` table. All the data in the column will be lost.
  - You are about to drop the column `scope` on the `sc_roles` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `sc_roles` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `sc_roles` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to drop the column `description` on the `sc_users` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `sc_users` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `sc_users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - A unique constraint covering the columns `[name]` on the table `sc_roles` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `sc_roles_code_key` ON `sc_roles`;

-- AlterTable
ALTER TABLE `sc_roles` DROP COLUMN `code`,
    DROP COLUMN `scope`,
    DROP COLUMN `status`,
    ADD COLUMN `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `name` ENUM('SUPER_ADMIN', 'COMPANY_ADMIN', 'MANAGER', 'USER', 'GUEST') NOT NULL,
    MODIFY `description` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `sc_users` DROP COLUMN `description`,
    DROP COLUMN `isDeleted`,
    ADD COLUMN `company_id` VARCHAR(191) NULL,
    ADD COLUMN `is_deleted` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `name` VARCHAR(100) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE `companies` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE', 'ARCHIVED') NOT NULL DEFAULT 'ACTIVE',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    INDEX `companies_is_deleted_idx`(`is_deleted`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissions` (
    `id` VARCHAR(191) NOT NULL,
    `code` ENUM('USER_CREATE', 'USER_READ', 'USER_UPDATE', 'USER_DELETE', 'COMPANY_EDIT', 'REPORT_VIEW', 'SYSTEM_SETTINGS') NOT NULL,
    `description` VARCHAR(255) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `permissions_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role_permissions` (
    `role_id` VARCHAR(191) NOT NULL,
    `permission_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`role_id`, `permission_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `sc_roles_name_key` ON `sc_roles`(`name`);

-- CreateIndex
CREATE INDEX `sc_users_company_id_idx` ON `sc_users`(`company_id`);

-- CreateIndex
CREATE INDEX `sc_users_email_is_deleted_idx` ON `sc_users`(`email`, `is_deleted`);

-- AddForeignKey
ALTER TABLE `sc_users` ADD CONSTRAINT `sc_users_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_permissions` ADD CONSTRAINT `role_permissions_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `sc_roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_permissions` ADD CONSTRAINT `role_permissions_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `permissions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
