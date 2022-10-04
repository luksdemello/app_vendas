import { Seller } from "@prisma/client";
import { ISellerRepository } from "../../../repositories/sellers/ISellersRepository";

class FindAllSellersUseCase {
  constructor(private sellersRepository: ISellerRepository) {}
  
  async execute(): Promise<Seller[]> {
    const sellers = await this.sellersRepository.findAll();

    return sellers;
  }
}

export { FindAllSellersUseCase }