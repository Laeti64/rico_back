import { AuthHandler } from "../../../interfaces-types/interfaces";

const signout: AuthHandler["signout"] = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Sign out success" });
};

export default signout;
