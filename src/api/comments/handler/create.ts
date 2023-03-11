import prisma from "../../../../prisma/client";
import { CommentHandler } from "../../../interfaces-types/interfaces";

const createComment: CommentHandler["create"] = async (req, res) => {
  const { authorId, text, ticketId } = req.body;
  try {
    const comment = await prisma.comment.create({
      data: {
        authorId,
        text,
        ticketId,
      },
    });
    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createComment;
