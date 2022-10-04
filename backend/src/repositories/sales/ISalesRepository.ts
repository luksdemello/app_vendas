import { SalesDto } from "../../dto/SalesDto";

interface ISalesRepository {
  findAll(skip?: number, take?: number, sort?: string, asc?: string): Promise<SalesDto[]>;
  amountGroupedBySeller(): Promise<SalesSumDto[]>;
}

export { ISalesRepository }