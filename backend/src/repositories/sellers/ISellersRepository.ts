import { Seller } from "@prisma/client"

interface ISellerRepository {
  findAll(): Promise<Seller[]>
}

export { ISellerRepository }