import { Ticket, User } from "@prisma/client";

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
