import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const animals = await prisma.animal.findMany();
  console.log(animals);
  res.status(200).json(animals);
};

export default handler;
