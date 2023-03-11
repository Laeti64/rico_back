import prisma from "../../../../prisma/client";
import { StatusHandler } from "../../../interfaces-types/interfaces";

const getAllStatus: StatusHandler["getAll"] = async (req, res) => {
  try {
    const status = await prisma.status.findMany();
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getAllStatus;
