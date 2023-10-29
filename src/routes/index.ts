import { Router } from "express";
import AddressController from "../controllers/AddressController";

const route = Router();

route.get("/allAddress", AddressController.findAllAddress);
route.post("/newAddress", AddressController.newAddress);
route.delete("/deleteAddress", AddressController.deleteAddress);
route.put("/updateAddress", AddressController.updateAddress);

export default route;
