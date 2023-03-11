import { Router } from "express";
import ticketController from "./controller";

const router = Router();

router.post("/create", ticketController.create);
router.get("/", ticketController.getAll);
router.get("/:id", ticketController.getOne);
router.delete("/:id", ticketController.delete);
router.post("/:id", ticketController.update);

export default router;
