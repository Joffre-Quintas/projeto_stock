import { Router } from 'express';
import StockController from '../controllers/StockController';

const stockServiceRoute = Router();

stockServiceRoute.get('/stockService', StockController.consultAssetValue);

export default stockServiceRoute;
