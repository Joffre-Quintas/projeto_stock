import { Router } from 'express';
import addressRoute from './addressRoute';
import employeeRoute from './employeeRoute';
import productRoute from './productRoute';
import productUnitRoute from './productUnitRoute';
import stockServiceRoute from './stockServiceRoute';
import unitRoute from './unitRoute';

const route = Router();

const imortedRoutes = [addressRoute,employeeRoute,unitRoute, productRoute, productUnitRoute, stockServiceRoute]
imortedRoutes.forEach( r => route.use(r))

export default route;
