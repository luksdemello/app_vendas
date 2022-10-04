import { Request, Response } from 'express'
import { FindAllSalesUseCase } from './FindAllSalesUseCase'

class FindAllSalesController {
  constructor(private findAllSalesUseCase: FindAllSalesUseCase) {}

  async handler(request: Request, response: Response): Promise<Response> {
    const pageQuery = request.query['page']?.toString();
    const sizeQuery = request.query['size']?.toString();
    const sortQuery = request.query['sort']?.toString();

    const page = pageQuery ? Number(pageQuery) : undefined;
    const take = sizeQuery ? Number(sizeQuery) : undefined;
    const sort = sortQuery ? sortQuery.split(',')[0] : undefined; 
    const asc = sortQuery ? sortQuery.split(',')[1] : undefined; 

    const sales = await this.findAllSalesUseCase.execute(page, take, sort, asc);

    return response.json(sales);
  }
}


export { FindAllSalesController }