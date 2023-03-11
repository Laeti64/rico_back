import prisma from "../../../../prisma/client";
import { UserHandler } from "../../../interfaces-types/interfaces";

const deleteUser: UserHandler["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: `user with id ${id} deleted` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error while deleting" });
  }
};

export default deleteUser;
