import prisma from "../../../../prisma/client";
import { CategoryHandler } from "../../../interfaces-types/interfaces";

const deleteCategory: CategoryHandler["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await prisma.category.delete({
      where: { id },
    });
    if (!category)
      return res.status(404).json({ message: "category not found" });
    return res.status(200).json({ message: "category deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default deleteCategory;
