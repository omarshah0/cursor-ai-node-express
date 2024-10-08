import { PrismaClient, User } from '@/generated/client';

const prisma = new PrismaClient();

export const getUsers = async (): Promise<User[]> => prisma.user.findMany();

export const getUserById = async (id: number): Promise<User | null> => prisma.user.findUnique({
  where: { id },
});

export const createUser = async (data: { email: string; name?: string }): Promise<User> => prisma.user.create({
  data,
});
