import { Category, PhotoGallery, Status, Ticket } from "@prisma/client";
import { RequestHandler } from "express";
import { JwtPayload } from "jsonwebtoken";
import {
  CategoryBody,
  PhotoGalleryBody,
  StatusBody,
  TicketBody,
  TicketToUpdate,
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

export interface TicketHandler {
  getAll: RequestHandler<null, Ticket[] | Response, null, null>;
  getOne: RequestHandler<{ id: string }, Ticket | Response, null, null>;
  create: RequestHandler<null, Ticket | Response, TicketBody, null>;
  delete: RequestHandler<{ id: string }, Response, null, null>;
  update: RequestHandler<
    { id: string },
    Ticket | Response,
    TicketToUpdate,
    null
  >;
}

export interface StatusHandler {
  getAll: RequestHandler<null, Status[] | Response, null, null>;
  getOne: RequestHandler<{ id: string }, Status | Response, null, null>;
  create: RequestHandler<null, Status | Response, StatusBody, null>;
  delete: RequestHandler<{ id: string }, Response, null, null>;
  update: RequestHandler<{ id: string }, Status | Response, StatusBody, null>;
}

export interface CategoryHandler {
  getAll: RequestHandler<null, Category[] | Response, null, null>;
  getOne: RequestHandler<{ id: string }, Category | Response, null, null>;
  create: RequestHandler<null, Category | Response, CategoryBody, null>;
  delete: RequestHandler<{ id: string }, Response, null, null>;
  update: RequestHandler<
    { id: string },
    Category | Response,
    CategoryBody,
    null
  >;
}

export interface PhotoGalleryHandler {
  getAll: RequestHandler<null, PhotoGallery[] | Response, null, null>;
  getOne: RequestHandler<{ id: string }, PhotoGallery | Response, null, null>;
  create: RequestHandler<null, PhotoGallery | Response, PhotoGalleryBody, null>;
  delete: RequestHandler<{ id: string }, Response, null, null>;
  update: RequestHandler<
    { id: string },
    PhotoGallery | Response,
    PhotoGalleryBody,
    null
  >;
}
