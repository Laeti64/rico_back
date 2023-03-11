import { Router } from "express";
import UsersController from "./controller";

const router = Router();

router.get("/", UsersController.getAll);
router.get("/:id", UsersController.getOne);
router.delete("/:id", UsersController.delete);
router.put("/:id", UsersController.update);

export default router;
