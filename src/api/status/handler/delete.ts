import prisma from "../../../../prisma/client";
import { StatusHandler } from "../../../interfaces-types/interfaces";

const deleteStatus: StatusHandler["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const status = await prisma.status.delete({
      where: { id },
    });
    if (!status) return res.status(404).json({ message: "Status not found" });
    return res.status(200).json({ message: "Status deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default deleteStatus;
