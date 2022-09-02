import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getAnimal(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  try {
    const animal = await prisma.animal.findUnique({
      where: {
        id: id,
      },
    });

    res.status(200).json(animal);
  } catch {
    res.status(404).json({ message: 'Animal not found' });
  }
}
