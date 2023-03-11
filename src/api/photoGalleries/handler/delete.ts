import prisma from "../../../../prisma/client";
import { PhotoGalleryHandler } from "../../../interfaces-types/interfaces";

const deletePhotoGallery: PhotoGalleryHandler["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const photoGallery = await prisma.photoGallery.delete({
      where: { id },
    });
    if (!photoGallery)
      return res.status(404).json({ message: "photoGallery not found" });
    return res.status(200).json({ message: "photoGallery deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default deletePhotoGallery;
