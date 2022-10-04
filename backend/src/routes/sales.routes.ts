import { Router } from 'express';
import { findAllSalesController } from '../useCases/sales';

const salesRouter = Router();

salesRouter.get('/', (request, response) => {
  return findAllSalesController.handler(request, response);
})

export { salesRouter }