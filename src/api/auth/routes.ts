import { Router } from "express";
import authController from "./controller";

const router = Router();

router.post("/signup", authController.signup);

export default router;
