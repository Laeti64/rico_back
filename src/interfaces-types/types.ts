import { User } from "@prisma/client";

export type UserWithoutPassword = Omit<User, "password">;
export type UserToUpdateClient = Partial<
  Omit<User, "id" | "role" | "createdAt" | "updatedAt">
>;
export type UserToUpdateAdmin = Partial<
  Omit<User, "id" | "createdAt" | "updatedAt">
>;
