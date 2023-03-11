import { Router } from "express";
import commentsController from "./controller";

const router = Router();

router.get("/", commentsController.getAll);
router.get("/:id", commentsController.getOne);
router.post("/create", commentsController.create);
router.delete("/delete/:id", commentsController.delete);

export default router;
