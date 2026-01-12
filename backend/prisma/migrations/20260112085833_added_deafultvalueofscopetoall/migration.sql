/*
  Warnings:

  - Made the column `scope` on table `sc_roles` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `sc_roles` MODIFY `scope` VARCHAR(191) NOT NULL DEFAULT 'all';
