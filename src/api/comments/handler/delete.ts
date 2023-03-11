import prisma from "../../../../prisma/client";
import { CommentHandler } from "../../../interfaces-types/interfaces";

const deleteComment: CommentHandler["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await prisma.comment.delete({
      where: { id },
    });
    if (!comment) return res.status(404).json({ message: "comment not found" });
    return res.status(200).json({ message: "comment deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export default deleteComment;
