import prisma from "../../../../prisma/client";
import { PhotoHandler } from "../../../interfaces-types/interfaces";

const getAllPhotos: PhotoHandler["getAll"] = async (req, res) => {
  try {
    const photo = await prisma.photo.findMany({});
    res.status(200).json(photo);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getAllPhotos;
