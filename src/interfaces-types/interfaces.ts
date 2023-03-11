import { RequestHandler } from "express";
import {
  UserToUpdateAdmin,
  UserToUpdateClient,
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
    UserToUpdateClient,
    null
  >;
  updateAdmin: RequestHandler<
    { id: string },
    UserWithoutPassword | Response,
    UserToUpdateAdmin,
    null
  >;
}
