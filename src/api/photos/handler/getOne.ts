import prisma from "../../../../prisma/client";
import { PhotoHandler } from "../../../interfaces-types/interfaces";

const getOnePhoto: PhotoHandler["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const photo = await prisma.photo.findUnique({
      where: { id },
      include: {
        categories: true,
        author: true,
        galleries: true,
      },
    });
    if (!photo) return res.status(404).json({ message: "photo not found" });
    return res.status(200).json(photo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default getOnePhoto;
