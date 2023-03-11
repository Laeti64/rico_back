import { Router } from "express";
import ticketController from "./controller";

const router = Router();

router.post("/create", ticketController.create);

export default router;
