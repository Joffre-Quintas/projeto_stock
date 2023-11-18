import { Router } from "express";
import validation from "../middleware/validates";
import schema from "../utils/schemas";
import EmployeeController from "../controllers/EmployeeController";

const employeeRoute = Router()

employeeRoute.get('/employee', EmployeeController.findAllEmployee);
employeeRoute.post('/employee', validation.requestBody(schema.employee), EmployeeController.createNewEmployee);
employeeRoute.put('/employee/:id', validation.requestBody(schema.employeeUpdate), validation.existEmployee, validation.update, EmployeeController.updateEmployee);
employeeRoute.delete('/employee/:id', validation.existEmployee, EmployeeController.deleteEmployee);

export default employeeRoute;