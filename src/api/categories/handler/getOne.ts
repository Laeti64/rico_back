import prisma from "../../../../prisma/client";
import { CategoryHandler } from "../../../interfaces-types/interfaces";

const getOneCategory: CategoryHandler["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await prisma.category.findUnique({
      where: { id },
      include: {
        tickets: true,
        photos: true,
      },
    });
    if (!category)
      return res.status(404).json({ message: "category not found" });
    return res.status(200).json(category);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default getOneCategory;
