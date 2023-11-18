import { Router } from 'express';
import validation from '../middleware/validates';
import validationFields from '../middleware/validationFields';
import UnitController from '../controllers/UnitController';

const unitRoute = Router();

unitRoute.post('/unit', validationFields, UnitController.newUnit);
unitRoute.get('/unit/:id?', validation.existUnit, UnitController.findUnit);

export default unitRoute;
