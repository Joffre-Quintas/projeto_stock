/*
  Warnings:

  - The `number` column on the `addresses` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "number",
ADD COLUMN     "number" INTEGER;
