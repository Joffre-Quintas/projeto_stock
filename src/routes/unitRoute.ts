import { Router } from 'express';
import validation from '../middleware/validates';
import UnitController from '../controllers/UnitController';
import schema from '../utils/schemas';

const unitRoute = Router();

unitRoute.get('/unit/:id?', validation.existUnit, UnitController.findUnit);
unitRoute.post(
  '/unit',
  validation.requestBody(schema.unit),
  validation.existAddress,
  validation.existAddressRegister,
  UnitController.newUnit
);
unitRoute.delete('/unit/:id', validation.existUnit, UnitController.deleteUnit);
unitRoute.put(
  '/unit/:id',
  validation.existUnit,
  validation.existAddress,
  validation.requestBody(schema.unitUpdate),
  UnitController.updateUnit
);

export default unitRoute;
