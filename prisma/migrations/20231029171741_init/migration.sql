/*
  Warnings:

  - You are about to drop the column `Complement` on the `addresses` table. All the data in the column will be lost.
  - Added the required column `cep` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "Complement",
ADD COLUMN     "cep" VARCHAR(8) NOT NULL,
ADD COLUMN     "complement" TEXT;
