import prisma from "../../../../prisma/client";
import { UserHandler } from "../../../interfaces-types/interfaces";
import bcrypt from "bcrypt";

const updateClient: UserHandler["updateClient"] = async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    password,
    adress,
    email,
    telephone,
    town,
    zipCode,
  } = req.body;

  try {
    const hashedPassword = password ? bcrypt.hashSync(password, 10) : undefined;
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        firstName,
        lastName,
        password: hashedPassword ? hashedPassword : undefined,
        adress,
        email,
        telephone,
        town,
        zipCode,
      },
    });
    const { password: removedPassword, ...userWithoutPassword } = updatedUser;
    return res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error while updating" });
  }
};

export default updateClient;
