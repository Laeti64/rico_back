import prisma from "../../../../prisma/client";
import { PhotoGalleryHandler } from "../../../interfaces-types/interfaces";

const createPhotoGallery: PhotoGalleryHandler["create"] = async (req, res) => {
  const { name } = req.body;
  try {
    const photoGallery = await prisma.photoGallery.create({
      data: {
        name,
      },
    });
    res.status(200).json(photoGallery);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createPhotoGallery;
