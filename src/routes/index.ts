import { Router } from 'express';
import addressRoute from './addressRoute';
import employeeRoute from './employeeRoute';
import productRoute from './productRoute';
import productUnitRoute from './productUnitRoute';
import stockServiceRoute from './stockServiceRoute';
import unitRoute from './unitRoute';

const route = Router();

const importedRoutes = [addressRoute, employeeRoute, unitRoute, productRoute, productUnitRoute, stockServiceRoute];
importedRoutes.forEach((r) => route.use(r));

export default route;
