import { Router } from "express";
import AddressController from "../controllers/AddressController";
import EmployeeController from "../controllers/EmployeeController";
import validationFields from "../middleware/validationFields";
import UnitController from "../controllers/UnitController";
import validation from "../middleware/validates";
import schema from "../utils/schemas";
import ProductController from "../controllers/ProductController";
import ProductToUnitController from "../controllers/ProductToUnitController";

const route = Router();

route.get("/address", validationFields, AddressController.findAllAddress);
route.post("/address", validationFields, AddressController.newAddress);
route.delete("/address", validationFields, AddressController.deleteAddress);
route.put("/address", validationFields, AddressController.updateAddress);

route.get("/employee", EmployeeController.findAllEmployee);
route.post("/employee", validation.requestBody(schema.employee), EmployeeController.createNewEmployee);
route.put("/employee", validation.requestBody(schema.employeeUpdate), validation.existEmployee, validation.update, EmployeeController.updateEmployee);
route.delete("/employee", validation.requestBody(schema.id), validation.existEmployee, EmployeeController.deleteEmployee);

route.post("/unit", validationFields, UnitController.newUnit)
route.get("/unit/:id?", validation.existUnit, UnitController.findUnit)

route.get("/product/:id?", ProductController.findAllProduct);
route.post("/product", validation.requestBody(schema.product), validation.existProduct, ProductController.createNewProduct);
route.put("/product", validation.requestBody(schema.productUpdate), validation.update , validation.existProduct, ProductController.updateProduct)
route.delete("/product", validation.requestBody(schema.id), validation.existProduct, ProductController.deleteProduct)

route.get("/productUnit/:id?", ProductToUnitController.findProductUnit)
route.post("/productUnit", validation.requestBody(schema.productUnit), validation.existProduct, validation.existUnit, ProductToUnitController.createNewRelationProductUnit)
route.put("/productUnit/:id", validation.requestBody(schema.productUnitUpdate), validation.update, validation.productUnit, ProductToUnitController.updateProductUnit)
route.delete("/productUnit/:id", validation.existProductUnit, ProductToUnitController.deleteProductUnit)

export default route;
