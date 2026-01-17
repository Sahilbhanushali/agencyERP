/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `sc_roles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `sc_roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scope` to the `sc_roles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sc_roles` ADD COLUMN `code` ENUM('SC_SUPER_ADMIN', 'SC_PLATFORM_MANAGER', 'SC_COMPANY_ADMIN', 'SC_MANAGER', 'SC_USER', 'SC_GUEST') NOT NULL,
    ADD COLUMN `scope` ENUM('Global', 'Local') NOT NULL,
    MODIFY `name` ENUM('SUPER_ADMIN', 'PLATFORM_MANAGER', 'COMPANY_ADMIN', 'MANAGER', 'USER', 'GUEST') NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `sc_roles_code_key` ON `sc_roles`(`code`);
