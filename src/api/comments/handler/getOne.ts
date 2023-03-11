import prisma from "../../../../prisma/client";
import { CommentHandler } from "../../../interfaces-types/interfaces";

const getOneComment: CommentHandler["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await prisma.comment.findUnique({
      where: { id },
    });
    if (!comment) return res.status(404).json({ message: "comment not found" });
    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default getOneComment;
