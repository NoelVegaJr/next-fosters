import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let id = req.query.id as string;
  console.log(id);

  try {
    const animals = await prisma.animal.findMany({
      where: {
        userId: id,
      },
    });

    console.log(animals);
    return res.status(200).json(animals);
  } catch (err) {
    res.status(500).json({ message: 'Error finding user' });
  }
};

export default handler;
