import { Router } from "express";
import AddressController from "../controllers/AddressController";
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

export default route;
