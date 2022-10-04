import { Seller } from "@prisma/client";
import { prisma } from "../../database/prisma";
import { ISellerRepository } from "./ISellersRepository";

class SellersRepository implements ISellerRepository {
  async findAll(): Promise<Seller[]> {
    const sellers = await prisma.seller.findMany();

    return sellers;
  }
}

export { SellersRepository}