import prisma from "../../../../prisma/client";
import { UserHandler } from "../../../interfaces-types/interfaces";

const getOneUser: UserHandler["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
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
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneUser;
