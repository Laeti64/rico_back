import prisma from "../../../../prisma/client";
import { AuthHandler } from "../../../interfaces-types/interfaces";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Cookies from "cookies";

const signin: AuthHandler["signin"] = async (req, res) => {
  const { email, password } = req.body;
  const cookies = new Cookies(req, res, {
    secure: process.env.NODE_ENV === "production",
  });

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "Invalid email" });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(403).json({ message: "Invalid credentials" });
    }

    const { password: removedPassword, ...userWithoutPassword } = user;
    const secret = process.env.JWT_SECRET || "secret";
    const token = jwt.sign(userWithoutPassword, secret);

    cookies.set("token", `Bearer ${token}`, {
      httpOnly: process.env.NODE_ENV === "production",
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default signin;
