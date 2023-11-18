import { Router } from 'express';
import validation from '../middleware/validates';
import schema from '../utils/schemas';
import ProductToUnitController from '../controllers/ProductToUnitController';

const productUnitRoute = Router();

productUnitRoute.get('/productUnit/:id?', ProductToUnitController.findProductUnit);
productUnitRoute.post(
  '/productUnit',
  validation.requestBody(schema.productUnit),
  validation.existProduct,
  validation.existUnit,
  ProductToUnitController.createNewRelationProductUnit
);
productUnitRoute.put('/productUnit/:id', validation.requestBody(schema.productUnitUpdate), validation.update, validation.productUnit, ProductToUnitController.updateProductUnit);
productUnitRoute.delete('/productUnit/:id', validation.existProductUnit, ProductToUnitController.deleteProductUnit);

export default productUnitRoute;
