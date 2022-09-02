/*
  Warnings:

  - You are about to alter the column `id` on the `User` table. The data in that column will be cast from `BigInt` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - Added the required column `avatar` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_User" (
    "id" STRING NOT NULL,
    "firstName" STRING NOT NULL,
    "lastName" STRING NOT NULL,
    "email" STRING NOT NULL,
    "avatar" STRING NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
DROP INDEX "User_email_key";
INSERT INTO "_prisma_new_User" ("email","firstName","id","lastName") SELECT "email","firstName","id","lastName" FROM "User";
DROP TABLE "User" CASCADE;
ALTER TABLE "_prisma_new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
