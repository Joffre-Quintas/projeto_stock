import { Router } from 'express';
import AddressController from '../controllers/AddressController';

const route = Router()

route.get('/allAddress', AddressController.findAllAdress)

export default route;