import prisma from "../../../../prisma/client";
import { TicketHandler } from "../../../interfaces-types/interfaces";

const createTicket: TicketHandler["create"] = async (req, res) => {
  const { authorId, deadline, description, title } = req.body;

  try {
    const newTicket = await prisma.ticket.create({
      data: {
        authorId,
        deadline,
        description,
        title,
      },
    });
    res.status(200).json(newTicket);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createTicket;
