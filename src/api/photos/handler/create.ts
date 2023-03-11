import prisma from "../../../../prisma/client";
import { PhotoHandler } from "../../../interfaces-types/interfaces";

const createPhoto: PhotoHandler["create"] = async (req, res) => {
  const { url, userId, description, title } = req.body;
  try {
    const photo = await prisma.photo.create({
      data: {
        url,
        userId,
        title,
        description,
      },
    });
    res.status(200).json(photo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createPhoto;
