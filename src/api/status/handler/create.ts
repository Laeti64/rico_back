import prisma from "../../../../prisma/client";
import { StatusHandler } from "../../../interfaces-types/interfaces";

const createStatus: StatusHandler["create"] = async (req, res) => {
  const { name } = req.body;
  try {
    const status = await prisma.status.create({
      data: {
        name,
      },
    });
    res.status(200).json(status);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createStatus;
