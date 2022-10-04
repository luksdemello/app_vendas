
import { prisma } from "../../database/prisma";
import { ISalesRepository } from "./ISalesRepository";

class SalesRepository implements ISalesRepository {
  async findAll(page?: number, take?: number, sort?: string, asc?: string): Promise<any[]> {
    const order = sort ?? 'id';
    const ascParsed = asc == 'asc' ? 'asc' : 'desc'
    const sales = await prisma.sale.findMany({
        take: take ?? 20,
        skip: page ? (page * (take ?? 20)) : 0,
        orderBy: {
         date: order === 'date' ? ascParsed : 'desc',
        },
        select: {
          id: true,
          visited: true,
          deals: true,
          amount: true,
          date: true,
          seller: {
            select: {
              id: true,
              name: true
            }
          }
        },
    })

    return sales;
  }
}

export { SalesRepository }