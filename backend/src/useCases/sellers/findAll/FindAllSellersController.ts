import { Request, Response } from 'express'
import { FindAllSellersUseCase } from './FindAllSellersUseCase';

class FindAllSellersController {
  constructor(private findAllSellersUseCase: FindAllSellersUseCase){}

  async handler(request: Request, response: Response): Promise<Response> {

    const sellers = await this.findAllSellersUseCase.execute();

    return response.json(sellers);
  }
}

export { FindAllSellersController }