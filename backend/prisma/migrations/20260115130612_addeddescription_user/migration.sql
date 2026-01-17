/*
  Warnings:

  - The values [COMPANY_EDIT] on the enum `sc_permissions_code` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `sc_permissions` MODIFY `code` ENUM('COMPANY_CREATE', 'COMPANY_READ', 'COMPANY_UPDATE', 'COMPANY_DELETE', 'USER_CREATE', 'USER_READ', 'USER_UPDATE', 'USER_DELETE', 'REPORT_VIEW', 'SYSTEM_SETTINGS') NOT NULL;

-- AlterTable
ALTER TABLE `sc_users` ADD COLUMN `description` VARCHAR(255) NULL;
