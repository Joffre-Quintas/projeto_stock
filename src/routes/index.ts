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

route.get("/allProduct", ProductController.findAllProduct);
route.post("/createNewProduct", validation.requestBody(schema.product),ProductController.createNewProduct);

export default route;
