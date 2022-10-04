import { Router } from 'express';

import { findAllSellersController } from '../useCases/sellers';

const sellersRouter = Router();

sellersRouter.get('/', (request, response) => {
  return findAllSellersController.handler(request, response);
})



export { sellersRouter }