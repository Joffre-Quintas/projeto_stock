import { Router } from "express";
import AddressController from '../controllers/AddressController';
import validation from "../middleware/validates";
import schema from "../utils/schemas";

const addressRoute = Router();

addressRoute.get('/address', AddressController.findAllAddress);
addressRoute.post('/address', validation.requestBody(schema.address), AddressController.newAddress);
addressRoute.put('/address/:id', validation.requestBody(schema.addressUpdate), validation.update, AddressController.updateAddress);
addressRoute.delete('/address/:id', AddressController.deleteAddress);

export default addressRoute;