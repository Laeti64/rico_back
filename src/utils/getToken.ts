import Cookies from "cookies";
import { Request, Response } from "express";

const getToken = (req: Request, res: Response) => {
  const cookies = new Cookies(req, res);
  const headerToken = req.headers["authorization"]?.split(" ")[1];
  const headerCookie = cookies.get("token")?.split(" ")[1];

  return headerToken || headerCookie;
};

export default getToken;
