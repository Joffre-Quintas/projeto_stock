import { Router } from "express";
import AddressController from "../controllers/AddressController";
import EmployeeController from "../controllers/EmployeeController";
import validationFields from "../middleware/validationFields";
import validation from "../middleware/validates";
import schema from "../utils/schemas";
import ProductController from "../controllers/ProductController";

const route = Router();

route.get("/allAddress", validationFields, AddressController.findAllAddress);
route.post("/newAddress", validationFields, AddressController.newAddress);
route.delete(
  "/deleteAddress",
  validationFields,
  AddressController.deleteAddress,
);
route.put("/updateAddress", validationFields, AddressController.updateAddress);


route.get("/allEmployee", EmployeeController.findAllEmployee);
route.post("/createNewEmployee", validation.requestBody(schema.employee) ,EmployeeController.createNewEmployee);
route.put("/updateEmployee", validation.requestBody(schema.employeeUpdate), validation.existEmployee, validation.update,EmployeeController.updateEmployee);
route.delete("/deleteEmployee",validation.requestBody(schema.id), validation.existEmployee, EmployeeController.deleteEmployee);

route.get("/product/:id?", ProductController.findAllProduct);
route.post("/product", validation.requestBody(schema.product), validation.existProduct, ProductController.createNewProduct);
route.put("/product", validation.requestBody(schema.productUpdate), validation.update , validation.existProduct, ProductController.updateProduct)
route.delete("/product", validation.requestBody(schema.id), validation.existProduct, ProductController.deleteProduct)

export default route;
