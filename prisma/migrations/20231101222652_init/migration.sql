-- AlterTable
CREATE SEQUENCE product_unit_id_seq;
ALTER TABLE "product_unit" ALTER COLUMN "id" SET DEFAULT nextval('product_unit_id_seq');
ALTER SEQUENCE product_unit_id_seq OWNED BY "product_unit"."id";
