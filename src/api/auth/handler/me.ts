import { AuthHandler } from "../../../interfaces-types/interfaces";
import getToken from "../../../utils/getToken";
import jwt from "jsonwebtoken";

const me: AuthHandler["me"] = async (req, res) => {
  const token = getToken(req, res);
  if (!token) return res.status(401).json({ message: "You need to log in" });

  const secret = process.env.JWT_SECRET || "secret";
  const decodedToken = jwt.verify(token, secret);
  if (typeof decodedToken === "string") {
    throw new Error(decodedToken);
  }
  console.log(decodedToken);
  return res.status(200).json(decodedToken);
};

export default me;
