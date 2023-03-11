import { Router } from "express";
import authController from "./controller";

const router = Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.post("/signout", authController.signout);
router.post("/me", authController.me);

export default router;
