import { Router } from "express";
import AddressController from "../controllers/AddressController";
import EmployeeController from "../controllers/EmployeeController";
import validationFields from "../middleware/validationFields";
import validation from "../middleware/validates";
import schema from "../utils/schemas";

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
route.put("/updateEmployee", validation.requestBody(schema.employeeUpdate),validation.existEmployee, EmployeeController.updateEmployee);
route.delete("/deleteEmployee",validation.requestBody(schema.id), validation.existEmployee, EmployeeController.deleteEmployee);

export default route;
