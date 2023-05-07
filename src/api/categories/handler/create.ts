import prisma from "../../../../prisma/client";
import { CategoryHandler } from "../../../interfaces-types/interfaces";

const createCategory: CategoryHandler["create"] = async (req, res) => {
  const { name, description, price, thumbnail } = req.body;
  try {
    const category = await prisma.category.create({
      data: {
        name,
        description,
        price,
        thumbnail,
      },
    });
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createCategory;
