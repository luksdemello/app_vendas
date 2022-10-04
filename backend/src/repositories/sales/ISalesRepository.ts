import { Sale } from "@prisma/client";

interface ISalesRepository {
  findAll(skip?: number, take?: number, sort?: string, asc?: string): Promise<any[]>;
}

export { ISalesRepository }