import { Router } from "express";
import { salesRouter } from "./sales.routes";
import { sellersRouter } from "./sellers.routes";

const router = Router();

router.use('/sellers', sellersRouter);
router.use('/sales', salesRouter);

export { router }