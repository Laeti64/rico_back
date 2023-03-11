import { Router } from "express";
import photosController from "./controller";

const router = Router();

router.get("/", photosController.getAll);
router.get("/:id", photosController.getOne);
router.post("/create", photosController.create);
router.put("/update/:id", photosController.update);
router.delete("/delete/:id", photosController.delete);

export default router;
