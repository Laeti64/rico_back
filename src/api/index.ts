import { Router } from "express";
import UsersRoutes from "./users/routes";
import AuthRoutes from "./auth/routes";
import TicketsRoutes from "./tickets/routes";
import StatusRoutes from "./status/routes";
import CategoriesRoutes from "./categories/routes";
import PhotoGalleriesRoutes from "./photoGalleries/routes";
import PhotosRoutes from "./photos/routes";
import CommentsRoutes from "./comments/routes";

const router = Router();

router.use("/users", UsersRoutes);
router.use("/auth", AuthRoutes);
router.use("/tickets", TicketsRoutes);
router.use("/status", StatusRoutes);
router.use("/categories", CategoriesRoutes);
router.use("/photoGalleries", PhotoGalleriesRoutes);
router.use("/photos", PhotosRoutes);
router.use("/comments", CommentsRoutes);

export default router;
