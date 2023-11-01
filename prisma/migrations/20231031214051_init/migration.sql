/*
  Warnings:

  - You are about to drop the `_ProductToUnit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductToUnit" DROP CONSTRAINT "_ProductToUnit_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToUnit" DROP CONSTRAINT "_ProductToUnit_B_fkey";

-- DropTable
DROP TABLE "_ProductToUnit";

-- CreateTable
CREATE TABLE "product_unit" (
    "id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "unit_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_unit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_unit" ADD CONSTRAINT "product_unit_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("codProduct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_unit" ADD CONSTRAINT "product_unit_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
