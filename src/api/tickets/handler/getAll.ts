import prisma from "../../../../prisma/client";
import { TicketHandler } from "../../../interfaces-types/interfaces";

const getAllTickets: TicketHandler["getAll"] = async (req, res) => {
  try {
    const tickets = await prisma.ticket.findMany();
    if (!tickets) return res.status(404).json({ message: "No tickets found" });
    return res.status(200).json(tickets);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default getAllTickets;
