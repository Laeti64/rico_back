import { Router } from "express";
import UsersRoutes from "./users/routes";
import AuthRoutes from "./auth/routes";
import TicketsRoutes from "./tickets/routes";
import StatusRoutes from "./status/routes";
import CategoriesRoutes from "./categories/routes";
import PhotoGalleriesRoutes from "./photoGalleries/routes";

const router = Router();

router.use("/users", UsersRoutes);
router.use("/auth", AuthRoutes);
router.use("/tickets", TicketsRoutes);
router.use("/status", StatusRoutes);
router.use("/categories", CategoriesRoutes);
router.use("/photoGalleries", PhotoGalleriesRoutes);

export default router;
