import prisma from "../../../../prisma/client";
import { TicketHandler } from "../../../interfaces-types/interfaces";

const deleteTicket: TicketHandler["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const ticketToDelete = await prisma.ticket.delete({
      where: { id },
    });
    if (!ticketToDelete)
      return res.status(404).json({ message: "No ticket found" });
    return res
      .status(200)
      .json({ message: `Ticket with id ${id} successfully deleted` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteTicket;
