import { Router } from 'express';
import { findAllSalesController, findAmountController } from '../useCases/sales';

const salesRouter = Router();

salesRouter.get('/', (request, response) => {
  return findAllSalesController.handler(request, response);
})

salesRouter.get('/amount', (request, response) => {
  return findAmountController.handler(request, response);
})

export { salesRouter }