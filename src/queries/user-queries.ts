import { PrismaClient, User } from '@/generated/client';

const prisma = new PrismaClient();

export const getUsers = async (): Promise<User[]> => {
  return prisma.user.findMany();
};

export const getUserById = async (id: number): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { id },
  });
};

export const createUser = async (data: { email: string; name?: string }): Promise<User> => {
  return prisma.user.create({
    data,
  });
};