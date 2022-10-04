import { SalesRepository } from "../../repositories/sales/SalesRepository";
import { FindAllSalesController } from "./findAll/FindAllSalesController";
import { FindAllSalesUseCase } from "./findAll/FindAllSalesUseCase";


const salessRepository = new SalesRepository();

const findAllSalesUseCase = new FindAllSalesUseCase(salessRepository);

const findAllSalesController = new FindAllSalesController(findAllSalesUseCase);

export { findAllSalesController }