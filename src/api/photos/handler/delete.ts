import prisma from "../../../../prisma/client";
import { PhotoHandler } from "../../../interfaces-types/interfaces";

const deletePhoto: PhotoHandler["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const photo = await prisma.photo.delete({
      where: { id },
    });
    if (!photo) return res.status(404).json({ message: "photo not found" });
    return res.status(200).json({ message: "photo deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default deletePhoto;
