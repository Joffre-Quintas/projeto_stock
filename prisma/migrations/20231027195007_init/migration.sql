-- CreateTable
CREATE TABLE "Product" (
    "codProduct" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "slug_name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("codProduct")
);

-- CreateTable
CREATE TABLE "_ProductToUnit" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_name_key" ON "Product"("slug_name");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToUnit_AB_unique" ON "_ProductToUnit"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToUnit_B_index" ON "_ProductToUnit"("B");

-- AddForeignKey
ALTER TABLE "_ProductToUnit" ADD CONSTRAINT "_ProductToUnit_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("codProduct") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToUnit" ADD CONSTRAINT "_ProductToUnit_B_fkey" FOREIGN KEY ("B") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
