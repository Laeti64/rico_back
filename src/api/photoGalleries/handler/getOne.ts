import prisma from "../../../../prisma/client";
import { PhotoGalleryHandler } from "../../../interfaces-types/interfaces";

const getOnePhotoGallery: PhotoGalleryHandler["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const photoGallery = await prisma.photoGallery.findUnique({
      where: { id },
      include: {
        photos: true,
      },
    });
    if (!photoGallery)
      return res.status(404).json({ message: "photoGallery not found" });
    return res.status(200).json(photoGallery);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default getOnePhotoGallery;
