import { RequestHandler } from "express";
import { JwtPayload } from "jsonwebtoken";
import {
  UserBodyClient,
  UserLogin,
  UserToUpdateAdmin,
  UserUpdateClient,
  UserWithoutPassword,
} from "./types";

export interface Response {
  message: string | unknown;
}

export interface UserHandler {
  getAll: RequestHandler<null, UserWithoutPassword[] | Response, null, null>;
  getOne: RequestHandler<
    { id: string },
    UserWithoutPassword | Response,
    null,
    null
  >;
  delete: RequestHandler<{ id: string }, Response, null, null>;
  updateClient: RequestHandler<
    { id: string },
    UserWithoutPassword | Response,
    UserUpdateClient,
    null
  >;
  updateAdmin: RequestHandler<
    { id: string },
    UserWithoutPassword | Response,
    UserToUpdateAdmin,
    null
  >;
}

export interface AuthHandler {
  signin: RequestHandler<null, UserWithoutPassword | Response, UserLogin, null>;
  signup: RequestHandler<
    null,
    UserWithoutPassword | Response,
    UserBodyClient,
    null
  >;
  signout: RequestHandler<null, Response, null, null>;
  me: RequestHandler<Record<any, string>, JwtPayload | Response>;
}
