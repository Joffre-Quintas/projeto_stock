import { Router } from "express";
import AddressController from "../controllers/AddressController";
import EmployeeController from "../controllers/EmployeeController";

const route = Router();

route.get("/allAddress", AddressController.findAllAdress);


route.get("/allEmployee", EmployeeController.findAllEmployee);
route.post("/createNewEmployee", EmployeeController.createNewEmployee);
route.put("/updateEmployee", EmployeeController.updateEmployee);
route.delete("/deleteEmployee", EmployeeController.deleteEmployee);

export default route;
