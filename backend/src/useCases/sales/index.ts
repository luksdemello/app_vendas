import { SalesRepository } from "../../repositories/sales/SalesRepository";
import { FindAllSalesController } from "./findAll/FindAllSalesController";
import { FindAllSalesUseCase } from "./findAll/FindAllSalesUseCase";
import { FindAmoutController } from "./findAmount/FindAmountController";
import { FindAmountUseCase } from "./findAmount/FindAmountUseCase";


const salessRepository = new SalesRepository();

const findAllSalesUseCase = new FindAllSalesUseCase(salessRepository);
const findAmountUseCase = new FindAmountUseCase(salessRepository);

const findAllSalesController = new FindAllSalesController(findAllSalesUseCase);
const findAmountController = new FindAmoutController(findAmountUseCase);

export { findAllSalesController, findAmountController }