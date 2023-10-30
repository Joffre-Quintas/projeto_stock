import { Router } from "express";
import AddressController from "../controllers/AddressController";
import EmployeeController from "../controllers/EmployeeController";
import validationFields from "../middleware/validationFields";

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
route.post("/createNewEmployee", EmployeeController.createNewEmployee);
route.put("/updateEmployee", EmployeeController.updateEmployee);
route.delete("/deleteEmployee", EmployeeController.deleteEmployee);

export default route;
