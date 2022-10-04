import { Router } from "express";
import { sellersRouter } from "./sellers.routes";

const router = Router();

router.use('/sellers', sellersRouter);

export { router }