import { Router } from "express";
import UsersRoutes from "./users/routes";
import AuthRoutes from "./auth/routes";

const router = Router();

router.use("/users", UsersRoutes);
router.use("/auth", AuthRoutes);

export default router;
