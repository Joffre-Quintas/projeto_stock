/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "city" VARCHAR(30) NOT NULL,
    "neighborhood" VARCHAR(30) NOT NULL,
    "street" VARCHAR(30) NOT NULL,
    "number" INTEGER NOT NULL,
    "Complement" TEXT,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);
