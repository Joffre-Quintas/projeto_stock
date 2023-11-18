import { Router } from 'express';
import validation from '../middleware/validates';
import schema from '../utils/schemas';
import ProductController from '../controllers/ProductController';

const productRoute = Router();

productRoute.get('/product/:id?', ProductController.findAllProduct);
productRoute.post('/product', validation.requestBody(schema.product), validation.existProduct, ProductController.createNewProduct);
productRoute.put('/product', validation.requestBody(schema.productUpdate), validation.update, validation.existProduct, ProductController.updateProduct);
productRoute.delete('/product', validation.requestBody(schema.id), validation.existProduct, ProductController.deleteProduct);

export default productRoute;
