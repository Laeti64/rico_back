import { Category, Comment, Photo, Ticket, User } from "@prisma/client";

export type UserWithoutPassword = Omit<User, "password">;
export type UserUpdateClient = Partial<
  Omit<User, "id" | "role" | "createdAt" | "updatedAt">
>;
export type UserBodyClient = Omit<
  User,
  "id" | "role" | "createdAt" | "updatedAt"
>;

export type UserToUpdateAdmin = Partial<
  Omit<User, "id" | "createdAt" | "updatedAt">
>;

export type UserLogin = {
  email: string;
  password: string;
};

export type TicketBody = Omit<Ticket, "id" | "createdAt" | "updatedAt">;
export type TicketToUpdate = Partial<TicketBody>;

export type StatusBody = {
  name: string;
};

export type CategoryBody = Omit<Category, "id" | "createdAt" | "updatedAt">;

export type PhotoGalleryBody = {
  name: string;
};

export type PhotoBody = Omit<Photo, "id" | "createdAt" | "updatedAt">;

export type CommentBody = Omit<Comment, "id" | "createdAt" | "updatedAt">;
