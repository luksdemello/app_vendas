
import { prisma } from "../../database/prisma";
import { SalesDto } from "../../dto/SalesDto";
import { ISalesRepository } from "./ISalesRepository";

class SalesRepository implements ISalesRepository {
  async findAll(page?: number, take?: number, sort?: string, asc?: string): Promise<SalesDto[]> {
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

  async amountGroupedBySeller(): Promise<SalesSumDto[]> {
    const amoutedGroup = await prisma.$queryRaw<any[]>`
      select sl.name, sum(s.amount) from tb_sales s
      left join
        tb_sellers sl
      on
        s."sellerId" = sl.id
      group by sl.name
    `

    return amoutedGroup;
  }
}

export { SalesRepository }