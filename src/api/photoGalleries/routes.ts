import { Router } from "express";
import photoGalleryController from "./controller";

const router = Router();

router.get("/", photoGalleryController.getAll);
router.get("/:id", photoGalleryController.getOne);
router.post("/create", photoGalleryController.create);
router.put("/update/:id", photoGalleryController.update);
router.delete("/delete/:id", photoGalleryController.delete);

export default router;
