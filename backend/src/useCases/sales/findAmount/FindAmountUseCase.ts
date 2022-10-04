import { ISalesRepository } from "../../../repositories/sales/ISalesRepository"


class FindAmountUseCase {
  constructor(private salesRepository: ISalesRepository) {}


  async execute(): Promise<SalesSumDto[]> {
    const amounts = await this.salesRepository.amountGroupedBySeller();

    return amounts;
  }
}

export { FindAmountUseCase }