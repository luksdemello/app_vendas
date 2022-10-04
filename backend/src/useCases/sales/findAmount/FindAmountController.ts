import { Request, Response } from 'express';
import { FindAmountUseCase } from './FindAmountUseCase';

class FindAmoutController {
  constructor(private findAmountUseCase: FindAmountUseCase) {}

  async handler(request: Request, response: Response): Promise<Response> {
    const amounts = await this.findAmountUseCase.execute();

    return response.json(amounts);
  }
}


export { FindAmoutController }