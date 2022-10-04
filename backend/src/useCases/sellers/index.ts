import { SellersRepository } from "../../repositories/sellers/SellersRepository";
import { FindAllSellersController } from "./findAll/FindAllSellersController";
import { FindAllSellersUseCase } from "./findAll/FindAllSellersUseCase";

const sellersRepository = new SellersRepository();

const findAllSellersUseCase = new FindAllSellersUseCase(sellersRepository);

const findAllSellersController = new FindAllSellersController(findAllSellersUseCase);

export { findAllSellersController }