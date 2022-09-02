/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "firstName" STRING NOT NULL,
    "lastName" STRING NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "email" STRING NOT NULL,
    "phone" STRING NOT NULL,
    "password" STRING NOT NULL,
    "avatar" STRING,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "type" STRING NOT NULL,
    "breed" STRING NOT NULL,
    "gender" STRING NOT NULL,
    "age" STRING NOT NULL,
    "weight" STRING NOT NULL,
    "avatar" STRING,
    "userId" STRING NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
