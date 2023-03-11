import { Router } from "express";
import categoryController from "./controller";

const router = Router();

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getOne);
router.post("/create", categoryController.create);
router.put("/update/:id", categoryController.update);
router.delete("/delete/:id", categoryController.delete);

export default router;
