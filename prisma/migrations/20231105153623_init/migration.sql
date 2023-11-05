-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "city" VARCHAR(30) NOT NULL,
    "neighborhood" VARCHAR(30) NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "number" TEXT,
    "complement" TEXT,

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
    "price" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3),
    "update_at" TIMESTAMP(3),

    CONSTRAINT "products_pkey" PRIMARY KEY ("codProduct")
);

-- CreateTable
CREATE TABLE "product_unit" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "unit_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "cod_employee" SERIAL NOT NULL,
    "full_name" VARCHAR(30) NOT NULL,
    "hire_date" TIMESTAMP(3) NOT NULL,
    "office" VARCHAR(30) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("cod_employee")
);

-- CreateIndex
CREATE UNIQUE INDEX "units_address_id_key" ON "units"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "products_slug_name_key" ON "products"("slug_name");

-- CreateIndex
CREATE UNIQUE INDEX "employees_cpf_key" ON "employees"("cpf");

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_unit" ADD CONSTRAINT "product_unit_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("codProduct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_unit" ADD CONSTRAINT "product_unit_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
