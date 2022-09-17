/*
  Warnings:

  - You are about to drop the column `age` on the `Animal` table. All the data in the column will be lost.
  - You are about to alter the column `weight` on the `Animal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `dob` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Animal` DROP COLUMN `age`,
    ADD COLUMN `dob` VARCHAR(191) NOT NULL,
    MODIFY `weight` INTEGER NOT NULL;
