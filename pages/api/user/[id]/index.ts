import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
}

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let id = req.query.id as string;
  console.log(id);

  try {
    const user: User = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    console.log(user);
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error finding user' });
  }
};

export default handler;
