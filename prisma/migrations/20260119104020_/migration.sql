/*
  Warnings:

  - Added the required column `company_name` to the `submissions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `submissions` ADD COLUMN `company_name` VARCHAR(191) NOT NULL;
