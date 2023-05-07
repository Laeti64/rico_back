import prisma from "../../../../prisma/client";
import { CategoryHandler } from "../../../interfaces-types/interfaces";

const updateCategory: CategoryHandler["update"] = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, thumbnail } = req.body;
  try {
    const category = await prisma.category.update({
      where: { id },
      data: { name, description, price, thumbnail },
    });
    if (!category)
      return res.status(404).json({ message: "category not found" });
    return res.status(200).json(category);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default updateCategory;
