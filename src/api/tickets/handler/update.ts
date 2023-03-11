import prisma from "../../../../prisma/client";
import { TicketHandler } from "../../../interfaces-types/interfaces";

const updateTicket: TicketHandler["update"] = async (req, res) => {
  const { id } = req.params;
  const { authorId, deadline, description, title } = req.body;

  try {
    const updatedTicket = await prisma.ticket.update({
      where: { id },
      data: {
        title,
        authorId,
        deadline,
        description,
      },
    });
    if (!updatedTicket)
      return res.status(404).json({ message: "No ticket found" });
    return res.status(200).json(updatedTicket);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateTicket;
