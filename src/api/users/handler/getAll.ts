import { UserHandler } from "../../../interfaces-types/interfaces";
import prisma from "../../../../prisma/client";

const getAllUsers: UserHandler["getAll"] = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        telephone: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        adress: true,
        town: true,
        zipCode: true,
        tickets: true,
      },
    });
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllUsers;
