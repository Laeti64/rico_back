import prisma from "../../../../prisma/client";
import { StatusHandler } from "../../../interfaces-types/interfaces";

const getOneStatus: StatusHandler["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const status = await prisma.status.findUnique({
      where: { id },
    });
    if (!status) return res.status(404).json({ message: "Status not found" });
    return res.status(200).json(status);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default getOneStatus;
