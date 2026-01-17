-- AlterTable
ALTER TABLE `sc_roles` MODIFY `scope` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `sc_users` ADD COLUMN `isDeleted` BOOLEAN NOT NULL DEFAULT false;
