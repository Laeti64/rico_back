import prisma from "../../../../prisma/client";
import { PhotoGalleryHandler } from "../../../interfaces-types/interfaces";

const getAllPHotoGalleries: PhotoGalleryHandler["getAll"] = async (
  req,
  res
) => {
  try {
    const photoGallery = await prisma.photoGallery.findMany({
      include: {
        photos: true,
      },
    });
    res.status(200).json(photoGallery);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getAllPHotoGalleries;
