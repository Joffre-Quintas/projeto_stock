/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Unit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_address_id_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToUnit" DROP CONSTRAINT "_ProductToUnit_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToUnit" DROP CONSTRAINT "_ProductToUnit_B_fkey";

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "Unit";

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "city" VARCHAR(30) NOT NULL,
    "neighborhood" VARCHAR(30) NOT NULL,
    "street" VARCHAR(30) NOT NULL,
    "number" INTEGER NOT NULL,
    "Complement" TEXT,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "units" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "address_id" INTEGER NOT NULL,

    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "codProduct" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "slug_name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("codProduct")
);

-- CreateTable
CREATE TABLE "employees" (
    "cod_employee" SERIAL NOT NULL,
    "full_name" VARCHAR(30) NOT NULL,
    "hire_date" TIMESTAMP(3) NOT NULL,
    "office" VARCHAR(30) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("cod_employee")
);

-- CreateIndex
CREATE UNIQUE INDEX "units_address_id_key" ON "units"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "products_slug_name_key" ON "products"("slug_name");

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToUnit" ADD CONSTRAINT "_ProductToUnit_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("codProduct") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToUnit" ADD CONSTRAINT "_ProductToUnit_B_fkey" FOREIGN KEY ("B") REFERENCES "units"("id") ON DELETE CASCADE ON UPDATE CASCADE;
