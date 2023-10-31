import { Router } from "express";
import AddressController from "../controllers/AddressController";
import EmployeeController from "../controllers/EmployeeController";
import validationFields from "../middleware/validationFields";
import UnitController from "../controllers/UnitController";

const route = Router();

route.get("/address", validationFields, AddressController.findAllAddress);
route.post("/address", validationFields, AddressController.newAddress);
route.delete("/address", validationFields, AddressController.deleteAddress);
route.put("/address", validationFields, AddressController.updateAddress);

route.get("/employee", EmployeeController.findAllEmployee);
route.post("/employee", EmployeeController.createNewEmployee);
route.put("/employee", EmployeeController.updateEmployee);
route.delete("/employee", EmployeeController.deleteEmployee);

route.post("/unit", validationFields, UnitController.newUnit)
route.get("/unit/:id?", UnitController.findUnit)

export default route;
