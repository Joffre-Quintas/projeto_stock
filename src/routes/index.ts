import { Router } from "express";
import AddressController from "../controllers/AddressController";
import EmployeeController from "../controllers/EmployeeController";
import validationFields from "../middleware/validationFields";
import UnitController from "../controllers/UnitController";
import validation from "../middleware/validates";
import schema from "../utils/schemas";

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
route.get("/unit/:id?", UnitController.findUnit)

export default route;
