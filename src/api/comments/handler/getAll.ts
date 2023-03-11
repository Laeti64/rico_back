import prisma from "../../../../prisma/client";
import { CommentHandler } from "../../../interfaces-types/interfaces";

const getAllComments: CommentHandler["getAll"] = async (req, res) => {
  try {
    const comment = await prisma.comment.findMany({});
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default getAllComments;
