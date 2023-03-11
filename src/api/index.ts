import { Router } from "express";
import UsersRoutes from "./users/routes";
import AuthRoutes from "./auth/routes";
import TicketsRoutes from "./tickets/routes";
import StatusRoutes from "./status/routes";

const router = Router();

router.use("/users", UsersRoutes);
router.use("/auth", AuthRoutes);
router.use("/tickets", TicketsRoutes);
router.use("/status", StatusRoutes);

export default router;
