import prisma from "../../../../prisma/client";
import { PhotoGalleryHandler } from "../../../interfaces-types/interfaces";

const updatePhotoGallery: PhotoGalleryHandler["update"] = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const photoGallery = await prisma.photoGallery.update({
      where: { id },
      data: { name },
    });
    if (!photoGallery)
      return res.status(404).json({ message: "photoGallery not found" });
    return res.status(200).json(photoGallery);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default updatePhotoGallery;
