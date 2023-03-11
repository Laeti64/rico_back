import prisma from "../../../../prisma/client";
import { CategoryHandler } from "../../../interfaces-types/interfaces";

const getAllCategories: CategoryHandler["getAll"] = async (req, res) => {
  try {
    const category = await prisma.category.findMany({
      include: {
        tickets: true,
        photos: true,
      },
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getAllCategories;
