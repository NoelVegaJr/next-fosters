import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Animal } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const animal: Animal = req.body;

  try {
    await prisma.animal.create({ data: animal });
    res.status(201).json({ message: 'animal created' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'something went wrong' });
  }
}
