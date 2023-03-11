import prisma from "../../../../prisma/client";
import { TicketHandler } from "../../../interfaces-types/interfaces";

const getOneTicket: TicketHandler["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const ticket = await prisma.ticket.findUniqueOrThrow({
      where: { id },
      include: {
        author: true,
        comments: true,
      },
    });
    if (!ticket) return res.status(404).json({ message: "No ticket found" });
    return res.status(200).json(ticket);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default getOneTicket;
