import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await prisma.user.findMany();

  res.send(JSON.stringify(users))
};
prisma
export default handler;