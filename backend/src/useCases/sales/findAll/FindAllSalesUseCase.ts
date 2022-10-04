import { SalesDto } from "../../../dto/SalesDto";
import { ISalesRepository } from "../../../repositories/sales/ISalesRepository";

class FindAllSalesUseCase {
  constructor(private salesRepository: ISalesRepository) {}

  async execute(page?: number, take?: number, sort?: string, asc?: string): Promise<SalesDto[]> {
    const sales = await this.salesRepository.findAll(page, take, sort, asc)

    return sales;
  }
}

export { FindAllSalesUseCase }