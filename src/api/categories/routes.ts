import { Router } from "express";
import statusController from "./controller";

const router = Router();

router.get("/", statusController.getAll);
router.get("/:id", statusController.getOne);
router.post("/create", statusController.create);
router.put("/update/:id", statusController.update);
router.delete("/delete/:id", statusController.delete);

export default router;
