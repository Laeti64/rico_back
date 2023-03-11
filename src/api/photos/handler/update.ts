import prisma from "../../../../prisma/client";
import { PhotoHandler } from "../../../interfaces-types/interfaces";

const updatePhoto: PhotoHandler["update"] = async (req, res) => {
  const { id } = req.params;
  const { url, userId, description, title } = req.body;
  try {
    const photo = await prisma.photo.update({
      where: { id },
      data: {
        url,
        userId,
        description,
        title,
      },
    });
    if (!photo) return res.status(404).json({ message: "photo not found" });
    return res.status(200).json(photo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default updatePhoto;
