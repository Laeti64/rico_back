import prisma from "../../../../prisma/client";
import { AuthHandler } from "../../../interfaces-types/interfaces";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Cookies from "cookies";

const signup: AuthHandler["signup"] = async (req, res) => {
  const {
    email,
    password,
    adress,
    firstName,
    lastName,
    telephone,
    town,
    zipCode,
  } = req.body;
  const cookies = new Cookies(req, res, {
    secure: process.env.NODE_ENV === "production",
  });
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        adress,
        firstName,
        lastName,
        telephone,
        town,
        zipCode,
      },
    });

    const { password: removedPassword, ...userWithoutPassword } = newUser;
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

export default signup;
